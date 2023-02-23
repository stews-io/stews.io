import { Popover } from '@stews/components/Popover'
import { getCssClass, throwInvalidPathError } from '@stews/helpers'
import { ComponentProps } from 'preact'
import { Ref, StateUpdater, useEffect, useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { MusicView } from '../data'
import cssModule from './MusicViewSelect.module.scss'

export interface MusicViewSelectProps {
  musicViews: Array<MusicView>
  selectedMusicView: MusicView
  selectMusicView: (nextSelectedMusicView: MusicView) => void
}

export function MusicViewSelect(props: MusicViewSelectProps) {
  const { selectedMusicView, musicViews, selectMusicView } = props
  const anchorRef = useRef<HTMLDivElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <div className={cssModule.buttonContainer}>
        <div
          tabIndex={0}
          ref={anchorRef}
          className={cssModule.selectButton}
          onClick={() => {
            setPopoverOpen(!popoverOpen)
          }}
          onKeyDown={(someKeyDownEvent) => {
            if (someKeyDownEvent.key === 'Enter') {
              setPopoverOpen(!popoverOpen)
            }
          }}
        >
          <div className={cssModule.buttonLabel}>
            {selectedMusicView.viewLabel}
          </div>
          <div className={cssModule.buttonIconContainer}>
            <svg className={cssModule.buttonIcon} viewBox={'0 0 1 1'}>
              <polygon
                className={cssModule.dropdownPolygon}
                points={'0.2,0.375 0.8,0.375 0.5,0.775'}
              />
            </svg>
          </div>
        </div>
      </div>
      <Popover
        anchorRef={anchorRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
      >
        <ViewSelectMenu
          musicViews={musicViews}
          selectedMusicView={selectedMusicView}
          selectMusicView={selectMusicView}
          popoverOpen={popoverOpen}
          setPopoverOpen={setPopoverOpen}
          anchorRef={anchorRef}
        />
      </Popover>
    </Fragment>
  )
}

interface ViewSelectMenuProps
  extends Pick<
    MusicViewSelectProps,
    'musicViews' | 'selectedMusicView' | 'selectMusicView'
  > {
  anchorRef: Ref<HTMLDivElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
}

function ViewSelectMenu(props: ViewSelectMenuProps) {
  const {
    anchorRef,
    popoverOpen,
    setPopoverOpen,
    selectMusicView,
    selectedMusicView,
    musicViews,
  } = props
  const { getMenuProps, getListItemProps, focusedViewIndex } = useSelectManager(
    {
      anchorRef,
      popoverOpen,
      setPopoverOpen,
      selectMusicView,
    }
  )
  return (
    <div className={cssModule.selectMenu} {...getMenuProps()}>
      {musicViews.map((someMusicView, musicViewIndex) => (
        <div
          key={someMusicView.viewId}
          className={getCssClass(cssModule.menuItem, [
            cssModule.selectedItem,
            selectedMusicView.viewId === someMusicView.viewId,
          ])}
          {...getListItemProps(someMusicView, musicViewIndex)}
        >
          <svg className={cssModule.itemSelectedIcon} viewBox={'0 0 24 24'}>
            <path
              d={
                'M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z'
              }
            />
          </svg>
          <div className={cssModule.itemLabel}>{someMusicView.viewLabel}</div>
          {/* <div tabIndex={focusedViewIndex === musicViewIndex ? 0 : -1}>
            <div></div>
          </div> */}
        </div>
      ))}
    </div>
  )
}

interface UseSelectManagerApi
  extends Pick<
    ViewSelectMenuProps,
    'popoverOpen' | 'setPopoverOpen' | 'anchorRef' | 'selectMusicView'
  > {}

interface UseSelectManagerResult {
  focusedViewIndex: number | null
  getMenuProps: () => Pick<Required<ComponentProps<'div'>>, 'onKeyDown'>
  getListItemProps: (
    someMusicView: MusicView,
    musicViewIndex: number
  ) => Pick<
    Required<ComponentProps<'div'>>,
    | 'tabIndex'
    | 'ref'
    | 'onPointerEnter'
    | 'onKeyDown'
    | 'onBlur'
    | 'onFocus'
    | 'onClick'
  > & {
    'data-menu-item': true
  }
}

function useSelectManager(api: UseSelectManagerApi): UseSelectManagerResult {
  const { popoverOpen, setPopoverOpen, anchorRef, selectMusicView } = api
  const listItemsRef = useRef<Array<HTMLDivElement | null>>([])
  const [focusedViewIndex, setFocusedViewIndex] = useState<number | null>(null)
  useEffect(() => {
    if (popoverOpen) {
      listItemsRef.current[0] instanceof HTMLDivElement
        ? listItemsRef.current[0].focus()
        : throwInvalidPathError('useSelectManager.useEffect[]')
    } else {
      setFocusedViewIndex(null)
    }
  }, [popoverOpen])
  return {
    focusedViewIndex,
    getMenuProps: () => {
      return {
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'Escape') {
            anchorRef.current instanceof HTMLDivElement
              ? anchorRef.current.focus()
              : throwInvalidPathError('getMenuProps.onKeyDown.Escape')
          }
        },
      }
    },
    getListItemProps: (someMusicView: MusicView, musicViewIndex: number) => {
      return {
        'data-menu-item': true,
        tabIndex: -1,
        ref: (listItemElement) => {
          listItemsRef.current[musicViewIndex] = listItemElement
        },
        onPointerEnter: () => {
          const targetListItemElement = listItemsRef.current[musicViewIndex]
          targetListItemElement instanceof HTMLDivElement
            ? targetListItemElement.focus()
            : throwInvalidPathError('getListItemProps.onPointerEnter')
        },
        onKeyDown: (someKeyDownEvent) => {
          const listItemsLength = listItemsRef.current.length
          if (someKeyDownEvent.key === 'ArrowDown') {
            const nextMusicViewIndex = (musicViewIndex + 1) % listItemsLength
            const nextListItemElement = listItemsRef.current[nextMusicViewIndex]
            nextListItemElement instanceof HTMLDivElement
              ? nextListItemElement.focus()
              : throwInvalidPathError('getListItemProps.onKeyDown.ArrowDown')
          } else if (someKeyDownEvent.key === 'ArrowUp') {
            const previousMusicViewIndex =
              (((musicViewIndex - 1) % listItemsLength) + listItemsLength) %
              listItemsLength
            const previousListItemElement =
              listItemsRef.current[previousMusicViewIndex]
            previousListItemElement instanceof HTMLDivElement
              ? previousListItemElement.focus()
              : throwInvalidPathError('getListItemProps.onKeyDown.ArrowUp')
          } else if (someKeyDownEvent.key === 'Enter') {
            selectMusicView(someMusicView)
            anchorRef.current instanceof HTMLDivElement
              ? anchorRef.current.focus()
              : throwInvalidPathError('getListItemProps.onKeyDown.Enter')
          }
        },
        onBlur: (someBlurEvent) => {
          const windowBlur = someBlurEvent.relatedTarget === null
          const tabPreviousEscapeOrEnterSelect =
            popoverOpen && someBlurEvent.relatedTarget === anchorRef.current
          const tabNextEscape =
            popoverOpen &&
            someBlurEvent.relatedTarget instanceof HTMLElement &&
            !Boolean(
              someBlurEvent.relatedTarget.attributes.getNamedItem(
                'data-menu-item'
              )?.value
            )
          if (windowBlur || tabPreviousEscapeOrEnterSelect) {
            setPopoverOpen(false)
          } else if (tabNextEscape) {
            setPopoverOpen(false)
            // redirect focus from tab next target to anchor
            anchorRef.current instanceof HTMLDivElement
              ? anchorRef.current.focus()
              : throwInvalidPathError('getListProps.onBlur.tabNextEscape')
          }
        },
        onFocus: () => {
          setFocusedViewIndex(musicViewIndex)
        },
        onClick: () => {
          selectMusicView(someMusicView)
          setPopoverOpen(false)
        },
      }
    },
  }
}
