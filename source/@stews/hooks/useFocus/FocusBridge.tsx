import { ComponentProps } from 'preact'
import { useContext, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import {
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
  const [globalFocusState, setGlobalFocusState] = useState<FocusState>({
    stateType: 'external',
  })
  useEffect(() => {
    focusContextRef.current = {
      contextState: 'ready',
      globalFocusState,
      setGlobalFocusState,
      focusItems: {},
      keyboardBridgeItem: {
        focusKey: 'urlBar',
        tabExitElementRef,
        tabPreviousEntryKeys: [],
        tabNextEntryKeys: [],
      },
    }
    const windowBlurHandler = () => {
      const focusContext = focusContextRef.current
      if (
        focusContext.contextState === 'ready' &&
        focusContext.globalFocusState.stateType === 'internal'
      ) {
        setGlobalFocusState({
          stateType: 'external',
        })
      } else if (focusContext.contextState === 'initializing') {
        throw new Error('invalid path: FocusBridge.windowBlurHandler')
      }
    }
    const windowPointerDownHandler = (somePointerEvent: PointerEvent) => {
      const focusContext = focusContextRef.current
      const internalFocusItem =
        somePointerEvent.target instanceof HTMLElement
          ? Boolean(
              somePointerEvent.target.attributes.getNamedItem(
                'internal-focus-item'
              )?.value
            )
          : false
      if (
        focusContext.contextState === 'ready' &&
        focusContext.globalFocusState.stateType === 'internal' &&
        !internalFocusItem
      ) {
        setGlobalFocusState({
          stateType: 'external',
        })
      }
    }
    window.addEventListener('pointerdown', windowPointerDownHandler)
    window.addEventListener('blur', windowBlurHandler)
    return () => {
      window.removeEventListener('blur', windowBlurHandler)
      window.removeEventListener('pointerdown', windowPointerDownHandler)
    }
  }, [])
  useEffect(() => {
    const focusContext = focusContextRef.current
    if (
      globalFocusState.stateType === 'internal' &&
      focusContext.contextState === 'ready' &&
      focusContext.globalFocusState.stateType === 'internal'
    ) {
      focusContext.globalFocusState.setItemFocusState({
        stateType: 'external',
      })
      const targetFocusItem = focusContext.focusItems[globalFocusState.focusKey]
      targetFocusItem!.setItemFocusState(globalFocusState)
      targetFocusItem!.focusElementRef.current!.focus()
      focusContext.globalFocusState = globalFocusState
    } else if (
      globalFocusState.stateType === 'internal' &&
      focusContext.contextState === 'ready' &&
      focusContext.globalFocusState.stateType === 'external'
    ) {
      const targetFocusItem = focusContext.focusItems[globalFocusState.focusKey]
      targetFocusItem!.setItemFocusState(globalFocusState)
      targetFocusItem!.focusElementRef.current!.focus()
      focusContext.globalFocusState = globalFocusState
    } else if (
      globalFocusState.stateType === 'external' &&
      focusContext.contextState === 'ready' &&
      focusContext.globalFocusState.stateType === 'internal'
    ) {
      focusContext.globalFocusState.setItemFocusState({
        stateType: 'external',
      })
      focusContext.globalFocusState = globalFocusState
    } else if (
      globalFocusState.stateType === 'external' &&
      focusContext.contextState === 'ready' &&
      focusContext.globalFocusState.stateType === 'external'
    ) {
      // noop
    } else {
      throw new Error('invalid path: FocusBridge.useEffect[globalFocusState]')
    }
  }, [globalFocusState])
  useEffect(() => {
    // manage slingshot element
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
    if (
      globalFocusState.stateType === 'external' &&
      document.activeElement instanceof HTMLElement
    ) {
      document.activeElement.blur()
    }
  }, [globalFocusState.stateType])
  const tabEntryTabIndex = globalFocusState.stateType === 'external' ? 1 : -1
  return (
    <Fragment>
      <div ref={tabExitElementRef} />
      <TabEntryBridge
        tabEntryKeysKey={'tabNextEntryKeys'}
        focusContextRef={focusContextRef}
        tabIndex={tabEntryTabIndex}
      />
      <TabEntryBridge
        tabEntryKeysKey={'tabPreviousEntryKeys'}
        focusContextRef={focusContextRef}
        tabIndex={tabEntryTabIndex}
      />
    </Fragment>
  )
}

interface TabEntryBridgeProps extends Pick<ComponentProps<'div'>, 'tabIndex'> {
  tabEntryKeysKey: keyof Pick<
    ReadyFocusContext['keyboardBridgeItem'],
    'tabNextEntryKeys' | 'tabPreviousEntryKeys'
  >
  focusContextRef: {
    current: FocusContext
  }
}

function TabEntryBridge(props: TabEntryBridgeProps) {
  const { tabIndex, focusContextRef, tabEntryKeysKey } = props
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
            tabEntryKeys: focusContext.keyboardBridgeItem[tabEntryKeysKey],
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
  tabEntryKeys: Array<string>
}

function forwardFocusToInternalItem(api: ForwardFocusToInternalItemApi) {
  const { focusContext, tabEntryKeys } = api
  const tabEntryKey = tabEntryKeys[0]
  const targetFocusItem =
    tabEntryKey !== undefined ? focusContext.focusItems[tabEntryKey] : null
  if (
    tabEntryKey &&
    targetFocusItem &&
    targetFocusItem.focusElementRef.current
  ) {
    const nextFocusState: InternalFocusState = {
      stateType: 'internal',
      triggerType: 'keyboard',
      focusType: 'navigate',
      focusKey: targetFocusItem.focusKey,
      setItemFocusState: targetFocusItem.setItemFocusState,
    }
    focusContext.setGlobalFocusState(nextFocusState)
  } else {
    throw new Error('invalid path: forwardFocusToInternalItem')
  }
}
