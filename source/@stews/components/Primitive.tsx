import { getCssClass } from '@stews/helpers'
import { ComponentProps } from 'preact'
import { forwardRef } from 'preact/compat'
import cssModule from './Primitive.module.scss'

export interface DivProps extends ComponentProps<'div'> {}

export function Div(props: DivProps) {
  const { className, ...unadjustedProps } = props
  return (
    <div
      role={'presentation'}
      className={getCssClass(cssModule.divBase, className)}
      {...unadjustedProps}
    />
  )
}

export interface ButtonProps extends ComponentProps<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, ...unadjustedProps } = props
    return (
      <button
        ref={ref}
        className={getCssClass(cssModule.buttonBase, className)}
        {...unadjustedProps}
      />
    )
  }
)
