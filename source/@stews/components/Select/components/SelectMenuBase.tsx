import { CorePopoverContentProps } from '@stews/components/Bopper'
import { Button } from '@stews/components/Button'
import { getCssClass } from '@stews/helpers'
import { FunctionComponent } from 'preact'
import {
  useSelectMenuNavigation,
  UseSelectMenuNavigationResult,
} from '../hooks/useSelectMenuNavigation'
import {
  ExtractStrictMenuOption,
  SelectBaseConfigProps,
  SelectBaseDataProps,
} from '../SelectBase'
import cssModule from './SelectMenuBase.module.scss'

interface SelectMenuBaseProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends SelectMenuBaseDataProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >,
    SelectMenuBaseConfigProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface SelectMenuBaseDataProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends CorePopoverContentProps,
    Pick<
      SelectBaseDataProps<MenuOption, OptionLabelKey>,
      'optionList' | 'selectedOption' | 'selectOption'
    >,
    Pick<
      SelectBaseConfigProps<
        MenuOption,
        OptionLabelKey,
        CustomOptionActionItemProps,
        CustomMenuFooterProps
      >,
      | 'optionLabelKey'
      | 'customOptionActionItemProps'
      | 'customMenuFooterProps'
      | 'fontSizeClassName'
    > {}

export interface SelectMenuBaseConfigProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> {
  OptionActionItem: FunctionComponent<
    OptionActionItemProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps
    >
  >
  MenuFooter: FunctionComponent<MenuFooterProps<CustomMenuFooterProps>>
}

type OptionActionItemProps<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  StrictMenuOption extends ExtractStrictMenuOption<
    MenuOption,
    OptionLabelKey
  > = ExtractStrictMenuOption<MenuOption, OptionLabelKey>
> = CustomOptionActionItemProps &
  Pick<
    UseSelectMenuNavigationResult,
    'latestFocusedOptionIndex' | 'getMenuNavigationOptionActionButtonProps'
  > & {
    someOption: StrictMenuOption
    optionIndex: number
  }

type MenuFooterProps<CustomMenuFooterProps> = CustomMenuFooterProps &
  Pick<UseSelectMenuNavigationResult, 'menuNavigationFooterActionButtonProps'>

export function SelectMenuBase<
  MenuOption extends object,
  OptionLabelKey extends keyof MenuOption,
  CustomOptionActionItemProps,
  CustomMenuFooterProps
>(
  props: SelectMenuBaseProps<
    MenuOption,
    OptionLabelKey,
    CustomOptionActionItemProps,
    CustomMenuFooterProps
  >
) {
  const {
    fontSizeClassName,
    anchorElementRef,
    initialFocusElementRef,
    popoverNavigationItemBlurHandler,
    optionList,
    selectedOption,
    selectOption,
    optionLabelKey,
    OptionActionItem,
    customOptionActionItemProps,
    MenuFooter,
    customMenuFooterProps,
  } = props
  const {
    latestFocusedOptionIndex,
    menuNavigationMenuContainerProps,
    getMenuNavigationMenuOptionProps,
    getMenuNavigationOptionActionButtonProps,
    menuNavigationFooterActionButtonProps,
  } = useSelectMenuNavigation({
    anchorElementRef,
    initialFocusElementRef,
    popoverNavigationItemBlurHandler,
  })
  return (
    <div
      {...menuNavigationMenuContainerProps}
      className={getCssClass(cssModule.menuContainer, [
        fontSizeClassName,
        Boolean(fontSizeClassName),
      ])}
    >
      <div className={cssModule.optionList}>
        {optionList.map((someOption, optionIndex) => (
          <Button
            {...getMenuNavigationMenuOptionProps(optionIndex)}
            key={optionIndex}
            className={getCssClass(
              cssModule.optionItem,
              [cssModule.selectedOption, selectedOption === someOption],
              [
                cssModule.latestFocusedOption,
                latestFocusedOptionIndex === optionIndex,
              ]
            )}
            onSelect={() => {
              selectOption(someOption)
            }}
          >
            <svg className={cssModule.optionSelectedIcon} viewBox={'0 0 24 24'}>
              <path
                d={
                  'M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z'
                }
              />
            </svg>
            <div className={cssModule.optionLabelContainer}>
              <div className={cssModule.optionLabel}>
                {someOption[optionLabelKey]}
              </div>
            </div>
            <div className={cssModule.optionActionItemContainer}>
              <OptionActionItem
                latestFocusedOptionIndex={latestFocusedOptionIndex}
                getMenuNavigationOptionActionButtonProps={
                  getMenuNavigationOptionActionButtonProps
                }
                someOption={someOption}
                optionIndex={optionIndex}
                {...customOptionActionItemProps}
              />
            </div>
          </Button>
        ))}
      </div>
      <MenuFooter
        menuNavigationFooterActionButtonProps={
          menuNavigationFooterActionButtonProps
        }
        {...customMenuFooterProps}
      />
    </div>
  )
}
