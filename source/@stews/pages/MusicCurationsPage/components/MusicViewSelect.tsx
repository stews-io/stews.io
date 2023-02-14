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
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <div className={cssModule.buttonContainer}>
        <button
          ref={anchorRef}
          className={cssModule.selectButton}
          onClick={() => {
            setPopoverOpen(!popoverOpen)
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
        </button>
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
  anchorRef: Ref<HTMLButtonElement>
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
  getMenuProps: () => Pick<ComponentProps<'div'>, 'onKeyDown' | 'onfocusout'>
  getListItemProps: (
    someMusicView: MusicView,
    musicViewIndex: number
  ) => Pick<ComponentProps<'div'>, 'onClick' | 'onKeyDown' | 'onMouseOver'>
}

function useSelectManager(api: UseSelectManagerApi): UseSelectManagerResult {
  const { popoverOpen, setPopoverOpen, anchorRef, selectMusicView } = api
  const listItemsRef = useRef<Array<HTMLDivElement>>([])
  const [focusedViewIndex, setFocusedViewIndex] = useState<number | null>(null)
  useEffect(() => {
    if (popoverOpen) {
      setFocusedViewIndex(0)
    }
  }, [popoverOpen])
  useEffect(() => {
    if (typeof focusedViewIndex === 'number') {
      listItemsRef.current[focusedViewIndex]!.focus()
    } else if (focusedViewIndex === null) {
      setPopoverOpen(false)
    }
  }, [focusedViewIndex])
  return {
    getMenuProps: () => {
      return {
        onKeyDown: (someKeyDownEvent) => {
          const listLength = listItemsRef.current.length
          if (focusedViewIndex === null) {
            throw new Error('invalid path reached: ViewSelectMenu.onKeyDown')
          } else if (someKeyDownEvent.key === 'ArrowDown') {
            const nextFocusedViewIndex = (focusedViewIndex + 1) % listLength
            setFocusedViewIndex(nextFocusedViewIndex)
          } else if (someKeyDownEvent.key === 'ArrowUp') {
            const nextFocusedViewIndex =
              (((focusedViewIndex - 1) % listLength) + listLength) % listLength
            setFocusedViewIndex(nextFocusedViewIndex)
          } else if (someKeyDownEvent.key === 'Escape') {
            anchorRef.current?.focus()
            /// onfocusout key exit handler will set
            /// setFocusedViewIndex(null)
          }
        },
        onfocusout: (someFocusEvent) => {
          const siblingIndex = listItemsRef.current.find(
            (someListItem) => someListItem === someFocusEvent.relatedTarget
          )
          if (siblingIndex === undefined && someFocusEvent.relatedTarget) {
            // key exit (tab & esc) & key select (enter)
            anchorRef.current?.focus()
            setFocusedViewIndex(null)
          } else if (siblingIndex === undefined) {
            // click escape & click select
            setFocusedViewIndex(null)
          } else {
            // focused view index change (arrow down, arrow up, mouse over)
          }
        },
      }
    },
    getListItemProps: (someMusicView: MusicView, musicViewIndex: number) => {
      return {
        tabIndex: -1,
        ref: (listItemElement: HTMLDivElement) => {
          listItemsRef.current[musicViewIndex] = listItemElement!
        },
        onMouseOver: () => {
          if (focusedViewIndex !== musicViewIndex) {
            setFocusedViewIndex(musicViewIndex)
          }
        },
        onClick: () => {
          anchorRef.current?.focus()
          selectMusicView(someMusicView)
          // onfocusout key exit handler will set
          /// setFocusedViewIndex(null)
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'Enter') {
            anchorRef.current?.focus()
            selectMusicView(someMusicView)
            // onfocusout key exit handler will set
            /// setFocusedViewIndex(null)
          }
        },
      }
    },
  }
}
