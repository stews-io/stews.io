import { ButtonProps } from '@stews/components/Button'
import { throwInvalidPathError } from '@stews/helpers'
import { ComponentProps } from 'preact'
import { MutableRef, Ref, useEffect, useRef, useState } from 'preact/hooks'
import { SelectMenuBaseProps } from '../components/SelectMenuBase'

export interface UseSelectMenuNavigationApi
  extends Pick<
    SelectMenuBaseProps<unknown, unknown>,
    'anchorRef' | 'popoverOpen' | 'setPopoverOpen'
  > {}

export interface UseSelectMenuNavigationResult {
  focusedViewIndex: number | null
  getMenuContainerProps: () => Pick<
    Required<ComponentProps<'div'>>,
    'onKeyDown'
  >
  getMenuOptionProps: (musicViewIndex: number) => MenuOptionProps
  getOptionActionProps: (musicViewIndex: number) => OptionActionProps
  getFooterActionProps: () => MenuFooterActionItemProps
}

interface MenuOptionProps
  extends SelectMenuNavigationItemPropsBase,
    Pick<
      Required<ButtonProps>,
      | 'tabIndex'
      | 'elementRef'
      | 'onPointerMove'
      | 'onBlur'
      | 'onFocus'
      | 'onKeyDown'
      | 'onClick'
    > {}

interface OptionActionProps
  extends SelectMenuNavigationItemPropsBase,
    Pick<
      Required<ButtonProps>,
      'tabIndex' | 'onBlur' | 'onClick' | 'onKeyDown' | 'onfocusout'
    > {}

interface MenuFooterActionItemProps
  extends SelectMenuNavigationItemPropsBase,
    Pick<Required<ButtonProps>, 'onBlur'> {}

interface SelectMenuNavigationItemPropsBase {
  'data-select-menu-navigation-item': true
}

export function useSelectMenuNavigation(
  api: UseSelectMenuNavigationApi
): UseSelectMenuNavigationResult {
  const { popoverOpen, anchorRef, setPopoverOpen } = api
  const listItemsRef = useRef<Array<HTMLDivElement | null>>([])
  const [focusedViewIndex, setFocusedViewIndex] = useState<number | null>(null)
  const pointerClientCoordinatesRef = useRef<{
    clientX: number
    clientY: number
  } | null>(null)
  useEffect(() => {
    const firstListItem = listItemsRef.current[0]
    if (popoverOpen && firstListItem instanceof HTMLDivElement) {
      firstListItem.focus()
      if (anchorRef.current?.hasAttribute('keyboard-selected')) {
        anchorRef.current.removeAttribute('keyboard-selected')
        firstListItem.setAttribute('keyboard-focus', 'true')
      }
    } else if (popoverOpen === false) {
      setFocusedViewIndex(null)
    } else {
      throwInvalidPathError('useSelectMenuNavigation.useEffect[]')
    }
  }, [popoverOpen])
  return {
    focusedViewIndex,
    getMenuContainerProps: () => {
      return {
        onKeyDown: (someKeyDownEvent) => {
          const listItemsLength = listItemsRef.current.length
          const currentFocusedViewIndex =
            typeof focusedViewIndex === 'number'
              ? focusedViewIndex
              : throwInvalidPathError('getMenuProps.onKeyDown')
          if (someKeyDownEvent.key === 'ArrowDown') {
            handleArrowKeyListNavigation({
              listItemsRef,
              someKeyDownEvent,
              targetViewIndex: (currentFocusedViewIndex + 1) % listItemsLength,
            })
          } else if (someKeyDownEvent.key === 'ArrowUp') {
            handleArrowKeyListNavigation({
              listItemsRef,
              someKeyDownEvent,
              targetViewIndex:
                (((currentFocusedViewIndex - 1) % listItemsLength) +
                  listItemsLength) %
                listItemsLength,
            })
          } else if (someKeyDownEvent.key === 'Escape') {
            anchorRef.current instanceof HTMLDivElement
              ? anchorRef.current.focus()
              : throwInvalidPathError('getMenuProps.onKeyDown.Escape')
          }
        },
      }
    },
    getMenuOptionProps: (musicViewIndex: number) => {
      return {
        'data-select-menu-navigation-item': true,
        tabIndex: focusedViewIndex === musicViewIndex ? 0 : -1,
        elementRef: (listItemElement) => {
          listItemsRef.current[musicViewIndex] = listItemElement
        },
        onPointerMove: (somePointerMoveEvent) => {
          if (
            focusedViewIndex !== musicViewIndex &&
            getPointerClientCoordinatesChanged({
              pointerClientCoordinatesRef,
              somePointerMoveEvent,
            })
          ) {
            const targetListItemElement = listItemsRef.current[musicViewIndex]
            targetListItemElement instanceof HTMLDivElement
              ? targetListItemElement.focus()
              : throwInvalidPathError('getListItemProps.onPointerMove')
          }
          pointerClientCoordinatesRef.current = {
            clientX: somePointerMoveEvent.clientX,
            clientY: somePointerMoveEvent.clientY,
          }
        },
        onBlur: getSelectMenuBlurHandler({
          anchorRef,
          popoverOpen,
          setPopoverOpen,
        }),
        onFocus: () => {
          setFocusedViewIndex(musicViewIndex)
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'Enter') {
            anchorRef.current instanceof HTMLDivElement
              ? anchorRef.current.focus()
              : throwInvalidPathError('getListItemProps.onKeyDown.Enter')
          }
        },
        onClick: () => {
          setPopoverOpen(false)
        },
      }
    },
    getOptionActionProps: (musicViewIndex: number) => {
      return {
        'data-select-menu-navigation-item': true,
        tabIndex: focusedViewIndex === musicViewIndex ? 0 : -1,
        onBlur: getSelectMenuBlurHandler({
          anchorRef,
          popoverOpen,
          setPopoverOpen,
        }),
        onClick: (someClickEvent) => {
          someClickEvent.stopPropagation()
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'Enter') {
            someKeyDownEvent.stopPropagation()
          } else if (
            someKeyDownEvent.shiftKey &&
            someKeyDownEvent.key === 'Tab'
          ) {
            someKeyDownEvent.target instanceof HTMLDivElement
              ? someKeyDownEvent.target.setAttribute('keyboard-blur', 'true')
              : throwInvalidPathError('getItemActionProps.onKeyDown.ShiftTab')
          }
        },
        onfocusout: (someFocusEvent) => {
          if (
            someFocusEvent.target instanceof HTMLDivElement &&
            someFocusEvent.relatedTarget instanceof HTMLDivElement &&
            someFocusEvent.target.hasAttribute('keyboard-blur')
          ) {
            someFocusEvent.target.removeAttribute('keyboard-blur')
            someFocusEvent.relatedTarget.setAttribute('keyboard-focus', 'true')
          }
        },
      }
    },
    getFooterActionProps: () => {
      return {
        'data-select-menu-navigation-item': true,
        onBlur: getSelectMenuBlurHandler({
          anchorRef,
          popoverOpen,
          setPopoverOpen,
        }),
      }
    },
  }
}

interface GetSelectMenuBlurHandlerApi
  extends Pick<
    UseSelectMenuNavigationApi,
    'anchorRef' | 'popoverOpen' | 'setPopoverOpen'
  > {}

function getSelectMenuBlurHandler(api: GetSelectMenuBlurHandlerApi) {
  const { popoverOpen, anchorRef, setPopoverOpen } = api
  return (someBlurEvent: FocusEvent) => {
    const windowBlur = someBlurEvent.relatedTarget === null
    const tabPreviousEscapeOrEnterSelect =
      popoverOpen && someBlurEvent.relatedTarget === anchorRef.current
    const tabNextEscape =
      popoverOpen &&
      someBlurEvent.relatedTarget instanceof HTMLElement &&
      !Boolean(
        someBlurEvent.relatedTarget.attributes.getNamedItem(
          'data-select-menu-navigation-item'
        )?.value
      )
    if (windowBlur || tabPreviousEscapeOrEnterSelect) {
      setPopoverOpen(false)
    } else if (tabNextEscape) {
      setPopoverOpen(false)
      // redirect focus from tab next target to anchor
      anchorRef.current instanceof HTMLDivElement
        ? anchorRef.current.focus()
        : throwInvalidPathError('getSelectMenuBlurHandler.tabNextEscape')
    }
  }
}

interface HandleArrowKeyListNavigationApi {
  listItemsRef: MutableRef<Array<HTMLDivElement | null>>
  someKeyDownEvent: KeyboardEvent
  targetViewIndex: number
}

function handleArrowKeyListNavigation(api: HandleArrowKeyListNavigationApi) {
  const { someKeyDownEvent, listItemsRef, targetViewIndex } = api
  // this prevents premature scrolling on chrome
  someKeyDownEvent.preventDefault()
  // setTimeout allows for proper modulus list item scrolling on chrome
  setTimeout(() => {
    const targetListItemElement = listItemsRef.current[targetViewIndex]
    if (targetListItemElement instanceof HTMLDivElement) {
      targetListItemElement.focus()
      targetListItemElement.setAttribute('keyboard-focus', 'true')
    } else {
      throwInvalidPathError('handleArrowKeyListNavigation')
    }
  })
}

interface GetPointerClientCoordinatesChangedApi {
  pointerClientCoordinatesRef: Ref<{ clientX: number; clientY: number } | null>
  somePointerMoveEvent: PointerEvent
}

function getPointerClientCoordinatesChanged(
  api: GetPointerClientCoordinatesChangedApi
) {
  const { pointerClientCoordinatesRef, somePointerMoveEvent } = api
  return (
    pointerClientCoordinatesRef.current?.clientX !==
      somePointerMoveEvent.clientX ||
    pointerClientCoordinatesRef.current?.clientY !==
      somePointerMoveEvent.clientY
  )
}
