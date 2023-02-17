import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { FocusItem } from './data/FocusItem'
import { FocusState } from './data/FocusState'
import { FocusContext } from './FocusContext'
import { focusTargetItem } from './helpers/focusTargetItem'
import { focusUrlBar } from './helpers/focusUrlBar'
import {
  registerFocusItem,
  unregisterFocusItem,
} from './helpers/registerFocusItem'

export interface UseFocusApi
  extends Pick<FocusItem, 'focusKey' | 'tabNextKey' | 'tabPreviousKey'> {
  onSelect: () => void
}

export interface UseFocusResult<SomeHtmlElement extends HTMLElement> {
  itemFocusState: FocusState | null
  getFocusItemProps: () => Pick<
    Required<JSXInternal.HTMLAttributes<SomeHtmlElement>>,
    'ref' | 'tabIndex' | 'onClick' | 'onKeyDown' | 'className'
  >
}

export function useFocus<SomeHtmlElement extends HTMLElement>(
  api: UseFocusApi
): UseFocusResult<SomeHtmlElement> {
  const { focusKey, tabNextKey, tabPreviousKey, onSelect } = api
  const focusContext = useContext(FocusContext)
  const focusElementRef = useRef<SomeHtmlElement>(null)
  const [itemFocusState, setItemFocusState] = useState<FocusState>({
    stateType: 'external',
  })
  useEffect(() => {
    registerFocusItem({
      focusContext,
      focusItem: {
        focusKey,
        tabNextKey,
        tabPreviousKey,
        focusElementRef,
        setItemFocusState,
      },
    })
    return () => {
      unregisterFocusItem({
        focusContext,
        focusKey,
      })
    }
  }, [])
  return {
    itemFocusState,
    getFocusItemProps: () => {
      return {
        tabIndex: -1,
        className: 'todo',
        ref: focusElementRef,
        onClick: (someClickEvent) => {
          focusTargetItem({
            triggerType: 'pointer',
            focusType: 'select',
            onSelect,
            focusContext,
            focusKey: focusKey,
            triggerEvent: someClickEvent,
          })
        },
        onKeyDown: (someKeyDownEvent) => {
          if (
            someKeyDownEvent.shiftKey &&
            someKeyDownEvent.key === 'Tab' &&
            tabPreviousKey === 'urlBar'
          ) {
            focusUrlBar({
              focusContext,
            })
          } else if (
            someKeyDownEvent.shiftKey &&
            someKeyDownEvent.key === 'Tab'
          ) {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              focusContext,
              focusKey: tabPreviousKey,
              triggerEvent: someKeyDownEvent,
            })
          } else if (
            !someKeyDownEvent.shiftKey &&
            someKeyDownEvent.key === 'Tab' &&
            tabNextKey === 'urlBar'
          ) {
            focusUrlBar({
              focusContext,
            })
          } else if (
            !someKeyDownEvent.shiftKey &&
            someKeyDownEvent.key === 'Tab'
          ) {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              focusContext,
              focusKey: tabNextKey,
              triggerEvent: someKeyDownEvent,
            })
          } else if (
            someKeyDownEvent.key === 'Enter' &&
            focusContext.globalFocusState.stateType === 'internal'
          ) {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'select',
              onSelect,
              focusContext,
              focusKey: focusKey,
              triggerEvent: someKeyDownEvent,
            })
          }
        },
      }
    },
  }
}
