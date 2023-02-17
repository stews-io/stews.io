import { ComponentProps } from 'preact'
import { useContext, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import {
  ExternalFocusState,
  FocusContext,
  FocusContextRef,
  FocusState,
  InternalFocusState,
  ReadyFocusContext,
} from './FocusContext'

export interface FocusBridgeProps {}

export function FocusBridge(props: FocusBridgeProps) {
  const {} = props
  const focusContextRef = useContext(FocusContextRef)
  const tabExitElementRef = useRef<HTMLDivElement>(null)
  const [globalFocusState, setGlobalFocusState] = useState<FocusState>(
    focusContextRef.current.globalFocusState
  )
  useEffect(() => {
    focusContextRef.current = {
      contextState: 'ready',
      globalFocusState,
      setGlobalFocusState,
      focusItems: focusContextRef.current.focusItems,
      keyboardBridgeItem: {
        ...focusContextRef.current.keyboardBridgeItem,
        tabExitElementRef,
      },
    }
    const windowBlurHandler = () => {
      const focusContext = focusContextRef.current
      if (
        focusContext.contextState === 'ready' &&
        focusContext.globalFocusState.stateType === 'internal'
      ) {
        const nextFocusState: ExternalFocusState = {
          stateType: 'external',
        }
        focusContext.globalFocusState.setItemFocusState(nextFocusState)
        setGlobalFocusState(nextFocusState)
      } else if (focusContext.contextState === 'initializing') {
        throw new Error('invalid path: FocusBridge.windowBlurHandler')
      }
    }
    window.addEventListener('blur', windowBlurHandler)
    return () => {
      window.removeEventListener('blur', windowBlurHandler)
    }
  }, [])
  useEffect(() => {
    focusContextRef.current.globalFocusState = globalFocusState
  }, [globalFocusState])
  useEffect(() => {
    if (
      globalFocusState.stateType === 'internal' &&
      tabExitElementRef.current
    ) {
      const tabExitSlingshotElement = document.createElement('div')
      tabExitSlingshotElement.tabIndex = 1
      tabExitElementRef.current.appendChild(tabExitSlingshotElement)
    } else if (
      globalFocusState.stateType === 'external' &&
      tabExitElementRef.current &&
      tabExitElementRef.current.children[0]
    ) {
      tabExitElementRef.current.children[0].remove()
    } else if (
      globalFocusState.stateType === 'external' &&
      tabExitElementRef.current &&
      tabExitElementRef.current.children.length === 0
    ) {
      // noop
    } else {
      throw new Error(
        'invalid path: FocusBridge.useEffect[globalFocusState.stateType]'
      )
    }
  }, [globalFocusState.stateType])
  const tabEntryTabIndex = useMemo(
    () => (globalFocusState.stateType === 'external' ? 1 : -1),
    [globalFocusState.stateType]
  )
  return (
    <Fragment>
      <div ref={tabExitElementRef} />
      <TabEntryBridge
        focusContextRef={focusContextRef}
        tabIndex={tabEntryTabIndex}
        getTabEntryKeyIndex={() => 0}
      />
      <TabEntryBridge
        focusContextRef={focusContextRef}
        tabIndex={tabEntryTabIndex}
        getTabEntryKeyIndex={(tabEntryKeysLength) => tabEntryKeysLength - 1}
      />
    </Fragment>
  )
}

interface TabEntryBridgeProps extends Pick<ComponentProps<'div'>, 'tabIndex'> {
  getTabEntryKeyIndex: (tabEntryKeysLength: number) => number
  focusContextRef: {
    current: FocusContext
  }
}

function TabEntryBridge(props: TabEntryBridgeProps) {
  const { tabIndex, focusContextRef, getTabEntryKeyIndex } = props
  return (
    <div
      tabIndex={tabIndex}
      onFocus={() => {
        const focusContext = focusContextRef.current
        if (
          focusContext.contextState === 'ready' &&
          focusContext.globalFocusState.stateType === 'external'
        ) {
          forwardFocusToInternalItem({
            focusContext,
            tabEntryKeyIndex: getTabEntryKeyIndex(
              focusContext.keyboardBridgeItem.tabEntryKeys.length
            ),
          })
        } else {
          throw new Error('invalid path: TabEntryBridge')
        }
      }}
    />
  )
}

interface ForwardFocusToInternalItemApi {
  focusContext: ReadyFocusContext
  tabEntryKeyIndex: number
}

function forwardFocusToInternalItem(api: ForwardFocusToInternalItemApi) {
  const { focusContext, tabEntryKeyIndex } = api
  const tabPreviousEntryKey =
    focusContext.keyboardBridgeItem.tabEntryKeys[tabEntryKeyIndex]
  const tabExitFocusItem =
    tabPreviousEntryKey !== undefined
      ? focusContext.focusItems[tabPreviousEntryKey]
      : null
  if (
    tabPreviousEntryKey &&
    tabExitFocusItem &&
    tabExitFocusItem.focusElementRef.current
  ) {
    const nextFocusState: InternalFocusState = {
      stateType: 'internal',
      triggerType: 'keyboard',
      focusType: 'navigate',
      focusKey: tabExitFocusItem.focusKey,
      setItemFocusState: tabExitFocusItem.setItemFocusState,
    }
    focusContext.setGlobalFocusState!(nextFocusState)
    tabExitFocusItem.setItemFocusState(nextFocusState)
    tabExitFocusItem.focusElementRef.current.focus()
  } else {
    throw new Error('invalid path: forwardFocusToInternalItem')
  }
}
