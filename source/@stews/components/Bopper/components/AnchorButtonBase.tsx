import { Button, ButtonProps } from '@stews/components/Button'
import { PopoverDataProps, PopoverProps } from './Popover'

export interface AnchorButtonBaseProps
  extends CoreAnchorButtonBaseProps,
    CustomAnchorButtonBaseProps {}

export interface CoreAnchorButtonBaseProps
  extends Pick<
    PopoverDataProps,
    'anchorElementRef' | 'setPopoverOpen' | 'popoverRole'
  > {}

export interface CustomAnchorButtonBaseProps
  extends Omit<ButtonProps, 'elementRef' | 'onSelect'> {}

export function AnchorButtonBase(props: AnchorButtonBaseProps) {
  const {
    popoverRole,
    anchorElementRef,
    setPopoverOpen,
    ...customAnchorButtonProps
  } = props
  return (
    <Button
      aria-haspopup={popoverRole}
      elementRef={anchorElementRef}
      onSelect={() => {
        setPopoverOpen(true)
      }}
      {...customAnchorButtonProps}
    />
  )
}
