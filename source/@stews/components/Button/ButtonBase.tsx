import { getCssClass } from '@stews/helpers'
import { SimpleComponentProps } from '@stews/helpers/types'
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
  > {
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
  return (
    <div
      ref={elementRef}
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
