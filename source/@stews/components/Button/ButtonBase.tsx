import { getCssClass, throwInvalidPathError } from '@stews/helpers'
import { SimpleComponentProps } from '@stews/helpers/types'
import { createRef, Ref } from 'preact'
import { useLayoutEffect, useMemo } from 'preact/hooks'
import cssModule from './ButtonBase.module.scss'

export interface ButtonBaseProps<
  AriaOrnaments extends CoreAriaOrnaments<string>
> extends Pick<
    SimpleComponentProps<'div'>,
    | 'children'
    | 'className'
    | 'disabled'
    | 'tabIndex'
    | 'onClick'
    | 'onKeyDown'
    | 'onPointerDown'
    | 'onFocus'
    | 'onBlur'
    | 'onPointerMove'
  > {
  setCustomAriaAttributes: (
    ariaElement: HTMLDivElement,
    ariaOrnaments: AriaOrnaments
  ) => void
  ariaOrnaments: AriaOrnaments
  elementRef?: Ref<HTMLDivElement>
  onSelect: () => void
}

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

export function ButtonBase<AriaOrnaments extends CoreAriaOrnaments<string>>(
  props: ButtonBaseProps<AriaOrnaments>
) {
  const {
    setCustomAriaAttributes,
    ariaOrnaments,
    disabled,
    elementRef,
    tabIndex,
    className,
    onSelect,
    onClick,
    onKeyDown,
    onPointerDown,
    onBlur,
    ...unadjustedProps
  } = props
  const { ariaElementRef } = useButtonAria({
    setCustomAriaAttributes,
    ariaOrnaments,
    disabled,
  })
  return (
    <div
      ref={(elementNode) => {
        ariaElementRef.current = elementNode
        if (elementRef && typeof elementRef === 'object') {
          elementRef.current = elementNode
        } else if (typeof elementRef === 'function') {
          elementRef(elementNode)
        }
      }}
      tabIndex={tabIndex ?? 0}
      className={getCssClass(cssModule.buttonBase, [
        className,
        Boolean(className),
      ])}
      onClick={
        disabled
          ? undefined
          : (someClickEvent) => {
              const touchHitTestPointerDownEventBypassed =
                !someClickEvent.currentTarget.hasAttribute('data-pointer-focus')
              if (
                someClickEvent.currentTarget instanceof HTMLDivElement &&
                touchHitTestPointerDownEventBypassed
              ) {
                someClickEvent.currentTarget.setAttribute(
                  'data-pointer-focus',
                  'touch'
                )
              }
              onSelect()
              if (onClick) {
                onClick(someClickEvent)
              }
            }
      }
      onKeyDown={
        disabled
          ? undefined
          : (someKeyDownEvent) => {
              if (someKeyDownEvent.key === 'Enter') {
                onSelect()
              }
              if (onKeyDown) {
                onKeyDown(someKeyDownEvent)
              }
            }
      }
      onPointerDown={
        disabled
          ? undefined
          : (somePointerDownEvent) => {
              if (
                somePointerDownEvent.currentTarget instanceof HTMLDivElement
              ) {
                somePointerDownEvent.currentTarget.setAttribute(
                  'data-pointer-focus',
                  somePointerDownEvent.pointerType
                )
              }
              if (onPointerDown) {
                onPointerDown(somePointerDownEvent)
              }
            }
      }
      onBlur={(someBlurEvent) => {
        if (someBlurEvent.target instanceof HTMLDivElement) {
          // if a button is focused with a pointer then
          // it should always have the "pointer-focus" attribute
          someBlurEvent.target.removeAttribute('data-pointer-focus')
        }
        if (onBlur) {
          onBlur(someBlurEvent)
        }
      }}
      {...unadjustedProps}
    />
  )
}

interface UseButtonAriaApi<AriaOrnaments extends CoreAriaOrnaments<string>>
  extends Pick<
    ButtonBaseProps<AriaOrnaments>,
    'ariaOrnaments' | 'disabled' | 'setCustomAriaAttributes'
  > {}

function useButtonAria<AriaOrnaments extends CoreAriaOrnaments<string>>(
  api: UseButtonAriaApi<AriaOrnaments>
) {
  const { ariaOrnaments, disabled, setCustomAriaAttributes } = api
  const { ariaElementRef, ariaDescriptionElementRef } = useMemo(() => {
    return {
      ariaElementRef: createRef<HTMLDivElement>(),
      ariaDescriptionElementRef: createRef<HTMLDivElement>(),
    }
  }, [])
  useLayoutEffect(() => {
    const ariaElement =
      ariaElementRef.current ??
      throwInvalidPathError('useButtonAria.useLayoutEffect[]')
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
      ariaElement.setAttribute('aria-disabled', `${disabled ?? false}`)
      ariaDescriptionElement.innerText = ariaOrnaments.ariaDescription
      setCustomAriaAttributes(ariaElement, ariaOrnaments)
    } else {
      throwInvalidPathError(
        'useButtonAria.useLayoutEffect[ariaOrnaments, disabled]'
      )
    }
  }, [ariaOrnaments, disabled])
  return { ariaElementRef }
}
