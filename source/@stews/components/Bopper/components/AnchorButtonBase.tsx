import { Button, ButtonProps } from '@stews/components/Button'
import { PopoverProps } from './Popover'

export interface AnchorButtonBaseProps
  extends CoreAnchorButtonBaseProps,
    CustomAnchorButtonBaseProps {}

export interface CoreAnchorButtonBaseProps
  extends Pick<PopoverProps<unknown>, 'anchorElementRef' | 'setPopoverOpen'> {}

export interface CustomAnchorButtonBaseProps
  extends Omit<ButtonProps, 'elementRef' | 'onSelect'> {}

export function AnchorButtonBase(props: AnchorButtonBaseProps) {
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
