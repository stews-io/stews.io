import { getCssClass } from '@stews/helpers'
import { ComponentProps, Ref } from 'preact'
import cssModule from './Button.module.scss'

export interface ButtonProps extends Omit<ComponentProps<'div'>, 'ref'> {
  elementRef?: Ref<HTMLDivElement>
  onSelect: () => void
}

export function Button(props: ButtonProps) {
  const {
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
      onClick={(someClickEvent) => {
        const touchHitTestPointerDownEventBypassed =
          !someClickEvent.currentTarget.hasAttribute('data-pointer-focus')
        if (
          someClickEvent.currentTarget instanceof HTMLDivElement &&
          touchHitTestPointerDownEventBypassed
        ) {
          someClickEvent.currentTarget.setAttribute(
            'data-pointer-focus',
            'true'
          )
        }
        onSelect()
        if (onClick) {
          onClick(someClickEvent)
        }
      }}
      onKeyDown={(someKeyDownEvent) => {
        if (someKeyDownEvent.key === 'Enter') {
          onSelect()
        }
        if (onKeyDown) {
          onKeyDown(someKeyDownEvent)
        }
      }}
      onPointerDown={(somePointerDownEvent) => {
        if (somePointerDownEvent.currentTarget instanceof HTMLDivElement) {
          somePointerDownEvent.currentTarget.setAttribute(
            'data-pointer-focus',
            'true'
          )
        }
        if (onPointerDown) {
          onPointerDown(somePointerDownEvent)
        }
      }}
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
