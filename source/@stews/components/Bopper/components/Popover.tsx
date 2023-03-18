import { throwInvalidPathError } from '@stews/helpers'
import { createRef, FunctionComponent, RefObject } from 'preact'
import { Ref, StateUpdater, useEffect, useMemo, useRef } from 'preact/hooks'
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
  extends Pick<PopoverProps<unknown>, 'anchorElementRef'> {
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
  const popoverRef = useRef<HTMLDivElement>(null)
  const closePopover = useMemo(() => () => setPopoverOpen(false), [])
  useEffect(() => {
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
    window.addEventListener('pointerdown', windowPointerDownHandler)
    window.addEventListener('resize', windowResizeHandler)
    return () => {
      window.removeEventListener('pointerdown', windowPointerDownHandler)
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [])
  const initialFocusElementRef = useMemo(() => createRef<HTMLDivElement>(), [])
  useEffect(() => {
    const initialFocusElement = initialFocusElementRef.current
    const anchorDataPointerFocus =
      anchorElementRef.current?.getAttribute('data-pointer-focus')
    if (
      popoverOpen &&
      initialFocusElement instanceof HTMLDivElement &&
      typeof anchorDataPointerFocus === 'string'
    ) {
      handlePopoverOpenWithPointer({
        initialFocusElement,
        anchorDataPointerFocus,
      })
    } else if (popoverOpen && initialFocusElement instanceof HTMLDivElement) {
      handlePopoverOpen({
        initialFocusElement,
      })
    } else if (popoverOpen === false) {
      handlePopoverClose()
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
        closePopover()
      } else if (tabNextEscape) {
        closePopover()
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
      })}
      onBlur={popoverNavigationItemBlurHandler}
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
        initialFocusElementRef={initialFocusElementRef}
        popoverNavigationItemBlurHandler={popoverNavigationItemBlurHandler}
        {...customPopoverContentProps}
      />
    </div>
  ) : null
}

interface GetPopoverLayoutStyleApi
  extends Pick<PopoverProps<unknown>, 'anchorElementRef' | 'popoverOpen'> {}

function getPopoverLayoutStyle(api: GetPopoverLayoutStyleApi) {
  const { anchorElementRef, popoverOpen } = api
  const pageContentClientRect = document
    .getElementById('pageContentContainer')
    ?.getBoundingClientRect()
  const anchorElement = anchorElementRef.current
  const anchorClientRect = anchorElementRef.current?.getBoundingClientRect()
  if (
    pageContentClientRect &&
    anchorElement &&
    anchorClientRect &&
    popoverOpen
  ) {
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
            left: anchorElement.offsetLeft - offsetLength,
          }
        : {
            left: undefined,
            right:
              anchorElement.offsetLeft -
              anchorClientRect.left +
              pageContentClientRect.left +
              (pageContentClientRect.right - anchorClientRect.right) -
              offsetLength,
          }),
    }
  } else {
    throwInvalidPathError('getPopoverLayoutStyle')
  }
}

interface HandlePopoverOpenWithPointerApi extends HandlePopoverOpenApi {
  anchorDataPointerFocus: string
}

function handlePopoverOpenWithPointer(api: HandlePopoverOpenWithPointerApi) {
  const { initialFocusElement, anchorDataPointerFocus } = api
  handlePopoverOpen({
    initialFocusElement,
  })
  initialFocusElement.setAttribute('data-pointer-focus', anchorDataPointerFocus)
}

interface HandlePopoverOpenApi {
  initialFocusElement: NonNullable<
    CorePopoverContentProps['anchorElementRef']['current']
  >
}

function handlePopoverOpen(api: HandlePopoverOpenApi) {
  const { initialFocusElement } = api
  initialFocusElement.focus()
  document.documentElement.classList.add(cssModule.preventUnderscroll!)
}

function handlePopoverClose() {
  document.documentElement.classList.remove(cssModule.preventUnderscroll!)
}
