import { getCssClass } from '@stews/helpers/getCssClass'
import { SimpleComponentProps } from '@stews/helpers/types'
import {
  CoreAriaOrnaments,
  useInteractiveAria,
  UseInteractiveAriaApi,
} from '@stews/hooks/useInteractiveAria'
import { Ref } from 'preact'
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
    >,
    Pick<
      UseInteractiveAriaApi<AriaOrnaments>,
      'ariaOrnaments' | 'setCustomAriaAttributes'
    > {
  elementRef?: Ref<HTMLDivElement>
  onSelect: () => void
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
  const { ariaElementRef } = useInteractiveAria({
    ariaOrnaments: {
      ...ariaOrnaments,
      ariaDisabled: `${disabled ?? false}`,
    },
    setCustomAriaAttributes: (ariaElement, ariaOrnaments) => {
      ariaElement.setAttribute('aria-disabled', ariaOrnaments.ariaDisabled)
      setCustomAriaAttributes(ariaElement, ariaOrnaments)
    },
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
      tabIndex={disabled ? undefined : tabIndex ?? 0}
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
              if (onClick) {
                onClick(someClickEvent)
              }
              onSelect()
            }
      }
      onKeyDown={
        disabled
          ? undefined
          : (someKeyDownEvent) => {
              if (onKeyDown) {
                onKeyDown(someKeyDownEvent)
              }
              if (someKeyDownEvent.key === 'Enter') {
                onSelect()
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
