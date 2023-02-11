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
    const maxPopoverPadding = 16
    const pageContentBoundingClientRect =
      pageContentRef.current?.getBoundingClientRect()
    console.log(pageContentRef.current)
    return {
      visibility: popoverOpen ? 'visible' : 'hidden',
      position: 'absolute',
      left: 0,
      top: 0,
      maxWidth: pageContentBoundingClientRect
        ? pageContentBoundingClientRect.width - maxPopoverPadding
        : undefined,
      maxHeight: pageContentBoundingClientRect
        ? Math.min(pageContentBoundingClientRect.height, window.innerHeight) -
          maxPopoverPadding
        : undefined,
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
