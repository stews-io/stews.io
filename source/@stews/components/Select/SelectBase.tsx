import { Bopper } from '@stews/components/Bopper'
import { FunctionComponent } from 'preact'
import { SelectButton } from './components/SelectButton'
// import { SelectMenuProps } from './components/SelectMenuBase'

export interface SelectBaseProps<
  MenuOption extends Record<string, unknown>,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  CustomMenuFooterProps,
  StrictMenuOption extends ExtractStrictMenuOption<
    MenuOption,
    OptionLabelKey
  > = ExtractStrictMenuOption<MenuOption, OptionLabelKey>
> {
  optionLabelKey: OptionLabelKey
  optionsList: Array<StrictMenuOption>
  selectedOption: StrictMenuOption
  selectOption: (nextSelectedOption: StrictMenuOption) => void
  customOptionActionItemProps: CustomOptionActionItemProps
  customMenuFooterProps: CustomMenuFooterProps
  // SelectMenu: FunctionComponent<
  //   SelectMenuProps<CustomOptionActionItemProps, CustomMenuFooterProps>
  // >
}

type ExtractStrictMenuOption<
  MenuOption extends Record<string, unknown>,
  OptionLabelKey extends keyof MenuOption
> = Omit<MenuOption, OptionLabelKey> & {
  [TargetOptionLabelKey in OptionLabelKey]: MenuOption[TargetOptionLabelKey] extends string
    ? string
    : never
}

export function SelectBase<
  MenuOption extends Record<string, unknown>,
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
    selectedOption,
    optionLabelKey,
    // SelectMenu,
    selectOption,
    optionsList,
    customOptionActionItemProps,
    customMenuFooterProps,
  } = props
  return (
    <Bopper
      AnchorButton={SelectButton}
      PopoverContent={() => null}
      customAnchorButtonProps={{
        selectedOption,
        optionLabelKey,
      }}
      customPopoverContentProps={{
        selectedOption,
        selectOption,
        optionsList,
        customOptionActionItemProps,
        customMenuFooterProps,
      }}
    />
  )
}
