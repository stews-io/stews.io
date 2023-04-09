import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { createRef, FunctionComponent, RefObject } from 'preact'
import { Ref, StateUpdater, useEffect, useMemo, useRef } from 'preact/hooks'
import cssModule from './Popover.module.scss'

export interface PopoverProps<CustomPopoverContentProps>
  extends PopoverDataProps,
    PopoverConfigProps<CustomPopoverContentProps> {}

export interface PopoverDataProps {
  anchorElementRef: Ref<HTMLDivElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
  popoverAriaRole: 'dialog' | 'menu' | 'listbox'
}

interface PopoverConfigProps<CustomPopoverContentProps> {
  customPopoverContentProps: CustomPopoverContentProps
  PopoverContent: FunctionComponent<
    PopoverContentProps<CustomPopoverContentProps>
  >
  getPopoverLayoutTop: (api: GetPopoverLayoutTopApi) => number
}

type PopoverContentProps<CustomPopoverContentProps> = CorePopoverContentProps &
  CustomPopoverContentProps

interface GetPopoverLayoutTopApi {
  anchorElement: HTMLDivElement
}

export interface CorePopoverContentProps
  extends Pick<PopoverDataProps, 'anchorElementRef'> {
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
    popoverAriaRole,
    getPopoverLayoutTop,
    PopoverContent,
    customPopoverContentProps,
  } = props
  const popoverRef = useRef<HTMLDivElement>(null)
  const { closePopover, windowScrollHandler, windowPointerDownHandler } =
    useMemo(() => {
      const closePopover = () => {
        setPopoverOpen(false)
      }
      return {
        closePopover,
        // needed for when the footer is collapsed on ios
        // css is unable to block the underscroll in that case
        windowScrollHandler: (someScrollEvent: Event) => {
          if (
            someScrollEvent.target === document &&
            // handle ios bug where footer is collapsed and scrollbar is at the bottom
            window.innerHeight + window.scrollY !== document.body.offsetHeight
          ) {
            closePopover()
          }
        },
        windowPointerDownHandler: (somePointerEvent: PointerEvent) => {
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
        },
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
        windowScrollHandler,
        windowPointerDownHandler,
        anchorDataPointerFocus,
      })
    } else if (popoverOpen && initialFocusElement instanceof HTMLDivElement) {
      handlePopoverOpen({
        initialFocusElement,
        windowScrollHandler,
        windowPointerDownHandler,
      })
    } else if (popoverOpen === false) {
      handlePopoverClose({
        windowScrollHandler,
        windowPointerDownHandler,
      })
    } else {
      throwInvalidPathError('Popover.useEffect[popoverOpen]')
    }
  }, [popoverOpen])
  const popoverNavigationItemBlurHandler = useMemo(
    () => (someBlurEvent: FocusEvent) => {
      const windowBlurOrClickAway = someBlurEvent.relatedTarget === null
      const tabPreviousEscapeOrEnterSelect =
        someBlurEvent.relatedTarget === anchorElementRef.current
      const tabNextEscape =
        popoverRef.current instanceof HTMLDivElement &&
        someBlurEvent.relatedTarget instanceof HTMLElement
          ? !popoverRef.current.contains(someBlurEvent.relatedTarget)
          : true
      if (windowBlurOrClickAway || tabPreviousEscapeOrEnterSelect) {
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
      className={cssModule.popoverContainer}
      role={popoverAriaRole}
      ref={popoverRef}
      onBlur={popoverNavigationItemBlurHandler}
      style={getPopoverLayoutStyle({
        anchorElementRef,
        popoverOpen,
        getPopoverLayoutTop,
      })}
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
  extends Pick<
    PopoverProps<unknown>,
    'anchorElementRef' | 'popoverOpen' | 'getPopoverLayoutTop'
  > {}

function getPopoverLayoutStyle(api: GetPopoverLayoutStyleApi) {
  const { anchorElementRef, popoverOpen, getPopoverLayoutTop } = api
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
    const horizontalShift = 2
    const pageMiddleX =
      pageContentClientRect.left + pageContentClientRect.width / 2
    const anchorMiddleX = anchorClientRect.left + anchorClientRect.width / 2
    const popoverDirection: 'left' | 'right' =
      anchorMiddleX > pageMiddleX ? 'left' : 'right'
    return {
      position: 'absolute',
      top: getPopoverLayoutTop({
        anchorElement,
      }),
      maxHeight: window.innerHeight - maxPopoverPadding,
      maxWidth: pageContentClientRect.width - maxPopoverPadding,
      ...(popoverDirection === 'right'
        ? {
            right: undefined,
            left: anchorElement.offsetLeft - horizontalShift,
          }
        : {
            left: undefined,
            right:
              anchorElement.offsetLeft -
              anchorClientRect.left +
              pageContentClientRect.left +
              (pageContentClientRect.right - anchorClientRect.right) -
              horizontalShift,
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
  const {
    initialFocusElement,
    windowPointerDownHandler,
    windowScrollHandler,
    anchorDataPointerFocus,
  } = api
  handlePopoverOpen({
    initialFocusElement,
    windowPointerDownHandler,
    windowScrollHandler,
  })
  initialFocusElement.setAttribute('data-pointer-focus', anchorDataPointerFocus)
}

interface HandlePopoverOpenApi extends PopoverWindowEventHandlingApi {
  initialFocusElement: NonNullable<
    CorePopoverContentProps['anchorElementRef']['current']
  >
}

function handlePopoverOpen(api: HandlePopoverOpenApi) {
  const { initialFocusElement, windowPointerDownHandler, windowScrollHandler } =
    api
  initialFocusElement.focus()
  document.documentElement.classList.add(cssModule.preventUnderscroll!)
  document.body.classList.add(cssModule.preventUnderscroll!)
  window.addEventListener('pointerdown', windowPointerDownHandler)
  window.addEventListener('scroll', windowScrollHandler, {
    capture: true,
  })
}

interface HandlePopoverCloseApi extends PopoverWindowEventHandlingApi {}

function handlePopoverClose(api: HandlePopoverCloseApi) {
  const { windowPointerDownHandler, windowScrollHandler } = api
  document.documentElement.classList.remove(cssModule.preventUnderscroll!)
  document.body.classList.remove(cssModule.preventUnderscroll!)
  window.removeEventListener('pointerdown', windowPointerDownHandler)
  window.removeEventListener('scroll', windowScrollHandler, {
    capture: true,
  })
}

interface PopoverWindowEventHandlingApi {
  windowPointerDownHandler: (somePointerEvent: PointerEvent) => void
  windowScrollHandler: (someScrollEvent: Event) => void
}
