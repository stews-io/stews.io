import { PopoverDataProps } from '../Popover'
import {
  ButtonBase,
  ButtonBaseProps,
  CoreAriaOrnaments,
  CoreAriaOrnamentsData,
} from './ButtonBase'

export interface AnchorButtonProps
  extends CoreAnchorButtonProps,
    CustomAnchorButtonProps {}

export interface CoreAnchorButtonProps
  extends CoreAriaOrnamentsData,
    Pick<
      PopoverDataProps,
      'anchorElementRef' | 'setPopoverOpen' | 'popoverAriaRole'
    > {}

export interface CustomAnchorButtonProps
  extends Omit<
    ButtonBaseProps<AnchorButtonAriaOrnaments>,
    'ariaOrnaments' | 'elementRef' | 'onSelect'
  > {}

interface AnchorButtonAriaOrnaments extends CoreAriaOrnaments<'button'> {
  ariaHasPopup: string
}

export function AnchorButton(props: AnchorButtonProps) {
  const {
    ariaLabel,
    ariaDescription,
    popoverAriaRole,
    anchorElementRef,
    setPopoverOpen,
    ...unadjustedProps
  } = props
  return (
    <ButtonBase<AnchorButtonAriaOrnaments>
      elementRef={anchorElementRef}
      ariaOrnaments={{
        ariaRole: 'button',
        ariaLabel,
        ariaDescription,
        ariaHasPopup: popoverAriaRole,
      }}
      onSelect={() => {
        setPopoverOpen(true)
      }}
      {...unadjustedProps}
    />
  )
}
