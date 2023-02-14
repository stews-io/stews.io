import { StateUpdater } from 'preact/hooks'

export type FocusItemApi =
  | PointerSelectFocusItemApi
  | KeyboardSelectFocusItemApi
  | KeyboardNavigateFocusItemApi
  | ManualNavigateFocusItemApi

type PointerSelectFocusItemApi = PointerFocusTriggerApi &
  SelectFocusApi &
  FocusOriginApi

type KeyboardSelectFocusItemApi = KeyboardFocusTriggerApi &
  SelectFocusApi &
  InternalFocusOriginApi

type KeyboardNavigateFocusItemApi = KeyboardFocusTriggerApi &
  NavigateFocusApi &
  FocusOriginApi

type ManualNavigateFocusItemApi = ManualFocusTriggerApi &
  NavigateFocusApi &
  FocusOriginApi

interface NavigateFocusApi extends FocusTypeBase<'navigate'> {}

interface SelectFocusApi extends FocusTypeBase<'select'> {
  onSelect: () => void
}

interface FocusTypeBase<FocusType extends string> {
  focusType: FocusType
}

interface ManualFocusTriggerApi extends FocusTriggerApiBase<'manual'> {}

interface PointerFocusTriggerApi
  extends UserFocusTriggerApiBase<'pointer', MouseEvent> {}

interface KeyboardFocusTriggerApi
  extends UserFocusTriggerApiBase<'keyboard', KeyboardEvent> {}

interface UserFocusTriggerApiBase<
  SourceType extends string,
  TriggerEvent extends Event
> extends FocusTriggerApiBase<SourceType> {
  triggerEvent: TriggerEvent
}

interface FocusTriggerApiBase<TriggerType extends string> {
  triggerType: TriggerType
}

type FocusOriginApi = InternalFocusOriginApi | ExternalFocusOriginApi

interface InternalFocusOriginApi extends FocusOriginApiBase<'internal'> {
  setOriginFocusState: StateUpdater<null>
}

interface ExternalFocusOriginApi extends FocusOriginApiBase<'external'> {}

interface FocusOriginApiBase<OriginType extends string> {
  originType: OriginType
}
