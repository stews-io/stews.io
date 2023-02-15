import { createContext, createRef, Ref } from 'preact'
import { FocusItem } from './FocusItem'
import { FocusState } from './FocusState'

export interface FocusContextValue {
  focusItems: Record<string, FocusItem>
  globalFocusState: FocusState
}

export const FocusContext = createContext(getIntialFocusContextValue())

function getIntialFocusContextValue(): FocusContextValue {
  return {
    focusItems: {},
    globalFocusState: {
      stateType: 'external',
    },
  }
}
