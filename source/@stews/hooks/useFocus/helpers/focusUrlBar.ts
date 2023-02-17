import { FocusContextValue } from '../FocusContext'

export interface FocusUrlBarApi {
  focusContext: FocusContextValue
}

export function focusUrlBar(api: FocusUrlBarApi) {
  const { focusContext } = api
  focusContext.keyboardBridgeItem.tabExitElementRef!.current!.children[0]!.remove()
}
