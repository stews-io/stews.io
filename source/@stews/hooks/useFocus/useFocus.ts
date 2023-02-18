import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import {
  FocusContextRef,
  FocusItem,
  FocusState,
  ReadyFocusContext,
} from './FocusContext'
import cssModule from './FocusItem.module.scss'

export interface UseFocusApi
  extends Pick<FocusItem, 'focusKey' | 'tabNextKey' | 'tabPreviousKey'> {
  onSelect: () => void
}

export interface UseFocusResult<SomeHtmlElement extends HTMLElement> {
  itemFocusState: FocusState | null
  getFocusItemProps: () => Pick<
    Required<JSXInternal.HTMLAttributes<SomeHtmlElement>>,
    'ref' | 'tabIndex' | 'onPointerDown' | 'onClick' | 'onKeyDown' | 'className'
  > & {
    'internal-focus-item': true
  }
}

export function useFocus<SomeHtmlElement extends HTMLElement>(
  api: UseFocusApi
): UseFocusResult<SomeHtmlElement> {
  const { focusKey, tabPreviousKey, tabNextKey, onSelect } = api
  const focusContextRef = useContext(FocusContextRef)
  const focusElementRef = useRef<SomeHtmlElement>(null)
  const [itemFocusState, setItemFocusState] = useState<FocusState>({
    stateType: 'external',
  })
  useEffect(() => {
    if (focusContextRef.current.contextState === 'ready') {
      registerFocusItem({
        focusContext: focusContextRef.current,
        focusItem: {
          focusKey,
          tabPreviousKey,
          tabNextKey,
          focusElementRef,
          setItemFocusState,
        },
      })
    } else {
      throw new Error('invalid path: useFocus.useEffect[]')
    }
    return () => {
      const focusContext = focusContextRef.current
      if (focusContext.contextState === 'ready') {
        unregisterFocusItem({
          focusContext,
          focusKey,
        })
      } else {
        throw new Error('invalid path: useFocus.useEffect[].unsubscribe')
      }
    }
  }, [])
  useEffect(() => {
    const focusContext = focusContextRef.current
    if (focusContext.contextState === 'ready') {
      updateFocusItem({
        tabKeyKey: 'tabPreviousKey',
        tabEntryKeysKey: 'tabNextEntryKeys',
        focusKey,
        focusContext,
        tabKey: tabPreviousKey,
      })
    } else {
      throw new Error('invalid path: useFocus.useEffect[tabPreviousKey]')
    }
  }, [tabPreviousKey])
  useEffect(() => {
    const focusContext = focusContextRef.current
    if (focusContext.contextState === 'ready') {
      updateFocusItem({
        tabKeyKey: 'tabNextKey',
        tabEntryKeysKey: 'tabPreviousEntryKeys',
        focusKey,
        focusContext,
        tabKey: tabNextKey,
      })
    } else {
      throw new Error('invalid path: useFocus.useEffect[tabNextKey]')
    }
  }, [tabNextKey])
  return {
    itemFocusState,
    getFocusItemProps: () => {
      return {
        'internal-focus-item': true,
        tabIndex: -1,
        className:
          itemFocusState.stateType === 'external'
            ? ''
            : itemFocusState.triggerType === 'keyboard'
            ? cssModule.keyboardFocus!
            : itemFocusState.triggerType === 'pointer'
            ? cssModule.pointerFocus!
            : itemFocusState.triggerType === 'manual'
            ? cssModule.manualFocus!
            : '',
        ref: focusElementRef,
        onPointerDown: (somePointerEvent) => {
          console.log(focusKey)
          const focusContext = focusContextRef.current
          if (focusContext.contextState === 'initializing') {
            throw new Error('invalid path: getFocusItemProps.onPointerDown')
          } else if (focusContext.contextState === 'ready') {
            focusTargetItem({
              triggerType: 'pointer',
              focusType: 'navigate',
              focusContext,
              focusKey: focusKey,
              triggerEvent: somePointerEvent,
            })
          }
        },
        onClick: (someClickEvent) => {
          const focusContext = focusContextRef.current
          if (focusContext.contextState === 'initializing') {
            throw new Error('invalid path: getFocusItemProps.onClick')
          } else if (focusContext.contextState === 'ready') {
            focusTargetItem({
              triggerType: 'pointer',
              focusType: 'select',
              onSelect,
              focusContext,
              focusKey: focusKey,
              triggerEvent: someClickEvent,
            })
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
  focusContext: ReadyFocusContext
  focusItem: FocusItem
}

function registerFocusItem(api: RegisterFocusItemApi) {
  const { focusContext, focusItem } = api
  focusContext.focusItems[focusItem.focusKey] = focusItem
  if (focusItem.tabPreviousKey === 'urlBar') {
    focusContext.keyboardBridgeItem.tabNextEntryKeys.push(focusItem.focusKey)
  }
  if (focusItem.tabNextKey === 'urlBar') {
    focusContext.keyboardBridgeItem.tabPreviousEntryKeys.push(
      focusItem.focusKey
    )
  }
}

interface UnregisterFocusItemApi extends Pick<FocusItem, 'focusKey'> {
  focusContext: ReadyFocusContext
}

function unregisterFocusItem(api: UnregisterFocusItemApi) {
  const { focusContext, focusKey } = api
  delete focusContext.focusItems[focusKey]
  focusContext.keyboardBridgeItem.tabPreviousEntryKeys =
    focusContext.keyboardBridgeItem.tabPreviousEntryKeys.filter(
      (someTabPreviousEntryKey) => someTabPreviousEntryKey !== focusKey
    )
  focusContext.keyboardBridgeItem.tabNextEntryKeys =
    focusContext.keyboardBridgeItem.tabNextEntryKeys.filter(
      (someTabNextEntryKey) => someTabNextEntryKey !== focusKey
    )
}

interface UpdateFocusItemApi {
  focusContext: ReadyFocusContext
  focusKey: string
  tabKey: string
  tabKeyKey: keyof Pick<FocusItem, 'tabPreviousKey' | 'tabNextKey'>
  tabEntryKeysKey: keyof Pick<
    ReadyFocusContext['keyboardBridgeItem'],
    'tabPreviousEntryKeys' | 'tabNextEntryKeys'
  >
}

function updateFocusItem(api: UpdateFocusItemApi) {
  const { focusContext, focusKey, tabKeyKey, tabKey, tabEntryKeysKey } = api
  const targetFocusItem = focusContext.focusItems[focusKey]
  if (
    focusContext.contextState === 'ready' &&
    targetFocusItem &&
    targetFocusItem[tabKeyKey] !== tabKey
  ) {
    targetFocusItem[tabKeyKey] = tabKey
    focusContext.keyboardBridgeItem[tabEntryKeysKey] =
      focusContext.keyboardBridgeItem[tabEntryKeysKey].filter(
        (someTabEntryKey) => someTabEntryKey !== focusKey
      )
    if (tabKey === 'urlBar') {
      focusContext.keyboardBridgeItem[tabEntryKeysKey].push(focusKey)
    }
  } else if (targetFocusItem && targetFocusItem[tabKeyKey] === tabKey) {
    // noop
  } else {
    throw new Error('invalid path: updateFocusItem')
  }
}

interface ForwardFocusToUrlBarApi {
  focusContext: ReadyFocusContext
}

function forwardFocusToUrlBar(api: ForwardFocusToUrlBarApi) {
  const { focusContext } = api
  const tabExitSlingshotElement =
    focusContext.keyboardBridgeItem.tabExitElementRef.current?.children[0]
  if (tabExitSlingshotElement) {
    // tabExitSlingshotElement.remove()
  } else {
    throw new Error('invalid path: forwardFocusToUrlBar')
  }
}

export type FocusTargetItemApi =
  | UserFocusTargetItemApi
  | ManualNavigateFocusTargetItemApi

type UserFocusTargetItemApi =
  | PointerSelectFocusTargetItemApi
  | PointerNavigateFocusTargetItemApi
  | KeyboardSelectFocusTargetItemApi
  | KeyboardNavigateFocusTargetItemApi

interface PointerSelectFocusTargetItemApi
  extends PointerFocusTargetItemApi,
    SelectFocusItemApi {}

interface PointerNavigateFocusTargetItemApi
  extends PointerFocusTargetItemApi,
    NavigateFocusItemApi {}

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

export function focusTargetItem(api: FocusTargetItemApi) {
  const { triggerType, focusType } = api
  if (triggerType === 'pointer' && focusType === 'select') {
    pointerSelectFocusTargetItem(api)
  } else if (triggerType === 'pointer' && focusType === 'navigate') {
    pointerNavigateFocusTargetItem(api)
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

function pointerNavigateFocusTargetItem(
  api: PointerNavigateFocusTargetItemApi
) {
  userFocusTargetItem(api)
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
  triggerEvent.stopPropagation()
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
  if (targetFocusItem) {
    const nextFocusState: FocusState = {
      stateType: 'internal',
      triggerType,
      focusType,
      focusKey: targetFocusItem.focusKey,
      setItemFocusState: targetFocusItem.setItemFocusState,
    }
    focusContext.setGlobalFocusState(nextFocusState)
  } else {
    throw new Error('invalid path: _focusTargetItem')
  }
}
