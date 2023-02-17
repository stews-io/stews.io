import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { FocusContext, FocusContextValue } from './FocusContext'
import {
  ExternalFocusState,
  FocusState,
  InternalFocusState,
} from './data/FocusState'

export interface FocusBridgeProps {}

export function FocusBridge(props: FocusBridgeProps) {
  const {} = props
  const focusContext = useContext(FocusContext)
  const tabExitElementRef = useRef<HTMLDivElement>(null)
  const [globalFocusState, setGlobalFocusState] = useState<FocusState>({
    stateType: 'external',
  })
  useEffect(() => {
    focusContext.setGlobalFocusState = setGlobalFocusState
    focusContext.keyboardBridgeItem.tabExitElementRef = tabExitElementRef
    const windowBlurHandler = () => {
      if (focusContext.globalFocusState.stateType === 'internal') {
        const nextFocusState: ExternalFocusState = {
          stateType: 'external',
        }
        focusContext.globalFocusState.setItemFocusState(nextFocusState)
        setGlobalFocusState(nextFocusState)
      }
    }
    window.addEventListener('blur', windowBlurHandler)
    return () => {
      window.removeEventListener('blur', windowBlurHandler)
    }
  }, [])
  useEffect(() => {
    focusContext.globalFocusState = globalFocusState
  }, [globalFocusState])
  useEffect(() => {
    if (globalFocusState.stateType === 'internal') {
      const tabExitSlingElement = document.createElement('div')
      tabExitSlingElement.tabIndex = 1
      tabExitElementRef.current!.appendChild(tabExitSlingElement)
    } else if (
      globalFocusState.stateType === 'external' &&
      tabExitElementRef.current!.children[0]
    ) {
      tabExitElementRef.current!.children[0]!.remove()
    }
  }, [globalFocusState.stateType])
  return (
    <Fragment>
      <div>
        <div
          key={'tabNextEntryElement'}
          tabIndex={globalFocusState.stateType === 'external' ? 1 : -1}
          onFocus={() => {
            if (focusContext.globalFocusState.stateType === 'external') {
              forwardFocusToInternalItem({
                focusContext,
                tabEntryKeyIndex: 0,
              })
            }
          }}
        />
        <div
          key={'tabPreviousEntryElement'}
          tabIndex={globalFocusState.stateType === 'external' ? 1 : -1}
          onFocus={() => {
            if (focusContext.globalFocusState.stateType === 'external') {
              forwardFocusToInternalItem({
                focusContext,
                tabEntryKeyIndex:
                  focusContext.keyboardBridgeItem.tabEntryKeys.length - 1,
              })
            }
          }}
        />
      </div>
      <div ref={tabExitElementRef} />
    </Fragment>
  )
}

interface ForwardFocusToInternalItemApi {
  focusContext: FocusContextValue
  tabEntryKeyIndex: number
}

function forwardFocusToInternalItem(api: ForwardFocusToInternalItemApi) {
  const { focusContext, tabEntryKeyIndex } = api
  const tabPreviousEntryKey =
    focusContext.keyboardBridgeItem.tabEntryKeys[tabEntryKeyIndex]!
  const tabExitFocusItem = focusContext.focusItems[tabPreviousEntryKey]!
  const nextFocusState: InternalFocusState = {
    stateType: 'internal',
    triggerType: 'keyboard',
    focusType: 'navigate',
    focusKey: tabExitFocusItem.focusKey,
    setItemFocusState: tabExitFocusItem.setItemFocusState,
  }
  focusContext.setGlobalFocusState!(nextFocusState)
  tabExitFocusItem.setItemFocusState(nextFocusState)
  tabExitFocusItem.focusElementRef.current!.focus()
}
