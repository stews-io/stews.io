import { Ref, StateUpdater } from 'preact/hooks'
import { FocusState } from './FocusState'

export interface FocusItem<SomeHtmlElement extends HTMLElement = HTMLElement> {
  focusKey: string
  tabNextKey: string
  tabPreviousKey: string
  focusElementRef: Ref<SomeHtmlElement>
  setItemFocusState: StateUpdater<FocusState>
}
