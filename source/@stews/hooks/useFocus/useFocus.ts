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
    'ref' | 'tabIndex' | 'onClick' | 'onKeyDown'
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
    if (itemFocusState.stateType === 'internal') {
      focusElementRef.current!.style.backgroundColor = 'red'
    } else if (itemFocusState.stateType === 'external') {
      focusElementRef.current!.style.backgroundColor = 'white'
    }
  }, [itemFocusState])
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
        ref: focusElementRef,
        onClick: (someClickEvent) => {
          focusTargetItem({
            triggerType: 'pointer',
            focusType: 'select',
            onSelect,
            focusContext,
            triggerEvent: someClickEvent,
            targetFocusItem: focusContext.focusItems[focusKey]!,
          })
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.shiftKey && someKeyDownEvent.key === 'Tab') {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              focusContext,
              triggerEvent: someKeyDownEvent,
              targetFocusItem: focusContext.focusItems[tabPreviousKey]!,
            })
          } else if (someKeyDownEvent.key === 'Tab') {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              focusContext,
              triggerEvent: someKeyDownEvent,
              targetFocusItem: focusContext.focusItems[tabNextKey]!,
            })
          } else if (someKeyDownEvent.key === 'Enter') {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'select',
              onSelect,
              focusContext,
              triggerEvent: someKeyDownEvent,
              targetFocusItem: focusContext.focusItems[focusKey]!,
            })
          }
        },
      }
    },
  }
}
