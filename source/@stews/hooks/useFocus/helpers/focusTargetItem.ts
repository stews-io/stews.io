import { FocusContextValue } from '../FocusContext'
import { FocusState, InternalFocusState } from '../data/FocusState'
import { FocusItem } from '../data/FocusItem'

export type FocusTargetItemApi =
  | PointerSelectFocusTargetItemApi
  | KeyboardSelectFocusTargetItemApi
  | KeyboardNavigateFocusTargetItemApi
  | ManualNavigateFocusTargetItemApi

interface PointerSelectFocusTargetItemApi
  extends PointerFocusTargetItemApi,
    SelectFocusItemApi {}

interface KeyboardSelectFocusTargetItemApi
  extends KeyboardFocusTargetItemApi,
    SelectFocusItemApi {}

interface KeyboardNavigateFocusTargetItemApi
  extends KeyboardFocusTargetItemApi,
    NavigateFocusItemApi {}

interface ManualNavigateFocusTargetItemApi
  extends ManualFocusTargetItemApi,
    NavigateFocusItemApi {}

interface NavigateFocusItemApi extends FocusTypeBase<'navigate'> {}

interface SelectFocusItemApi extends FocusTypeBase<'select'> {
  onSelect: () => void
}

interface FocusTypeBase<FocusType extends string> {
  focusType: FocusType
}

interface PointerFocusTargetItemApi
  extends UserFocusTargetItemApiBase<'pointer', MouseEvent> {}

interface KeyboardFocusTargetItemApi
  extends UserFocusTargetItemApiBase<'keyboard', KeyboardEvent> {}

interface ManualFocusTargetItemApi extends FocusTargetItemApiBase<'manual'> {}

interface UserFocusTargetItemApiBase<
  TriggerType extends string,
  TriggerEvent extends Event
> extends FocusTargetItemApiBase<TriggerType> {
  triggerEvent: TriggerEvent
}

interface FocusTargetItemApiBase<TriggerType extends string>
  extends Pick<FocusItem, 'focusKey'> {
  triggerType: TriggerType
  focusContext: FocusContextValue
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
    focusKey,
    triggerType,
    focusType,
    focusContext,
    onSelect,
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    focusKey,
    triggerType,
    focusType,
    focusContext,
  })
  onSelect()
}

function keyboardSelectFocusTargetItem(api: KeyboardSelectFocusTargetItemApi) {
  const {
    triggerEvent,
    focusKey,
    triggerType,
    focusType,
    focusContext,
    onSelect,
  } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    focusKey,
    triggerType,
    focusType,
    focusContext,
  })
  onSelect()
}

function keyboardNavigateFocusTargetItem(
  api: KeyboardNavigateFocusTargetItemApi
) {
  const { triggerEvent, focusKey, triggerType, focusType, focusContext } = api
  triggerEvent.preventDefault()
  _focusTargetItem({
    focusKey,
    triggerType,
    focusType,
    focusContext,
  })
}

function manualNavigateFocusTargetItem(api: ManualNavigateFocusTargetItemApi) {
  _focusTargetItem(api)
}

interface _FocusTargetItemApi
  extends Pick<
    FocusTargetItemApi,
    'triggerType' | 'focusType' | 'focusContext' | 'focusKey'
  > {}

function _focusTargetItem(api: _FocusTargetItemApi) {
  const { focusContext, focusKey, triggerType, focusType } = api
  const targetFocusItem = focusContext.focusItems[focusKey]!
  const nextFocusState: FocusState = {
    stateType: 'internal',
    triggerType,
    focusType,
    focusKey: targetFocusItem.focusKey,
    setItemFocusState: targetFocusItem.setItemFocusState,
  }
  const staleGlobalFocusState = focusContext.globalFocusState
  targetFocusItem.focusElementRef.current!.focus()
  targetFocusItem.setItemFocusState(nextFocusState)
  focusContext.setGlobalFocusState!(nextFocusState)
  if (
    staleGlobalFocusState.stateType === 'internal' &&
    staleGlobalFocusState.focusKey !== targetFocusItem.focusKey
  ) {
    staleGlobalFocusState.setItemFocusState({
      stateType: 'external',
    })
  }
}
