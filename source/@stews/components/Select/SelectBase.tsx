import { Bopper } from '@stews/components/Bopper'
import { FunctionComponent } from 'preact'
import { SelectButton } from './components/SelectButton'
import { SelectMenuProps } from './components/SelectMenuBase'

export interface SelectBaseProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  CustomMenuFooterProps,
  StrictMenuOption extends ExtractStrictMenuOption<
    MenuOption,
    OptionLabelKey
  > = ExtractStrictMenuOption<MenuOption, OptionLabelKey>
> {
  optionLabelKey: OptionLabelKey
  optionList: Array<StrictMenuOption>
  selectedOption: StrictMenuOption
  selectOption: (nextSelectedOption: StrictMenuOption) => void
  customOptionActionItemProps: CustomOptionActionItemProps
  customMenuFooterProps: CustomMenuFooterProps
  SelectMenu: FunctionComponent<
    SelectMenuProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >
  >
  anchorBorderClassName?: string
  fontSizeClassName?: string
}

export type ExtractStrictMenuOption<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption
> = Omit<MenuOption, OptionLabelKey> & {
  [TargetOptionLabelKey in OptionLabelKey]: MenuOption[TargetOptionLabelKey] extends string
    ? string
    : never
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
