import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { FocusContext } from './FocusContext'

export interface UseFocusApi<FocusElementKey extends HtmlElementKey>
  extends Pick<
    Required<JSXInternal.HTMLAttributes<ExtractHtmlElement<FocusElementKey>>>,
    'onClick'
  > {
  focusKey: string
  tabNextKey: string
  tabPreviousKey: string
}

export interface UseFocusResult<FocusElementKey extends HtmlElementKey> {
  focusState: 'mouse' | 'keyboard' | 'manual' | null
  getFocusItemProps: () => Pick<
    Required<JSXInternal.HTMLAttributes<ExtractHtmlElement<FocusElementKey>>>,
    'ref' | 'tabIndex' | 'onClick' | 'onKeyDown'
  >
}

export function useFocus<
  FocusElementKey extends HtmlElementKey,
  FocusElement extends ExtractHtmlElement<FocusElementKey> = ExtractHtmlElement<FocusElementKey>
>(api: UseFocusApi<FocusElementKey>): UseFocusResult<FocusElementKey> {
  const { focusKey, tabPreviousKey, tabNextKey, onClick } = api
  const focusContext = useContext(FocusContext)
  const focusItemRef = useRef<FocusElement>(null)
  const [focusState, setFocusState] = useState<
    'mouse' | 'keyboard' | 'manual' | null
  >(null)
  useEffect(() => {
    focusContext.focusItems[focusKey] = {
      focusItem: (api) => {
        const { triggerType, focusType } = api
        if (triggerType === 'pointer' && focusType === 'select') {
        } else if (triggerType === 'keyboard' && focusType === 'select') {
        } else if (triggerType === 'keyboard' && focusType === 'navigate') {
        } else if (triggerType === 'manual' && focusType === 'navigate') {
        } else {
          throw new Error('invalid path: focusItem')
        }
        // focusContext.setSourceFocusState
        //   ? focusContext.setSourceFocusState(null)
        //   : null
        // setFocusState(sourceType)
        // ;(focusItemRef.current as any).focus()
        // focusContext.setSourceFocusState = setFocusState
      },
    }
    return () => {
      delete focusContext.focusItems[focusKey]
    }
  }, [])
  return {
    focusState,
    getFocusItemProps: () => {
      return {
        tabIndex: -1,
        ref: focusItemRef,
        onClick: (someClickEvent) => {
          focusContext.focusItems[focusKey]!.focusItem({
            focusType: 'select',
            onSelect: () => {},
            triggerType: 'pointer',
            triggerEvent: someClickEvent,
            originType: 'external',
            // originType: 'internal',
            // setOriginFocusState: () => null,
          })
        },
        onKeyDown: (someKeyDownEvent) => {
          if (someKeyDownEvent.shiftKey && someKeyDownEvent.key === 'Tab') {
            focusContext.focusItems[tabPreviousKey]!.focusItem({
              focusType: 'navigate',
              triggerType: 'keyboard',
              triggerEvent: someKeyDownEvent,
              originType: 'external',
              // originType: 'internal',
              // setOriginFocusState: () => null,
            })
          } else if (someKeyDownEvent.key === 'Tab') {
            focusContext.focusItems[tabNextKey]!.focusItem({
              focusType: 'navigate',
              triggerType: 'keyboard',
              triggerEvent: someKeyDownEvent,
              originType: 'external',
              // originType: 'internal',
              // setOriginFocusState: () => null,
            })
          } else if (someKeyDownEvent.key === 'Enter') {
            focusContext.focusItems[focusKey]!.focusItem({
              focusType: 'select',
              onSelect: () => {},
              triggerType: 'keyboard',
              triggerEvent: someKeyDownEvent,
              originType: 'internal',
              setOriginFocusState: () => null,
            })
          }
        },
      }
    },
  }
}

type HtmlElementKey = {
  [SomeElementKey in keyof JSXInternal.IntrinsicElements]: JSXInternal.IntrinsicElements[SomeElementKey] extends JSXInternal.HTMLAttributes<
    infer SomeHtmlElement
  >
    ? SomeHtmlElement extends HTMLElement
      ? SomeElementKey
      : never
    : never
}[keyof JSXInternal.IntrinsicElements]

type ExtractHtmlElement<
  FocusElementKey extends keyof JSXInternal.IntrinsicElements
> =
  JSXInternal.IntrinsicElements[FocusElementKey] extends JSXInternal.HTMLAttributes<
    infer SomeHtmlElement
  >
    ? SomeHtmlElement extends HTMLElement
      ? SomeHtmlElement
      : never
    : never
