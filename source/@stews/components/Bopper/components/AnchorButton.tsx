import { Button, ButtonProps } from '@stews/components/Button'
import { PopoverProps } from './Popover'

export type AnchorButtonProps<CustomAnchorButtonProps> = CoreAnchorButtonProps &
  CustomAnchorButtonProps

export interface CoreAnchorButtonProps
  extends Omit<ButtonProps, 'elementRef' | 'onSelect'>,
    Pick<PopoverProps<unknown>, 'anchorElementRef' | 'setPopoverOpen'> {}

export function AnchorButton<CustomAnchorButtonProps>(
  props: AnchorButtonProps<CustomAnchorButtonProps>
) {
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
