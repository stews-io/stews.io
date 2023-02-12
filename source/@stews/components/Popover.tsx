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
  anchorRef: Ref<HTMLButtonElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
}

export function Popover(props: PopoverProps) {
  const { setPopoverOpen, anchorRef, children, popoverOpen } = props
  const popoverRef = useRef<HTMLDivElement>(null)
  const closePopover = useMemo(() => () => setPopoverOpen(false), [])
  const pointerStateRef = useRef({
    pointerWithin: true,
  })
  useEffect(() => {
    const popoverElement = popoverRef.current
    if (popoverElement) {
      const popoverPointerEnterHandler = (somePointerEvent: PointerEvent) => {
        if (somePointerEvent.pointerType === 'mouse') {
          pointerStateRef.current.pointerWithin = true
          document.body.style.overflow = 'hidden'
        }
      }
      const popoverPointerLeaveHandler = (somePointerEvent: PointerEvent) => {
        if (somePointerEvent.pointerType === 'mouse') {
          pointerStateRef.current.pointerWithin = false
          document.body.style.overflow = 'inherit'
        }
      }
      const windowScrollHandler = () => {
        if (!pointerStateRef.current.pointerWithin) {
          closePopover()
        }
      }
      const windowPointerDownHandler = (somePointerEvent: PointerEvent) => {
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
      const windowResizeHandler = () => {
        closePopover()
      }
      popoverElement.addEventListener(
        'pointerenter',
        popoverPointerEnterHandler
      )
      popoverElement.addEventListener(
        'pointerleave',
        popoverPointerLeaveHandler
      )
      window.addEventListener('scroll', windowScrollHandler)
      window.addEventListener('pointerdown', windowPointerDownHandler)
      window.addEventListener('resize', windowResizeHandler)
      return () => {
        popoverElement.removeEventListener(
          'pointerenter',
          popoverPointerEnterHandler
        )
        popoverElement.removeEventListener(
          'pointerleave',
          popoverPointerLeaveHandler
        )
        window.removeEventListener('scroll', windowScrollHandler)
        window.removeEventListener('pointerdown', windowPointerDownHandler)
        window.removeEventListener('resize', windowResizeHandler)
      }
    } else {
      throw new Error('invalid path reached: "popoverRef.current" is null')
    }
  }, [])
  const pageContentRef = useContext(PageContext)
  const popoverLayoutStyle = useMemo(() => {
    const pageContentClientRect =
      pageContentRef.current?.getBoundingClientRect()
    const anchorClientRect = anchorRef.current?.getBoundingClientRect()
    if (pageContentClientRect && anchorClientRect && popoverOpen) {
      const maxPopoverPadding = 24
      const pageMiddleX =
        pageContentClientRect.x + pageContentClientRect.width / 2
      const anchorMiddleX = anchorClientRect.x + anchorClientRect.width / 2
      const popoverDirection: 'left' | 'right' =
        anchorMiddleX > pageMiddleX ? 'left' : 'right'
      return {
        position: 'absolute',
        top: anchorClientRect.y,
        maxHeight: window.innerHeight - maxPopoverPadding,
        maxWidth: pageContentClientRect.width - maxPopoverPadding,
        ...(popoverDirection === 'right'
          ? {
              left: pageContentClientRect.x - anchorClientRect.x,
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
      return {
        display: 'none',
        width: 0,
        height: 0,
      }
    }
  }, [popoverOpen])
  return (
    <div
      ref={popoverRef}
      className={cssModule.popoverContainer}
      style={popoverLayoutStyle}
    >
      {children}
    </div>
  )
}
