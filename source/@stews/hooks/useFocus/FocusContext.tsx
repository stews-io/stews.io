import { createContext } from 'preact'
import { Ref, StateUpdater, useContext } from 'preact/hooks'
import { FocusTargetItemApi } from './useFocus'

export type FocusContext = InitializingFocusContext | ReadyFocusContext

export interface InitializingFocusContext
  extends FocusContextBase<'initializing', KeyboardBridgeItemBase> {}

export interface ReadyFocusContext
  extends FocusContextBase<'ready', ReadyKeyboardBridgeItem> {
  setGlobalFocusState: StateUpdater<FocusState>
}

interface FocusContextBase<
  ContextState extends string,
  SomeKeyboardBridgeItem extends KeyboardBridgeItemBase
> {
  contextState: ContextState
  focusItems: Record<string, FocusItem>
  globalFocusState: FocusState
  keyboardBridgeItem: SomeKeyboardBridgeItem
}

interface ReadyKeyboardBridgeItem extends KeyboardBridgeItemBase {
  tabExitElementRef: Ref<HTMLDivElement>
}

interface KeyboardBridgeItemBase {
  focusKey: 'urlBar'
  tabEntryKeys: Array<string>
}

export const FocusContextRef = createContext<{
  current: FocusContext
}>({
  current: {
    contextState: 'initializing',
    focusItems: {},
    globalFocusState: {
      stateType: 'external',
    },
    keyboardBridgeItem: {
      focusKey: 'urlBar',
      tabEntryKeys: [],
    },
  },
})

export function useFocusContext(): ReadyFocusContext {
  const focusContextRef = useContext(FocusContextRef)
  if (focusContextRef.current.contextState === 'ready') {
    return focusContextRef.current
  } else {
    throw new Error('invalid path: useFocusContext')
  }
}

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
