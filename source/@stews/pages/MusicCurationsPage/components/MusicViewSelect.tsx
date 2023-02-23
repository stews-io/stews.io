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
  const {
    getMenuProps,
    getListItemProps,
    getItemActionProps,
    focusedViewIndex,
    getMenuFooterActionProps,
  } = useSelectManager({
    anchorRef,
    popoverOpen,
    setPopoverOpen,
    selectMusicView,
  })
  return (
    <div className={cssModule.selectMenu} {...getMenuProps()}>
      {musicViews.map((someMusicView, musicViewIndex) => (
        <div
          key={someMusicView.viewId}
          className={getCssClass(
            cssModule.menuItem,
            [
              cssModule.selectedItem,
              selectedMusicView.viewId === someMusicView.viewId,
            ],
            [
              cssModule.latestFocusedListItem,
              focusedViewIndex === musicViewIndex,
            ]
          )}
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
          <div className={cssModule.itemActionContainer}>
            <div {...getItemActionProps(someMusicView, musicViewIndex)}>
              <svg className={cssModule.actionIcon} viewBox={'0 0 24 24'}>
                <path
                  d={
                    'M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M16.54,15.85l-0.69,0.69c-0.39,0.39-1.02,0.39-1.41,0l-3.05-3.05c-1.22,0.43-2.64,0.17-3.62-0.81 c-1.11-1.11-1.3-2.79-0.59-4.1l2.35,2.35l1.41-1.41L8.58,7.17c1.32-0.71,2.99-0.52,4.1,0.59c0.98,0.98,1.24,2.4,0.81,3.62 l3.05,3.05C16.93,14.82,16.93,15.46,16.54,15.85z'
                  }
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
      <div className={cssModule.menuFooter}>
        <div className={cssModule.footerDivider} />
        <div className={cssModule.footerButtonContainer}>
          <div
            className={cssModule.createViewButton}
            tabIndex={0}
            onClick={() => {}}
            onKeyDown={() => {
              console.log('keydown')
            }}
            {...getMenuFooterActionProps()}
          >
            create view
          </div>
        </div>
      </div>
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
  getItemActionProps: (
    someMusicView: MusicView,
    musicViewIndex: number
  ) => Pick<Required<ComponentProps<'div'>>, 'tabIndex' | 'onBlur'> & {
    'data-menu-item': true
  }
  getMenuFooterActionProps: () => Pick<
    Required<ComponentProps<'div'>>,
    'onBlur'
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
          const listItemsLength = listItemsRef.current.length
          const currentFocusedViewIndex =
            typeof focusedViewIndex === 'number'
              ? focusedViewIndex
              : throwInvalidPathError('getMenuProps.onKeyDown')
          if (someKeyDownEvent.key === 'ArrowDown') {
            const nextMusicViewIndex =
              (currentFocusedViewIndex + 1) % listItemsLength
            const nextListItemElement = listItemsRef.current[nextMusicViewIndex]
            nextListItemElement instanceof HTMLDivElement
              ? nextListItemElement.focus()
              : throwInvalidPathError('getListItemProps.onKeyDown.ArrowDown')
          } else if (someKeyDownEvent.key === 'ArrowUp') {
            const previousMusicViewIndex =
              (((currentFocusedViewIndex - 1) % listItemsLength) +
                listItemsLength) %
              listItemsLength
            const previousListItemElement =
              listItemsRef.current[previousMusicViewIndex]
            previousListItemElement instanceof HTMLDivElement
              ? previousListItemElement.focus()
              : throwInvalidPathError('getListItemProps.onKeyDown.ArrowUp')
          } else if (someKeyDownEvent.key === 'Escape') {
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
          if (someKeyDownEvent.key === 'Enter') {
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
    getItemActionProps: (someMusicView: MusicView, musicViewIndex: number) => {
      return {
        'data-menu-item': true,
        tabIndex: focusedViewIndex === musicViewIndex ? 0 : -1,
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
              : throwInvalidPathError('getItemActionProps.onBlur.tabNextEscape')
          }
        },
      }
    },
    getMenuFooterActionProps: () => {
      return {
        'data-menu-item': true,
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
              : throwInvalidPathError(
                  'getMenuFooterActionProps.onBlur.tabNextEscape'
                )
          }
        },
      }
    },
  }
}
