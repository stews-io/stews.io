import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import {
  FocusContext,
  FocusContextRef,
  FocusItem,
  FocusState,
  ReadyFocusContext,
} from './FocusContext'

export interface UseFocusApi
  extends Pick<FocusItem, 'focusKey' | 'tabNextKey' | 'tabPreviousKey'> {
  onSelect: () => void
}

export interface UseFocusResult<SomeHtmlElement extends HTMLElement> {
  itemFocusState: FocusState | null
  getFocusItemProps: () => Pick<
    Required<JSXInternal.HTMLAttributes<SomeHtmlElement>>,
    'ref' | 'tabIndex' | 'onClick' | 'onKeyDown' | 'className'
  >
}

export function useFocus<SomeHtmlElement extends HTMLElement>(
  api: UseFocusApi
): UseFocusResult<SomeHtmlElement> {
  const { focusKey, tabNextKey, tabPreviousKey, onSelect } = api
  const focusContextRef = useContext(FocusContextRef)
  const focusElementRef = useRef<SomeHtmlElement>(null)
  const [itemFocusState, setItemFocusState] = useState<FocusState>({
    stateType: 'external',
  })
  useEffect(() => {
    registerFocusItem({
      focusContext: focusContextRef.current,
      focusItem: {
        focusKey,
        tabNextKey,
        tabPreviousKey,
        focusElementRef,
        setItemFocusState,
      },
    })
    return () => {
      const focusContext = focusContextRef.current
      if (focusContext.contextState === 'ready') {
        unregisterFocusItem({
          focusContext,
          focusKey,
        })
      } else {
        throw new Error('invalid path: useFocus.useEffect[]')
      }
    }
  }, [])
  return {
    itemFocusState,
    getFocusItemProps: () => {
      return {
        tabIndex: -1,
        className: 'todo',
        ref: focusElementRef,
        onClick: (someClickEvent) => {
          const focusContext = focusContextRef.current
          if (focusContext.contextState === 'ready') {
            focusTargetItem({
              triggerType: 'pointer',
              focusType: 'select',
              onSelect,
              focusContext,
              focusKey: focusKey,
              triggerEvent: someClickEvent,
            })
          } else {
            throw new Error('invalid path: getFocusItemProps.onClick')
          }
        },
        onKeyDown: (someKeyDownEvent) => {
          const focusContext = focusContextRef.current
          if (focusContext.contextState === 'initializing') {
            throw new Error('invalid path: getFocusItemProps.onKeyDown')
          } else if (
            someKeyDownEvent.shiftKey &&
            someKeyDownEvent.key === 'Tab' &&
            tabPreviousKey === 'urlBar'
          ) {
            forwardFocusToUrlBar({
              focusContext,
            })
          } else if (
            someKeyDownEvent.shiftKey &&
            someKeyDownEvent.key === 'Tab'
          ) {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              focusContext,
              focusKey: tabPreviousKey,
              triggerEvent: someKeyDownEvent,
            })
          } else if (
            someKeyDownEvent.key === 'Tab' &&
            tabNextKey === 'urlBar'
          ) {
            forwardFocusToUrlBar({
              focusContext,
            })
          } else if (someKeyDownEvent.key === 'Tab') {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'navigate',
              focusContext,
              focusKey: tabNextKey,
              triggerEvent: someKeyDownEvent,
            })
          } else if (
            someKeyDownEvent.key === 'Enter' &&
            focusContext.globalFocusState.stateType === 'internal'
          ) {
            focusTargetItem({
              triggerType: 'keyboard',
              focusType: 'select',
              onSelect,
              focusContext,
              focusKey: focusKey,
              triggerEvent: someKeyDownEvent,
            })
          }
        },
      }
    },
  }
}

interface RegisterFocusItemApi {
  focusContext: FocusContext
  focusItem: FocusItem
}

function registerFocusItem(api: RegisterFocusItemApi) {
  const { focusContext, focusItem } = api
  focusContext.focusItems[focusItem.focusKey] = focusItem
  if (focusItem.tabPreviousKey === 'urlBar') {
    focusContext.keyboardBridgeItem.tabEntryKeys.unshift(focusItem.focusKey)
  } else if (focusItem.tabNextKey === 'urlBar') {
    focusContext.keyboardBridgeItem.tabEntryKeys.push(focusItem.focusKey)
  }
}

interface UnregisterFocusItemApi extends Pick<FocusItem, 'focusKey'> {
  focusContext: ReadyFocusContext
}

function unregisterFocusItem(api: UnregisterFocusItemApi) {
  const { focusContext, focusKey } = api
  delete focusContext.focusItems[focusKey]
  focusContext.keyboardBridgeItem.tabEntryKeys =
    focusContext.keyboardBridgeItem.tabEntryKeys.filter(
      (someTabEntryKey) => someTabEntryKey !== focusKey
    )
}

interface ForwardFocusToUrlBarApi {
  focusContext: ReadyFocusContext
}

function forwardFocusToUrlBar(api: ForwardFocusToUrlBarApi) {
  const { focusContext } = api
  const tabExitSlingshotElement =
    focusContext.keyboardBridgeItem.tabExitElementRef.current?.children[0]
  if (tabExitSlingshotElement) {
    tabExitSlingshotElement.remove()
  } else {
    throw new Error('invalid path: forwardFocusToUrlBar')
  }
}

export type FocusTargetItemApi =
  | UserFocusTargetItemApi
  | ManualNavigateFocusTargetItemApi

type UserFocusTargetItemApi =
  | PointerSelectFocusTargetItemApi
  | KeyboardSelectFocusTargetItemApi
  | KeyboardNavigateFocusTargetItemApi

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
  focusContext: ReadyFocusContext
}

function focusTargetItem(api: FocusTargetItemApi) {
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
  const { onSelect, ...userFocusTargetItemApi } = api
  userFocusTargetItem(userFocusTargetItemApi)
  onSelect()
}

function keyboardSelectFocusTargetItem(api: KeyboardSelectFocusTargetItemApi) {
  const { onSelect, ...userFocusTargetItemApi } = api
  userFocusTargetItem(userFocusTargetItemApi)
  onSelect()
}

function keyboardNavigateFocusTargetItem(
  api: KeyboardNavigateFocusTargetItemApi
) {
  userFocusTargetItem(api)
}

function userFocusTargetItem(api: Omit<UserFocusTargetItemApi, 'select'>) {
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
  const targetFocusItem = focusContext.focusItems[focusKey]
  if (targetFocusItem && targetFocusItem.focusElementRef.current) {
    const nextFocusState: FocusState = {
      stateType: 'internal',
      triggerType,
      focusType,
      focusKey: targetFocusItem.focusKey,
      setItemFocusState: targetFocusItem.setItemFocusState,
    }
    const staleGlobalFocusState = focusContext.globalFocusState
    targetFocusItem.focusElementRef.current.focus()
    targetFocusItem.setItemFocusState(nextFocusState)
    focusContext.setGlobalFocusState(nextFocusState)
    if (
      staleGlobalFocusState.stateType === 'internal' &&
      staleGlobalFocusState.focusKey !== targetFocusItem.focusKey
    ) {
      staleGlobalFocusState.setItemFocusState({
        stateType: 'external',
      })
    }
  } else {
    throw new Error('invalid path: _focusTargetItem')
  }
}
