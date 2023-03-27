import { Button, CustomAnchorButtonProps } from '@stews/components/Button'
import { getCssClass } from '@stews/helpers'
import { FunctionComponent } from 'preact'
import {
  useSelectMenuNavigation,
  UseSelectMenuNavigationResult,
} from '../hooks/useSelectMenuNavigation'
import {
  SelectBaseConfigProps,
  SelectBaseDataProps,
  VerifiedOptionLabelKey,
} from '../SelectBase'
import { SelectOptionLabel } from './SelectOptionLabel'
import { CorePopoverContentProps } from '@stews/components/Popover'
import cssModule from './SelectMenuBase.module.scss'

interface SelectMenuBaseProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> extends SelectMenuBaseDataProps<
      MenuOption,
      OptionLabelKey,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >,
    SelectMenuBaseConfigProps<
      MenuOption,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface SelectMenuBaseDataProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> extends CorePopoverContentProps,
    Pick<
      SelectBaseDataProps<MenuOption>,
      'optionList' | 'selectedOption' | 'selectOption'
    >,
    Pick<
      SelectBaseConfigProps<
        MenuOption,
        OptionLabelKey,
        CustomAnchorButtonProps,
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
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> {
  OptionActionItem: FunctionComponent<
    OptionActionItemProps<MenuOption, CustomOptionActionItemProps>
  >
  MenuFooter: FunctionComponent<MenuFooterProps<CustomMenuFooterProps>>
}

type OptionActionItemProps<
  MenuOption extends object,
  CustomOptionActionItemProps extends Record<string, unknown>
> = CustomOptionActionItemProps &
  Pick<
    UseSelectMenuNavigationResult,
    'latestFocusedOptionIndex' | 'getMenuNavigationOptionActionButtonProps'
  > & {
    someOption: MenuOption
    optionIndex: number
  }

type MenuFooterProps<CustomMenuFooterProps extends Record<string, unknown>> =
  CustomMenuFooterProps &
    Pick<UseSelectMenuNavigationResult, 'menuNavigationFooterActionButtonProps'>

export function SelectMenuBase<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
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
            ariaLabel={'todo'}
            ariaDescription={'todo'}
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
            {...getMenuNavigationMenuOptionProps(optionIndex)}
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
                <SelectOptionLabel
                  optionLabelKey={optionLabelKey}
                  someSelectOption={someOption}
                />
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
