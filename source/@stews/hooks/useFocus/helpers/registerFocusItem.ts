import { FocusContextValue } from '../FocusContext'
import { FocusItem } from '../data/FocusItem'

export interface RegisterFocusItemApi {
  focusContext: FocusContextValue
  focusItem: FocusItem
}

export function registerFocusItem(api: RegisterFocusItemApi) {
  const { focusContext, focusItem } = api
  focusContext.focusItems[focusItem.focusKey] = focusItem
  if (focusItem.tabPreviousKey === 'urlBar') {
    focusContext.keyboardBridgeItem.tabEntryKeys.unshift(focusItem.focusKey)
  } else if (focusItem.tabNextKey === 'urlBar') {
    focusContext.keyboardBridgeItem.tabEntryKeys.push(focusItem.focusKey)
  }
}

export interface UnregisterFocusItemApi extends Pick<FocusItem, 'focusKey'> {
  focusContext: FocusContextValue
}

export function unregisterFocusItem(api: UnregisterFocusItemApi) {
  const { focusContext, focusKey } = api
  delete focusContext.focusItems[focusKey]
  focusContext.keyboardBridgeItem.tabEntryKeys =
    focusContext.keyboardBridgeItem.tabEntryKeys.filter(
      (someTabEntryKey) => someTabEntryKey !== focusKey
    )
}
