import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { FocusContext } from './FocusContext'
import { FocusState } from './FocusState'
import { focusTargetItem } from './focusTargetItem'

export interface UseFocusApi {
  focusKey: string
  tabNextKey: string
  tabPreviousKey: string
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
  const { focusKey, tabPreviousKey, tabNextKey, onSelect } = api
  const focusContext = useContext(FocusContext)
  const focusElementRef = useRef<SomeHtmlElement>(null)
  const [itemFocusState, setItemFocusState] = useState<FocusState>({
    stateType: 'external',
  })
  useEffect(() => {
    focusContext.focusItems[focusKey] = {
      focusKey,
      focusElementRef,
      setItemFocusState,
    }
    return () => {
      delete focusContext.focusItems[focusKey]
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
            triggerEvent: someClickEvent,
            targetFocusItem: focusContext.focusItems[focusKey]!,
            staleGlobalFocusState: focusContext.globalFocusState,
            setGlobalFocusState: (nextGlobalFocusState) => {
              focusContext.globalFocusState = nextGlobalFocusState
            },
          })
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.shiftKey && someKeyDownEvent.key === 'Tab') {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              triggerEvent: someKeyDownEvent,
              targetFocusItem: focusContext.focusItems[tabPreviousKey]!,
              staleGlobalFocusState: focusContext.globalFocusState,
              setGlobalFocusState: (nextGlobalFocusState) => {
                focusContext.globalFocusState = nextGlobalFocusState
              },
            })
          } else if (someKeyDownEvent.key === 'Tab') {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              triggerEvent: someKeyDownEvent,
              targetFocusItem: focusContext.focusItems[tabNextKey]!,
              staleGlobalFocusState: focusContext.globalFocusState,
              setGlobalFocusState: (nextGlobalFocusState) => {
                focusContext.globalFocusState = nextGlobalFocusState
              },
            })
          } else if (
            someKeyDownEvent.key === 'Enter' &&
            focusContext.globalFocusState.stateType === 'internal'
          ) {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'select',
              onSelect,
              triggerEvent: someKeyDownEvent,
              targetFocusItem: focusContext.focusItems[focusKey]!,
              staleGlobalFocusState: focusContext.globalFocusState,
              setGlobalFocusState: (nextGlobalFocusState) => {
                focusContext.globalFocusState = nextGlobalFocusState
              },
            })
          }
        },
      }
    },
  }
}
