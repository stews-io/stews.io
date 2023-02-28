import { throwInvalidPathError } from '@stews/helpers'
import { ComponentProps } from 'preact'
import {
  Ref,
  StateUpdater,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'preact/hooks'
import { PageContext } from './Page'
import cssModule from './Popover.module.scss'

export interface PopoverProps extends Pick<ComponentProps<'div'>, 'children'> {
  anchorRef: Ref<HTMLDivElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
}

export function Popover(props: PopoverProps) {
  const { setPopoverOpen, anchorRef, popoverOpen, children } = props
  const popoverRef = useRef<HTMLDivElement>(null)
  const closePopover = useMemo(() => () => setPopoverOpen(false), [])
  const pointerStateRef = useRef({
    pointerWithin: true,
  })
  useEffect(() => {
    const windowScrollHandler = () => {
      if (!pointerStateRef.current.pointerWithin) {
        closePopover()
      }
    }
    const windowPointerDownHandler = (somePointerEvent: PointerEvent) => {
      const popoverElement = popoverRef.current
      if (popoverElement instanceof HTMLDivElement) {
        const popoverClientRect = popoverElement.getBoundingClientRect()
        const pointerWithinPopover =
          popoverClientRect &&
          somePointerEvent.clientX >= popoverClientRect.left &&
          somePointerEvent.clientX <= popoverClientRect.right &&
          somePointerEvent.clientY >= popoverClientRect.top &&
          somePointerEvent.clientY <= popoverClientRect.bottom
        if (!pointerWithinPopover) {
          closePopover()
        }
      }
    }
    const windowResizeHandler = () => {
      closePopover()
    }
    window.addEventListener('scroll', windowScrollHandler)
    window.addEventListener('pointerdown', windowPointerDownHandler)
    window.addEventListener('resize', windowResizeHandler)
    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
      window.removeEventListener('pointerdown', windowPointerDownHandler)
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [])
  const pageContentRef = useContext(PageContext)
  return popoverOpen ? (
    <div
      ref={popoverRef}
      className={cssModule.popoverContainer}
      style={getPopoverLayoutStyle({
        anchorRef,
        popoverOpen,
        pageContentRef,
      })}
      onPointerEnter={(somePointerEnterEvent: PointerEvent) => {
        if (somePointerEnterEvent.pointerType === 'mouse') {
          pointerStateRef.current.pointerWithin = true
          document.body.style.overflow = 'hidden'
        }
      }}
      onPointerLeave={(somePointerLeaveEvent: PointerEvent) => {
        if (somePointerLeaveEvent.pointerType === 'mouse') {
          pointerStateRef.current.pointerWithin = false
          document.body.style.overflow = 'inherit'
        }
      }}
    >
      {children}
    </div>
  ) : null
}

interface GetPopoverLayoutStyleApi
  extends Pick<PopoverProps, 'anchorRef' | 'popoverOpen'> {
  pageContentRef: Ref<HTMLDivElement>
}

function getPopoverLayoutStyle(api: GetPopoverLayoutStyleApi) {
  const { anchorRef, popoverOpen, pageContentRef } = api
  const pageContentClientRect = pageContentRef.current?.getBoundingClientRect()
  const anchorClientRect = anchorRef.current?.getBoundingClientRect()
  if (pageContentClientRect && anchorClientRect && popoverOpen) {
    const maxPopoverPadding = 48
    const pageMiddleX =
      pageContentClientRect.left + pageContentClientRect.width / 2
    const anchorMiddleX = anchorClientRect.left + anchorClientRect.width / 2
    const popoverDirection: 'left' | 'right' =
      anchorMiddleX > pageMiddleX ? 'left' : 'right'
    return {
      position: 'absolute',
      top: anchorClientRect.y,
      maxHeight: window.innerHeight - maxPopoverPadding,
      maxWidth: pageContentClientRect.width - maxPopoverPadding,
      ...(popoverDirection === 'right'
        ? {
            left: anchorClientRect.left - pageContentClientRect.left,
            right: undefined,
          }
        : {
            left: undefined,
            right:
              pageContentClientRect.width -
              (anchorClientRect.x -
                pageContentClientRect.x +
                anchorClientRect.width),
          }),
    }
  } else {
    throwInvalidPathError('getPopoverLayoutStyle')
  }
}
