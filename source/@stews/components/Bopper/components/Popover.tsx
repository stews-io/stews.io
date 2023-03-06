import { PageContext } from '@stews/components/Page'
import { throwInvalidPathError } from '@stews/helpers'
import { FunctionComponent, createRef, RefObject } from 'preact'
import {
  Ref,
  StateUpdater,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'preact/hooks'
import cssModule from './Popover.module.scss'

export interface PopoverProps<CustomPopoverContentProps> {
  anchorElementRef: Ref<HTMLDivElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
  customPopoverContentProps: CustomPopoverContentProps
  PopoverContent: FunctionComponent<
    PopoverContentProps<CustomPopoverContentProps>
  >
}

type PopoverContentProps<CustomPopoverContentProps> = CorePopoverContentProps &
  CustomPopoverContentProps

export interface CorePopoverContentProps
  extends Pick<
    PopoverProps<unknown>,
    'anchorElementRef' | 'popoverOpen' | 'setPopoverOpen'
  > {
  initialFocusElementRef: RefObject<HTMLDivElement>
  popoverNavigationItemBlurHandler: (someBlurEvent: FocusEvent) => void
}

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
  const pageContentRef = useContext(PageContext)
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
  const initialFocusElementRef = useMemo(() => createRef<HTMLDivElement>(), [])
  useEffect(() => {
    if (popoverOpen) {
      if (
        initialFocusElementRef.current instanceof HTMLDivElement &&
        anchorElementRef.current?.hasAttribute('data-pointer-focus')
      ) {
        initialFocusElementRef.current.focus()
        initialFocusElementRef.current.setAttribute(
          'data-pointer-focus',
          'true'
        )
      } else if (initialFocusElementRef.current instanceof HTMLDivElement) {
        initialFocusElementRef.current.focus()
      } else {
        throwInvalidPathError('Popover.useEffect[popoverOpen]')
      }
    }
  }, [popoverOpen])
  const popoverNavigationItemBlurHandler = useMemo(
    () => (someBlurEvent: FocusEvent) => {
      const windowBlur = someBlurEvent.relatedTarget === null
      const tabPreviousEscapeOrEnterSelect =
        someBlurEvent.relatedTarget === anchorElementRef.current
      const tabNextEscape =
        popoverRef.current instanceof HTMLDivElement &&
        someBlurEvent.relatedTarget instanceof HTMLElement
          ? !popoverRef.current.contains(someBlurEvent.relatedTarget)
          : true
      if (windowBlur || tabPreviousEscapeOrEnterSelect) {
        setPopoverOpen(false)
      } else if (tabNextEscape) {
        setPopoverOpen(false)
        // redirect focus from tab next target to anchor
        // // the only time this doesnt work is if next target is urlBar
        anchorElementRef.current instanceof HTMLDivElement
          ? anchorElementRef.current.focus()
          : throwInvalidPathError('getPopoverItemBlurHandler.tabNextEscape')
      }
    },
    [anchorElementRef, setPopoverOpen, popoverRef]
  )
  return popoverOpen ? (
    <div
      tabIndex={-1}
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
      onKeyDown={(someKeyDownEvent) => {
        if (someKeyDownEvent.key === 'Escape') {
          anchorElementRef.current instanceof HTMLDivElement
            ? anchorElementRef.current.focus()
            : throwInvalidPathError('popoverContainer.onKeyDown.Escape')
        }
      }}
    >
      <PopoverContent
        anchorElementRef={anchorElementRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        initialFocusElementRef={initialFocusElementRef}
        popoverNavigationItemBlurHandler={popoverNavigationItemBlurHandler}
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
