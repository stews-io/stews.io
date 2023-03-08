import { ButtonProps } from '@stews/components/Button'
import { throwInvalidPathError } from '@stews/helpers'
import { ComponentProps } from 'preact'
import { MutableRef, Ref, useEffect, useRef, useState } from 'preact/hooks'
import { SelectMenuBaseProps } from '../components/SelectMenuBase'

export interface UseSelectMenuNavigationApi
  extends Pick<
    SelectMenuBaseProps<object, never, unknown, unknown>,
    | 'anchorElementRef'
    | 'popoverOpen'
    | 'initialFocusElementRef'
    | 'popoverNavigationItemBlurHandler'
  > {}

export interface UseSelectMenuNavigationResult {
  latestFocusedOptionIndex: number | null
  menuNavigationMenuContainerProps: Pick<
    Required<ComponentProps<'div'>>,
    'onKeyDown'
  >
  menuNavigationFooterActionButtonProps: MenuNavigationFooterActionButtonProps
  getMenuNavigationMenuOptionProps: (
    musicViewIndex: number
  ) => MenuNavigationMenuOptionProps
  getMenuNavigationOptionActionButtonProps: (
    musicViewIndex: number
  ) => MenuNavigationOptionActionButtonProps
}

interface MenuNavigationMenuOptionProps
  extends Pick<
    Required<ButtonProps>,
    | 'tabIndex'
    | 'elementRef'
    | 'onPointerMove'
    | 'onBlur'
    | 'onFocus'
    | 'onKeyDown'
    | 'onClick'
  > {}

interface MenuNavigationOptionActionButtonProps
  extends Pick<
    Required<ButtonProps>,
    'tabIndex' | 'onBlur' | 'onClick' | 'onKeyDown'
  > {}

interface MenuNavigationFooterActionButtonProps
  extends Pick<Required<ButtonProps>, 'onBlur'> {}

export function useSelectMenuNavigation(
  api: UseSelectMenuNavigationApi
): UseSelectMenuNavigationResult {
  const {
    popoverOpen,
    popoverNavigationItemBlurHandler,
    initialFocusElementRef,
    anchorElementRef,
  } = api
  const listItemsRef = useRef<Array<HTMLDivElement | null>>([])
  const [latestFocusedOptionIndex, setFocusedOptionIndex] = useState<
    number | null
  >(null)
  const pointerClientCoordinatesRef = useRef<{
    clientX: number
    clientY: number
  } | null>(null)
  useEffect(() => {
    if (popoverOpen === false) {
      setFocusedOptionIndex(null)
    }
  }, [popoverOpen])
  return {
    latestFocusedOptionIndex,
    menuNavigationMenuContainerProps: {
      onKeyDown: (someKeyDownEvent) => {
        const listItemsLength = listItemsRef.current.length
        const currentFocusedOptionIndex =
          typeof latestFocusedOptionIndex === 'number'
            ? latestFocusedOptionIndex
            : throwInvalidPathError(
                'menuNavigationMenuContainerProps.onKeyDown'
              )
        if (someKeyDownEvent.key === 'ArrowDown') {
          handleArrowKeyListNavigation({
            listItemsRef,
            someKeyDownEvent,
            targetViewIndex: (currentFocusedOptionIndex + 1) % listItemsLength,
          })
        } else if (someKeyDownEvent.key === 'ArrowUp') {
          handleArrowKeyListNavigation({
            listItemsRef,
            someKeyDownEvent,
            targetViewIndex:
              (((currentFocusedOptionIndex - 1) % listItemsLength) +
                listItemsLength) %
              listItemsLength,
          })
        }
      },
    },
    menuNavigationFooterActionButtonProps: {
      onBlur: popoverNavigationItemBlurHandler,
    },
    getMenuNavigationMenuOptionProps: (optionIndex: number) => {
      return {
        onBlur: popoverNavigationItemBlurHandler,
        tabIndex: latestFocusedOptionIndex === optionIndex ? 0 : -1,
        elementRef: (listItemElement) => {
          listItemsRef.current[optionIndex] = listItemElement
          if (optionIndex === 0) {
            initialFocusElementRef.current = listItemElement
          }
        },
        onPointerMove: (somePointerMoveEvent) => {
          if (
            latestFocusedOptionIndex !== optionIndex &&
            getPointerClientCoordinatesChanged({
              pointerClientCoordinatesRef,
              somePointerMoveEvent,
            })
          ) {
            const targetListItemElement = listItemsRef.current[optionIndex]
            if (targetListItemElement instanceof HTMLDivElement) {
              targetListItemElement.focus()
              targetListItemElement.setAttribute('data-pointer-focus', 'true')
            } else {
              throwInvalidPathError(
                'getMenuNavigationMenuOptionProps.onPointerMove'
              )
            }
          }
          pointerClientCoordinatesRef.current = {
            clientX: somePointerMoveEvent.clientX,
            clientY: somePointerMoveEvent.clientY,
          }
        },
        onFocus: () => {
          setFocusedOptionIndex(optionIndex)
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'Enter') {
            anchorElementRef.current instanceof HTMLDivElement
              ? anchorElementRef.current.focus()
              : throwInvalidPathError(
                  'getMenuNavigationMenuOptionProps.onKeyDown.Enter'
                )
          }
        },
        onClick: () => {
          if (anchorElementRef.current instanceof HTMLDivElement) {
            anchorElementRef.current.setAttribute('data-pointer-focus', 'true')
            anchorElementRef.current.focus()
          }
        },
      }
    },
    getMenuNavigationOptionActionButtonProps: (musicViewIndex: number) => {
      return {
        onBlur: popoverNavigationItemBlurHandler,
        tabIndex: latestFocusedOptionIndex === musicViewIndex ? 0 : -1,
        onClick: (someClickEvent) => {
          someClickEvent.stopPropagation()
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'Enter') {
            someKeyDownEvent.stopPropagation()
          }
        },
      }
    },
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
    targetListItemElement instanceof HTMLDivElement
      ? targetListItemElement.focus()
      : throwInvalidPathError('handleArrowKeyListNavigation')
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
