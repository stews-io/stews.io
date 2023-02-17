import { createContext } from 'preact'
import { Ref, StateUpdater } from 'preact/hooks'
import { FocusItem } from './data/FocusItem'
import { FocusState } from './data/FocusState'

export interface FocusContextValue {
  focusItems: Record<string, FocusItem>
  globalFocusState: FocusState
  setGlobalFocusState: StateUpdater<FocusState> | null
  keyboardBridgeItem: {
    focusKey: 'urlBar'
    tabEntryKeys: Array<string>
    tabExitElementRef: Ref<HTMLDivElement> | null
  }
}

export const FocusContext = createContext(getIntialFocusContextValue())

export function getIntialFocusContextValue(): FocusContextValue {
  return {
    focusItems: {},
    setGlobalFocusState: null,
    globalFocusState: {
      stateType: 'external',
    },
    keyboardBridgeItem: {
      focusKey: 'urlBar',
      tabEntryKeys: [],
      tabExitElementRef: null,
    },
  }
}
