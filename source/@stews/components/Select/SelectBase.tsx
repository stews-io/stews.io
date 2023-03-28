import { Bopper, BopperProps } from '@stews/components/Bopper'
import { FunctionComponent } from 'preact'
import { CustomAnchorButtonProps } from '../Button'
import { SelectButton } from './components/SelectButton'
import { SelectMenuBaseDataProps } from './components/SelectMenuBase'

interface SelectBaseProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomSelectAnchorButtonProps extends CustomAnchorButtonProps,
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> extends SelectBaseDataProps<MenuOption>,
    SelectBaseConfigProps<
      MenuOption,
      OptionLabelKey,
      CustomSelectAnchorButtonProps,
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
  CustomSelectAnchorButtonProps extends CustomAnchorButtonProps,
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> extends Pick<
    BopperProps<unknown, unknown>,
    'popoverAriaRole' | 'anchorAriaLabel' | 'anchorAriaDescription'
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
  CustomSelectAnchorButtonProps extends CustomAnchorButtonProps,
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
>(
  props: SelectBaseProps<
    MenuOption,
    OptionLabelKey,
    CustomSelectAnchorButtonProps,
    CustomOptionActionItemProps,
    CustomMenuFooterProps
  >
) {
  const {
    SelectMenu,
    popoverAriaRole,
    anchorAriaLabel,
    anchorAriaDescription,
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
      SomeAnchorButton={SelectButton}
      PopoverContent={SelectMenu}
      popoverAriaRole={popoverAriaRole}
      anchorAriaLabel={anchorAriaLabel}
      anchorAriaDescription={anchorAriaDescription}
      customSomeAnchorButtonProps={{
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
