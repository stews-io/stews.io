import { Bopper } from '@stews/components/Bopper'
import { FunctionComponent } from 'preact'
import { SelectButton } from './components/SelectButton'
import { SelectMenuBaseDataProps } from './components/SelectMenuBase'

interface SelectBaseProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends SelectBaseDataProps<MenuOption>,
    SelectBaseConfigProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface SelectBaseDataProps<MenuOption extends object> {
  optionList: Array<MenuOption>
  selectedOption: MenuOption
  selectOption: (nextSelectedOption: MenuOption) => void
}

export interface SelectBaseConfigProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> {
  anchorBorderClassName?: string
  fontSizeClassName?: string
  optionLabelKey: OptionLabelKey
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
  CustomOptionActionItemProps,
  CustomMenuFooterProps
>(
  props: SelectBaseProps<
    MenuOption,
    OptionLabelKey,
    CustomOptionActionItemProps,
    CustomMenuFooterProps
  >
) {
  const {
    SelectMenu,
    anchorBorderClassName,
    fontSizeClassName,
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
      customAnchorButtonProps={{
        anchorBorderClassName,
        fontSizeClassName,
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
