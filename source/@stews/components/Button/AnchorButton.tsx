import {
  CoreAriaOrnaments,
  CoreAriaOrnamentsData,
} from '@stews/hooks/useInteractiveAria'
import { PopoverDataProps } from '../Popover'
import { ButtonBase, ButtonBaseProps } from './ButtonBase'

export interface AnchorButtonProps
  extends CoreAnchorButtonProps,
    CustomAnchorButtonProps {}

export interface CoreAnchorButtonProps
  extends CoreAriaOrnamentsData,
    Pick<
      PopoverDataProps,
      'anchorElementRef' | 'setPopoverOpen' | 'popoverOpen' | 'popoverAriaRole'
    > {}

export interface CustomAnchorButtonProps
  extends Omit<
    ButtonBaseProps<AnchorButtonAriaOrnaments>,
    'ariaOrnaments' | 'setCustomAriaAttributes' | 'elementRef' | 'onSelect'
  > {}

interface AnchorButtonAriaOrnaments extends CoreAriaOrnaments<'button'> {
  ariaHasPopup: string
}

export function AnchorButton(props: AnchorButtonProps) {
  const {
    anchorElementRef,
    disabled,
    popoverOpen,
    ariaLabel,
    ariaDescription,
    popoverAriaRole,
    setPopoverOpen,
    ...unadjustedProps
  } = props
  return (
    <ButtonBase<AnchorButtonAriaOrnaments>
      elementRef={anchorElementRef}
      disabled={disabled || popoverOpen}
      ariaOrnaments={{
        ariaRole: 'button',
        ariaLabel,
        ariaDescription,
        ariaHasPopup: popoverAriaRole,
      }}
      setCustomAriaAttributes={(ariaElement, ariaOrnaments) => {
        ariaElement.setAttribute('aria-haspopup', ariaOrnaments.ariaHasPopup)
      }}
      onSelect={() => {
        setPopoverOpen(true)
      }}
      {...unadjustedProps}
    />
  )
}
