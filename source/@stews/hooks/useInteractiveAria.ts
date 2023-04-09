import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { createRef } from 'preact'
import { useLayoutEffect, useMemo } from 'preact/hooks'

export interface CoreAriaOrnaments<AriaRole extends string>
  extends CoreAriaOrnamentsConfig<AriaRole>,
    CoreAriaOrnamentsData {}

interface CoreAriaOrnamentsConfig<AriaRole extends string> {
  ariaRole: AriaRole
}

export interface CoreAriaOrnamentsData {
  ariaLabel: string
  ariaDescription: string
}

export interface UseInteractiveAriaApi<
  AriaOrnaments extends CoreAriaOrnaments<string>
> {
  ariaOrnaments: AriaOrnaments
  setCustomAriaAttributes: (
    ariaElement: HTMLDivElement,
    ariaOrnaments: AriaOrnaments
  ) => void
}

export function useInteractiveAria<
  AriaOrnaments extends CoreAriaOrnaments<string>
>(api: UseInteractiveAriaApi<AriaOrnaments>) {
  const { ariaOrnaments, setCustomAriaAttributes } = api
  const { ariaElementRef, ariaDescriptionElementRef } = useMemo(() => {
    return {
      ariaElementRef: createRef<HTMLDivElement>(),
      ariaDescriptionElementRef: createRef<HTMLDivElement>(),
    }
  }, [])
  useLayoutEffect(() => {
    const ariaElement =
      ariaElementRef.current ??
      throwInvalidPathError('useAria.useLayoutEffect[]')
    const ariaDescriptionElement = document.createElement('div')
    ariaDescriptionElement.id = `${Math.random()}`
    ariaDescriptionElement.style.display = 'none'
    ariaElement.insertAdjacentElement('afterend', ariaDescriptionElement)
    ariaElement.setAttribute('aria-describedby', ariaDescriptionElement.id)
    ariaDescriptionElementRef.current = ariaDescriptionElement
    return () => {
      ariaDescriptionElement.remove()
    }
  }, [])
  useLayoutEffect(() => {
    const ariaElement = ariaElementRef.current
    const ariaDescriptionElement = ariaDescriptionElementRef.current
    if (
      ariaElement instanceof HTMLDivElement &&
      ariaDescriptionElement instanceof HTMLDivElement
    ) {
      ariaElement.setAttribute('role', ariaOrnaments.ariaRole)
      ariaElement.setAttribute('aria-label', ariaOrnaments.ariaLabel)
      ariaDescriptionElement.innerText = ariaOrnaments.ariaDescription
      setCustomAriaAttributes(ariaElement, ariaOrnaments)
    } else {
      throwInvalidPathError('useAria.useLayoutEffect[ariaOrnaments]')
    }
  }, [ariaOrnaments])
  return { ariaElementRef }
}
