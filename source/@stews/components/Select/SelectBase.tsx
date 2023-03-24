import {
  Bopper,
  BopperProps,
  CustomAnchorButtonBaseProps,
} from '@stews/components/Bopper'
import { FunctionComponent } from 'preact'
import { SelectButton } from './components/SelectButton'
import { SelectMenuBaseDataProps } from './components/SelectMenuBase'

interface SelectBaseProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomSelectAnchorButtonProps extends CustomAnchorButtonBaseProps,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends SelectBaseAccessibilityProps,
    SelectBaseDataProps<MenuOption>,
    SelectBaseConfigProps<
      MenuOption,
      OptionLabelKey,
      CustomSelectAnchorButtonProps,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface SelectBaseAccessibilityProps
  extends Pick<BopperProps<unknown, unknown>, 'popoverRole'> {}

export interface SelectBaseDataProps<MenuOption extends object> {
  optionList: Array<MenuOption>
  selectedOption: MenuOption
  selectOption: (nextSelectedOption: MenuOption) => void
}

export interface SelectBaseConfigProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomSelectAnchorButtonProps extends CustomAnchorButtonBaseProps,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> {
  anchorBorderClassName?: string
  fontSizeClassName?: string
  selectIconClassName?: string
  optionLabelKey: OptionLabelKey
  customSelectAnchorButtonProps: CustomSelectAnchorButtonProps
  customOptionActionItemProps: CustomOptionActionItemProps
  customMenuFooterProps: CustomMenuFooterProps
  SelectMenu: FunctionComponent<
    SelectMenuBaseDataProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >
  >
}

export type VerifiedOptionLabelKey<MenuOption extends object> = {
  [SomeMenuOptionKey in keyof MenuOption]: MenuOption[SomeMenuOptionKey] extends string
    ? SomeMenuOptionKey
    : never
}[keyof MenuOption]

export function SelectBase<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomAnchorButtonProps extends CustomAnchorButtonBaseProps,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
>(
  props: SelectBaseProps<
    MenuOption,
    OptionLabelKey,
    CustomAnchorButtonProps,
    CustomOptionActionItemProps,
    CustomMenuFooterProps
  >
) {
  const {
    SelectMenu,
    popoverRole,
    customSelectAnchorButtonProps,
    anchorBorderClassName,
    fontSizeClassName,
    selectIconClassName,
    selectedOption,
    optionLabelKey,
    selectOption,
    optionList,
    customOptionActionItemProps,
    customMenuFooterProps,
  } = props
  return (
    <Bopper
      AnchorButton={SelectButton}
      PopoverContent={SelectMenu}
      popoverRole={popoverRole}
      customAnchorButtonProps={{
        customSelectAnchorButtonProps,
        anchorBorderClassName,
        fontSizeClassName,
        selectIconClassName,
        selectedOption,
        optionLabelKey,
      }}
      customPopoverContentProps={{
        fontSizeClassName,
        selectedOption,
        optionLabelKey,
        selectOption,
        optionList,
        customOptionActionItemProps,
        customMenuFooterProps,
      }}
    />
  )
}
