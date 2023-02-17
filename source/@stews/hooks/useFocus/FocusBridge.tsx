import { ComponentProps } from 'preact'
import {
  StateUpdater,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks'
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
        handleInternalFocusToExternalFocus({
          staleGlobalFocusState: focusContext.globalFocusState,
          setGlobalFocusState: focusContext.setGlobalFocusState,
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
        handleInternalFocusToExternalFocus({
          staleGlobalFocusState: focusContext.globalFocusState,
          setGlobalFocusState: focusContext.setGlobalFocusState,
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
    if (focusContextRef.current.contextState === 'ready') {
      focusContextRef.current.globalFocusState = globalFocusState
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
  }, [globalFocusState.stateType])
  const tabEntryTabIndex = useMemo(
    () => (globalFocusState.stateType === 'external' ? 1 : -1),
    [globalFocusState.stateType]
  )
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
    targetFocusItem.setItemFocusState(nextFocusState)
    targetFocusItem.focusElementRef.current.focus()
  } else {
    throw new Error('invalid path: forwardFocusToInternalItem')
  }
}

interface HandleFocusExternalApi {
  staleGlobalFocusState: InternalFocusState
  setGlobalFocusState: StateUpdater<FocusState>
}

function handleInternalFocusToExternalFocus(api: HandleFocusExternalApi) {
  const { staleGlobalFocusState, setGlobalFocusState } = api
  const nextFocusState: ExternalFocusState = {
    stateType: 'external',
  }
  staleGlobalFocusState.setItemFocusState(nextFocusState)
  setGlobalFocusState(nextFocusState)
}
