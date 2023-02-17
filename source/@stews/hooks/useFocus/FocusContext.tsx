import { createContext } from 'preact'
import { Ref, StateUpdater } from 'preact/hooks'
import { FocusTargetItemApi } from './useFocus'

export type FocusContext = InitializingFocusContext | ReadyFocusContext

export interface InitializingFocusContext
  extends FocusContextBase<'initializing'> {}

export interface ReadyFocusContext extends FocusContextBase<'ready'> {
  focusItems: Record<string, FocusItem>
  globalFocusState: FocusState
  setGlobalFocusState: StateUpdater<FocusState>
  keyboardBridgeItem: {
    focusKey: 'urlBar'
    tabNextEntryKeys: Array<string>
    tabPreviousEntryKeys: Array<string>
    tabExitElementRef: Ref<HTMLDivElement>
  }
}

interface FocusContextBase<ContextState extends string> {
  contextState: ContextState
}

export const FocusContextRef = createContext<{
  current: FocusContext
}>({
  current: {
    contextState: 'initializing',
  },
})

export type FocusState = InternalFocusState | ExternalFocusState

export interface InternalFocusState
  extends FocusStateBase<'internal'>,
    Pick<FocusTargetItemApi, 'focusKey' | 'focusType' | 'triggerType'> {
  setItemFocusState: StateUpdater<FocusState>
}

export interface ExternalFocusState extends FocusStateBase<'external'> {}

interface FocusStateBase<StateType extends string> {
  stateType: StateType
}

export interface FocusItem<SomeHtmlElement extends HTMLElement = HTMLElement> {
  focusKey: string
  tabNextKey: string
  tabPreviousKey: string
  focusElementRef: Ref<SomeHtmlElement>
  setItemFocusState: StateUpdater<FocusState>
}
