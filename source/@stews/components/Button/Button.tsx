import {
  ButtonBase,
  ButtonBaseProps,
  CoreAriaOrnaments,
  CoreAriaOrnamentsData,
} from './ButtonBase'

export interface ButtonProps extends CoreButtonProps, CustomButtonProps {}

interface CoreButtonProps extends CoreAriaOrnamentsData {}

interface CustomButtonProps
  extends Omit<
    ButtonBaseProps<ButtonAriaOrnaments>,
    'ariaOrnaments' | 'setCustomAriaAttributes'
  > {}

interface ButtonAriaOrnaments extends CoreAriaOrnaments<'button'> {}

export function Button(props: ButtonProps) {
  const { ariaLabel, ariaDescription, ...unadjustedProps } = props
  return (
    <ButtonBase<ButtonAriaOrnaments>
      setCustomAriaAttributes={() => {}}
      ariaOrnaments={{
        ariaRole: 'button',
        ariaLabel,
        ariaDescription,
      }}
      {...unadjustedProps}
    />
  )
}
