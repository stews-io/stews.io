import { throwInvalidPathError } from '@stews/helpers'
import {
  Ref,
  StateUpdater,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { PageContext } from './Page'
import cssModule from './Popover.module.scss'

export interface PopoverProps<CustomPopoverContentProps> {
  anchorElementRef: Ref<HTMLDivElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
  customPopoverContentProps: CustomPopoverContentProps
  PopoverContent: (
    props: PopoverContentProps<CustomPopoverContentProps>
  ) => JSXInternal.Element
}

type PopoverContentProps<CustomPopoverContentProps> = CorePopoverContentProps &
  CustomPopoverContentProps

export interface CorePopoverContentProps
  extends Pick<
    PopoverProps<unknown>,
    'anchorElementRef' | 'popoverOpen' | 'setPopoverOpen'
  > {}

export function Popover<CustomPopoverContentProps>(
  props: PopoverProps<CustomPopoverContentProps>
) {
  const {
    setPopoverOpen,
    anchorElementRef,
    popoverOpen,
    PopoverContent,
    customPopoverContentProps,
  } = props
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
        anchorElementRef,
        popoverOpen,
        pageContentRef,
      })}
      onPointerEnter={(somePointerEnterEvent) => {
        if (somePointerEnterEvent.pointerType === 'mouse') {
          pointerStateRef.current.pointerWithin = true
          document.body.style.overflow = 'hidden'
        }
      }}
      onPointerLeave={(somePointerLeaveEvent) => {
        if (somePointerLeaveEvent.pointerType === 'mouse') {
          pointerStateRef.current.pointerWithin = false
          document.body.style.overflow = 'inherit'
        }
      }}
    >
      <PopoverContent
        anchorElementRef={anchorElementRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        {...customPopoverContentProps}
      />
    </div>
  ) : null
}

interface GetPopoverLayoutStyleApi
  extends Pick<PopoverProps<unknown>, 'anchorElementRef' | 'popoverOpen'> {
  pageContentRef: Ref<HTMLDivElement>
}

function getPopoverLayoutStyle(api: GetPopoverLayoutStyleApi) {
  const { anchorElementRef, popoverOpen, pageContentRef } = api
  const pageContentClientRect = pageContentRef.current?.getBoundingClientRect()
  const anchorClientRect = anchorElementRef.current?.getBoundingClientRect()
  if (pageContentClientRect && anchorClientRect && popoverOpen) {
    const maxPopoverPadding = 40
    const offsetLength = 2
    const pageMiddleX =
      pageContentClientRect.left + pageContentClientRect.width / 2
    const anchorMiddleX = anchorClientRect.left + anchorClientRect.width / 2
    const popoverDirection: 'left' | 'right' =
      anchorMiddleX > pageMiddleX ? 'left' : 'right'
    return {
      position: 'absolute',
      top: anchorClientRect.top - offsetLength,
      maxHeight: window.innerHeight - maxPopoverPadding,
      maxWidth: pageContentClientRect.width - maxPopoverPadding,
      ...(popoverDirection === 'right'
        ? {
            right: undefined,
            left:
              anchorClientRect.left - pageContentClientRect.left - offsetLength,
          }
        : {
            left: undefined,
            right:
              pageContentClientRect.right -
              anchorClientRect.right -
              offsetLength,
          }),
    }
  } else {
    throwInvalidPathError('getPopoverLayoutStyle')
  }
}
