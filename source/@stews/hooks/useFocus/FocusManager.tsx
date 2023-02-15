import { ComponentChildren } from 'preact'
import { useContext, useEffect, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { FocusContext } from './FocusContext'
import { ExternalFocusState, InternalFocusState } from './FocusState'

export interface FocusManagerProps {
  children: ComponentChildren
}

export function FocusManager(props: FocusManagerProps) {
  const { children } = props
  const focusContext = useContext(FocusContext)
  const tabCaptureElementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const windowBlurHandler = (someWindowBlurEvent: FocusEvent) => {
      if (focusContext.globalFocusState.stateType === 'internal') {
        const nextFocusState: ExternalFocusState = {
          stateType: 'external',
        }
        focusContext.globalFocusState.setItemFocusState(nextFocusState)
        focusContext.globalFocusState = nextFocusState
      }
    }
    window.addEventListener('blur', windowBlurHandler)
    return () => {
      window.removeEventListener('blur', windowBlurHandler)
    }
  }, [])
  return (
    <Fragment>
      <div
        ref={tabCaptureElementRef}
        tabIndex={1}
        onFocus={() => {
          const nextFocusState: InternalFocusState = {
            stateType: 'internal',
            triggerType: 'keyboard',
            focusType: 'navigate',
            ...focusContext.focusItems['a']!,
          }
          focusContext.globalFocusState = nextFocusState
          focusContext.focusItems['a']!.setItemFocusState(nextFocusState)
          focusContext.focusItems['a']!.focusElementRef.current!.focus()
        }}
      />
      {children}
    </Fragment>
  )
}
