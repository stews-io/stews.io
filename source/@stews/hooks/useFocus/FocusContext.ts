import { createContext } from 'preact'
import { FocusItemApi } from './FocusItemApi'

interface FocusContextValue {
  setSourceFocusState: null
  focusItems: Record<
    string,
    {
      focusItem: (api: FocusItemApi) => void
    }
  >
}

export const FocusContext = createContext<FocusContextValue>(
  getIntialFocusContextValue()
)

export function getIntialFocusContextValue(): FocusContextValue {
  return {
    setSourceFocusState: null,
    focusItems: {},
  }
}
