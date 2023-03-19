import { Button, ButtonProps } from '@stews/components/Button'
import { PopoverProps } from './Popover'

export type AnchorButtonProps<
  SomeCustomAnchorButtonProps extends CustomAnchorButtonProps
> = CoreAnchorButtonProps & SomeCustomAnchorButtonProps

export interface CoreAnchorButtonProps
  extends Omit<ButtonProps, 'elementRef' | 'onSelect'>,
    Pick<PopoverProps<unknown>, 'anchorElementRef' | 'setPopoverOpen'> {}

export interface CustomAnchorButtonProps
  extends Omit<ButtonProps, 'elementRef' | 'onSelect'> {}

export function AnchorButton<
  SomeCustomAnchorButtonProps extends CustomAnchorButtonProps
>(props: AnchorButtonProps<SomeCustomAnchorButtonProps>) {
  const { anchorElementRef, setPopoverOpen, ...customAnchorButtonProps } = props
  return (
    <Button
      elementRef={anchorElementRef}
      onSelect={() => {
        setPopoverOpen(true)
      }}
      {...customAnchorButtonProps}
    />
  )
}
