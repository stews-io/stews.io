import { FocusContextValue } from './FocusContext'
import { FocusItem } from './FocusItem'
import { FocusState, InternalFocusState } from './FocusState'

export type FocusTargetItemApi =
  | PointerSelectFocusTargetItemApi
  | KeyboardSelectFocusTargetItemApi
  | KeyboardNavigateFocusTargetItemApi
  | ManualNavigateFocusTargetItemApi

interface PointerSelectFocusTargetItemApi
  extends PointerFocusTargetItemApi<FocusState>,
    SelectFocusItemApi {}

interface KeyboardSelectFocusTargetItemApi
  extends KeyboardFocusTargetItemApi<InternalFocusState>,
    SelectFocusItemApi {}

interface KeyboardNavigateFocusTargetItemApi
  extends KeyboardFocusTargetItemApi<FocusState>,
    NavigateFocusItemApi {}

interface ManualNavigateFocusTargetItemApi
  extends ManualFocusTargetItemApi<FocusState>,
    NavigateFocusItemApi {}

interface NavigateFocusItemApi extends FocusTypeBase<'navigate'> {}

interface SelectFocusItemApi extends FocusTypeBase<'select'> {
  onSelect: () => void
}

interface FocusTypeBase<FocusType extends string> {
  focusType: FocusType
}

interface PointerFocusTargetItemApi<GlobalFocusState extends FocusState>
  extends UserFocusTargetItemApiBase<'pointer', GlobalFocusState, MouseEvent> {}

interface KeyboardFocusTargetItemApi<GlobalFocusState extends FocusState>
  extends UserFocusTargetItemApiBase<
    'keyboard',
    GlobalFocusState,
    KeyboardEvent
  > {}

interface ManualFocusTargetItemApi<GlobalFocusState extends FocusState>
  extends FocusTargetItemApiBase<'manual', GlobalFocusState> {}

interface UserFocusTargetItemApiBase<
  TriggerType extends string,
  GlobalFocusState extends FocusState,
  TriggerEvent extends Event
> extends FocusTargetItemApiBase<TriggerType, GlobalFocusState> {
  triggerEvent: TriggerEvent
}

interface FocusTargetItemApiBase<
  TriggerType extends string,
  GlobalFocusState extends FocusState
> {
  triggerType: TriggerType
  targetFocusItem: FocusItem
  staleGlobalFocusState: GlobalFocusState
  setGlobalFocusState: (nextGlobalFocusState: GlobalFocusState) => void
  keyboardBridgeItem: FocusContextValue['keyboardBridgeItem']
}

export function focusTargetItem(api: FocusTargetItemApi) {
  const { triggerType, focusType } = api
  if (triggerType === 'pointer' && focusType === 'select') {
    pointerSelectFocusTargetItem(api)
  } else if (triggerType === 'keyboard' && focusType === 'select') {
    keyboardSelectFocusTargetItem(api)
  } else if (triggerType === 'keyboard' && focusType === 'navigate') {
    keyboardNavigateFocusTargetItem(api)
  } else if (triggerType === 'manual' && focusType === 'navigate') {
    manualNavigateFocusTargetItem(api)
  } else {
    throw new Error('invalid path: focusTargetItem')
  }
}

function pointerSelectFocusTargetItem(api: PointerSelectFocusTargetItemApi) {
  const {
    triggerEvent,
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
    keyboardBridgeItem,
    onSelect,
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
    keyboardBridgeItem,
  })
  onSelect()
}

function keyboardSelectFocusTargetItem(api: KeyboardSelectFocusTargetItemApi) {
  const {
    triggerEvent,
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
    keyboardBridgeItem,
    onSelect,
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
    keyboardBridgeItem,
  })
  onSelect()
}

function keyboardNavigateFocusTargetItem(
  api: KeyboardNavigateFocusTargetItemApi
) {
  const {
    triggerEvent,
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
    keyboardBridgeItem,
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
    keyboardBridgeItem,
  })
}

function manualNavigateFocusTargetItem(api: ManualNavigateFocusTargetItemApi) {
  _focusTargetItem(api)
}

interface _FocusTargetItemApi
  extends Pick<
    FocusTargetItemApi,
    | 'triggerType'
    | 'focusType'
    | 'targetFocusItem'
    | 'staleGlobalFocusState'
    | 'setGlobalFocusState'
    | 'keyboardBridgeItem'
  > {}

function _focusTargetItem(api: _FocusTargetItemApi) {
  const {
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
    keyboardBridgeItem,
  } = api
  const nextFocusState: FocusState = {
    stateType: 'internal',
    triggerType,
    focusType,
    focusKey: targetFocusItem.focusKey,
    setItemFocusState: targetFocusItem.setItemFocusState,
  }
  targetFocusItem.focusElementRef.current!.focus()
  targetFocusItem.setItemFocusState(nextFocusState)
  setGlobalFocusState(nextFocusState)
  console.log(staleGlobalFocusState)
  if (
    staleGlobalFocusState.stateType === 'internal' &&
    staleGlobalFocusState.focusKey !== targetFocusItem.focusKey
  ) {
    staleGlobalFocusState.setItemFocusState({
      stateType: 'external',
    })
  } else if (staleGlobalFocusState.stateType === 'external') {
    // pointer focus???
    const tabExitSlingElement = document.createElement('div')
    tabExitSlingElement.tabIndex = 1
    keyboardBridgeItem.tabExitElementRef!.current!.appendChild(
      tabExitSlingElement
    )
    keyboardBridgeItem.tabNextEntryElementRef!.current!.tabIndex = -1
    keyboardBridgeItem.tabPreviousEntryElementRef!.current!.tabIndex = -1
  }
}
