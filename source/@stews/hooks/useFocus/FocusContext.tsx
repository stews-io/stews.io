import { createContext } from 'preact'
import { Ref } from 'preact/hooks'
import { FocusItem } from './FocusItem'
import { FocusState } from './FocusState'

export interface FocusContextValue {
  globalFocusState: FocusState
  focusItems: Record<string, FocusItem>
  keyboardBridgeItem: {
    focusKey: 'urlBar'
    tabEntryKeys: Array<string>
    tabNextEntryElementRef: Ref<HTMLDivElement> | null
    tabPreviousEntryElementRef: Ref<HTMLDivElement> | null
    tabExitElementRef: Ref<HTMLDivElement> | null
  }
}

export const FocusContext = createContext(getIntialFocusContextValue())

export function getIntialFocusContextValue(): FocusContextValue {
  return {
    focusItems: {},
    globalFocusState: {
      stateType: 'external',
    },
    keyboardBridgeItem: {
      focusKey: 'urlBar',
      tabEntryKeys: [],
      tabNextEntryElementRef: null,
      tabPreviousEntryElementRef: null,
      tabExitElementRef: null,
    },
  }
}
