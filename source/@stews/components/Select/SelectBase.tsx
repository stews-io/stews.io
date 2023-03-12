import { Bopper } from '@stews/components/Bopper'
import { FunctionComponent } from 'preact'
import { SelectButton } from './components/SelectButton'
import { SelectMenuBaseDataProps } from './components/SelectMenuBase'

interface SelectBaseProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends SelectBaseDataProps<MenuOption, OptionLabelKey>,
    SelectBaseConfigProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface SelectBaseDataProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  StrictMenuOption extends ExtractStrictMenuOption<
    MenuOption,
    OptionLabelKey
  > = ExtractStrictMenuOption<MenuOption, OptionLabelKey>
> {
  optionList: Array<StrictMenuOption>
  selectedOption: StrictMenuOption
  selectOption: (nextSelectedOption: StrictMenuOption) => void
}

export type ExtractStrictMenuOption<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption
> = Omit<MenuOption, OptionLabelKey> & {
  [TargetOptionLabelKey in OptionLabelKey]: MenuOption[TargetOptionLabelKey] extends string
    ? string
    : never
}

export interface SelectBaseConfigProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
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

export function SelectBase<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
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
