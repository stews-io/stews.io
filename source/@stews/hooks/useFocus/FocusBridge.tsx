import { useContext, useEffect, useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { FocusContext } from './FocusContext'
import { ExternalFocusState, InternalFocusState } from './FocusState'

export interface FocusBridgeProps {}

export function FocusBridge(props: FocusBridgeProps) {
  const {} = props
  const focusContext = useContext(FocusContext)
  const tabNextEntryElementRef = useRef<HTMLDivElement>(null)
  const tabPreviousEntryElementRef = useRef<HTMLDivElement>(null)
  const tabExitElementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    tabNextEntryElementRef.current!.tabIndex = 1
    tabPreviousEntryElementRef.current!.tabIndex = 1
    focusContext.keyboardBridgeItem.tabNextEntryElementRef =
      tabNextEntryElementRef
    focusContext.keyboardBridgeItem.tabPreviousEntryElementRef =
      tabPreviousEntryElementRef
    focusContext.keyboardBridgeItem.tabExitElementRef = tabExitElementRef
    const windowBlurHandler = () => {
      if (focusContext.globalFocusState.stateType === 'internal') {
        const nextFocusState: ExternalFocusState = {
          stateType: 'external',
        }
        focusContext.globalFocusState.setItemFocusState(nextFocusState)
        focusContext.globalFocusState = nextFocusState
        tabNextEntryElementRef.current!.tabIndex = 1
        tabPreviousEntryElementRef.current!.tabIndex = 1
        const tabExitBridgeChildElement =
          focusContext.keyboardBridgeItem.tabExitElementRef!.current!
            .children[0]
        tabExitBridgeChildElement!.remove()
      }
    }
    window.addEventListener('blur', windowBlurHandler)
    return () => {
      window.removeEventListener('blur', windowBlurHandler)
    }
  }, [])
  return (
    <Fragment>
      <div>
        <div
          ref={tabNextEntryElementRef}
          // tabIndex={1}
          onFocus={() => {
            if (focusContext.globalFocusState.stateType === 'external') {
              const tabNextEntryKey =
                focusContext.keyboardBridgeItem.tabEntryKeys[0]!
              const tabEntryFocusItem =
                focusContext.focusItems[tabNextEntryKey]!
              const nextFocusState: InternalFocusState = {
                stateType: 'internal',
                triggerType: 'keyboard',
                focusType: 'navigate',
                focusKey: tabEntryFocusItem.focusKey,
                setItemFocusState: tabEntryFocusItem.setItemFocusState,
              }
              focusContext.globalFocusState = nextFocusState
              tabEntryFocusItem.setItemFocusState(nextFocusState)
              tabEntryFocusItem.focusElementRef.current!.focus()
              const tabExitSlingElement = document.createElement('div')
              tabExitSlingElement.tabIndex = 1
              focusContext.keyboardBridgeItem.tabExitElementRef!.current!.appendChild(
                tabExitSlingElement
              )
              focusContext.keyboardBridgeItem.tabNextEntryElementRef!.current!.tabIndex =
                -1
              focusContext.keyboardBridgeItem.tabPreviousEntryElementRef!.current!.tabIndex =
                -1
            }
          }}
        />
        <div
          ref={tabPreviousEntryElementRef}
          // tabIndex={1}
          onFocus={() => {
            if (focusContext.globalFocusState.stateType === 'external') {
              const tabPreviousEntryKey =
                focusContext.keyboardBridgeItem.tabEntryKeys[
                  focusContext.keyboardBridgeItem.tabEntryKeys.length - 1
                ]!
              const tabExitFocusItem =
                focusContext.focusItems[tabPreviousEntryKey]!
              const nextFocusState: InternalFocusState = {
                stateType: 'internal',
                triggerType: 'keyboard',
                focusType: 'navigate',
                focusKey: tabExitFocusItem.focusKey,
                setItemFocusState: tabExitFocusItem.setItemFocusState,
              }
              focusContext.globalFocusState = nextFocusState
              tabExitFocusItem.setItemFocusState(nextFocusState)
              tabExitFocusItem.focusElementRef.current!.focus()
              const tabExitSlingElement = document.createElement('div')
              tabExitSlingElement.tabIndex = 1
              focusContext.keyboardBridgeItem.tabExitElementRef!.current!.appendChild(
                tabExitSlingElement
              )
              focusContext.keyboardBridgeItem.tabNextEntryElementRef!.current!.tabIndex =
                -1
              focusContext.keyboardBridgeItem.tabPreviousEntryElementRef!.current!.tabIndex =
                -1
            }
          }}
        />
      </div>
      <div ref={tabExitElementRef} />
    </Fragment>
  )
}
