import { Popover } from '@stews/components/Popover'
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
    musicViews,
  } = props
  const { getMenuProps, getListItemProps } = useSelectManager({
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
          className={cssModule.menuItem}
          {...getListItemProps(someMusicView, musicViewIndex)}
        >
          <div className={cssModule.itemLabel}>{someMusicView.viewLabel}</div>
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
  const listItemsRef = useRef<Array<HTMLDivElement>>([])
  const [focusedViewIndex, setFocusedViewIndex] = useState<number | null>(null)
  useEffect(() => {
    if (popoverOpen) {
      listItemsRef.current[0]?.focus()
    } else {
      setFocusedViewIndex(null)
    }
  }, [popoverOpen])
  return {
    getMenuProps: () => {
      return {
        onKeyDown: (someKeyDownEvent) => {
          if (focusedViewIndex === null) {
            throw new Error('invalid path reached: ViewSelectMenu.onKeyDown')
          } else if (someKeyDownEvent.key === 'Escape') {
            anchorRef.current?.focus()
          }
        },
      }
    },
    getListItemProps: (someMusicView: MusicView, musicViewIndex: number) => {
      return {
        'data-menu-item': true,
        tabIndex: -1,
        ref: (listItemElement) => {
          listItemsRef.current[musicViewIndex] = listItemElement!
        },
        onPointerEnter: () => {
          listItemsRef.current[musicViewIndex]?.focus()
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'ArrowDown') {
            listItemsRef.current[musicViewIndex + 1]?.focus()
          } else if (someKeyDownEvent.key === 'ArrowUp') {
            listItemsRef.current[musicViewIndex - 1]?.focus()
          } else if (someKeyDownEvent.key === 'Enter') {
            selectMusicView(someMusicView)
            anchorRef.current?.focus()
          }
        },
        onBlur: (someBlurEvent) => {
          const nextFocusIsListItem =
            someBlurEvent.relatedTarget instanceof HTMLElement &&
            Boolean(
              someBlurEvent.relatedTarget.attributes.getNamedItem(
                'data-menu-item'
              )?.value
            )
          if (
            // tab next escape
            !nextFocusIsListItem &&
            someBlurEvent.relatedTarget !== anchorRef.current
          ) {
            setPopoverOpen(false)
            anchorRef.current?.focus()
          } else if (
            // tab previous escape && enter select
            !nextFocusIsListItem &&
            popoverOpen === true
          ) {
            setPopoverOpen(false)
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
