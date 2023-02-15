import { FocusItem } from './FocusItem'
import { FocusState, FocusStateBase, InternalFocusState } from './FocusState'

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

interface PointerFocusTargetItemApi<
  GlobalFocusState extends FocusStateBase<string>
> extends UserFocusTargetItemApiBase<'pointer', GlobalFocusState, MouseEvent> {}

interface KeyboardFocusTargetItemApi<
  GlobalFocusState extends FocusStateBase<string>
> extends UserFocusTargetItemApiBase<
    'keyboard',
    GlobalFocusState,
    KeyboardEvent
  > {}

interface ManualFocusTargetItemApi<
  GlobalFocusState extends FocusStateBase<string>
> extends FocusTargetItemApiBase<'manual', GlobalFocusState> {}

interface UserFocusTargetItemApiBase<
  TriggerType extends string,
  GlobalFocusState extends FocusStateBase<string>,
  TriggerEvent extends Event
> extends FocusTargetItemApiBase<TriggerType, GlobalFocusState> {
  triggerEvent: TriggerEvent
}

interface FocusTargetItemApiBase<
  TriggerType extends string,
  GlobalFocusState extends FocusStateBase<string>
> {
  triggerType: TriggerType
  targetFocusItem: FocusItem
  staleGlobalFocusState: GlobalFocusState
  setGlobalFocusState: (nextGlobalFocusState: GlobalFocusState) => void
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
    onSelect,
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
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
    onSelect,
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
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
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
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
  > {}

function _focusTargetItem(api: _FocusTargetItemApi) {
  const {
    triggerType,
    focusType,
    targetFocusItem,
    staleGlobalFocusState,
    setGlobalFocusState,
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
  if (
    staleGlobalFocusState.stateType === 'internal' &&
    staleGlobalFocusState.focusKey !== targetFocusItem.focusKey
  ) {
    staleGlobalFocusState.setItemFocusState({
      stateType: 'external',
    })
  }
}
