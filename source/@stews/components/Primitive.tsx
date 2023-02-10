import { getCssClass } from '@stews/helpers'
import { ComponentProps } from 'preact'
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
