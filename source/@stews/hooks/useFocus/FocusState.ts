import { StateUpdater } from 'preact/hooks'
import { FocusTargetItemApi } from './focusTargetItem'

export type FocusState = InternalFocusState | ExternalFocusState

export interface InternalFocusState extends FocusStateBase<'internal'> {
  focusKey: string
  setItemFocusState: StateUpdater<FocusState>
  focusType: FocusTargetItemApi['focusType']
  triggerType: FocusTargetItemApi['triggerType']
}

export interface ExternalFocusState extends FocusStateBase<'external'> {}

interface FocusStateBase<StateType extends string> {
  stateType: StateType
}
