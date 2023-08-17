import { getCssClass } from '@stews/helpers/getCssClass'
import {
  SelectBaseConfigProps,
  SelectBaseDataProps,
  VerifiedOptionLabelKey,
} from '../SelectBase'
import { SelectOptionLabel } from './SelectOptionLabel'
import cssModule from './SelectButton.module.scss'
import {
  AnchorButton,
  CoreAnchorButtonProps,
  CustomAnchorButtonProps,
} from '@stews/components/Button'

export interface SelectButtonProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomSelectAnchorButtonProps extends CustomAnchorButtonProps
> extends CoreAnchorButtonProps,
    Pick<SelectBaseDataProps<MenuOption>, 'selectedOption'>,
    Pick<
      SelectBaseConfigProps<
        MenuOption,
        OptionLabelKey,
        CustomSelectAnchorButtonProps,
        Record<string, unknown>,
        Record<string, unknown>
      >,
      | 'optionLabelKey'
      | 'anchorBorderClassName'
      | 'fontSizeClassName'
      | 'selectIconClassName'
      | 'customSelectAnchorButtonProps'
    > {}

export function SelectButton<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>,
  CustomSelectAnchorButtonProps extends CustomAnchorButtonProps
>(
  props: SelectButtonProps<
    MenuOption,
    OptionLabelKey,
    CustomSelectAnchorButtonProps
  >
) {
  const {
    anchorBorderClassName,
    fontSizeClassName,
    ariaLabel,
    ariaDescription,
    popoverAriaRole,
    anchorElementRef,
    setPopoverOpen,
    popoverOpen,
    customSelectAnchorButtonProps,
    selectedOption,
    optionLabelKey,
    selectIconClassName,
  } = props
  return (
    <div
      className={getCssClass(
        cssModule.buttonContainer,
        [anchorBorderClassName, Boolean(anchorBorderClassName)],
        [fontSizeClassName, Boolean(fontSizeClassName)]
      )}
    >
      <AnchorButton
        ariaLabel={ariaLabel}
        ariaDescription={ariaDescription}
        popoverAriaRole={popoverAriaRole}
        anchorElementRef={anchorElementRef}
        setPopoverOpen={setPopoverOpen}
        popoverOpen={popoverOpen}
        className={getCssClass(cssModule.selectButton, [
          customSelectAnchorButtonProps.className,
          Boolean(customSelectAnchorButtonProps.className),
        ])}
        {...customSelectAnchorButtonProps}
      >
        <div className={cssModule.buttonLabel}>
          <SelectOptionLabel
            optionLabelKey={optionLabelKey}
            someSelectOption={selectedOption}
          />
        </div>
        <div className={cssModule.iconContainer}>
          <svg
            viewBox={'0 0 1 1'}
            className={getCssClass(cssModule.selectIcon, [
              selectIconClassName,
              Boolean(selectIconClassName),
            ])}
          >
            <polygon
              className={cssModule.dropdownPolygon}
              points={'0.2,0.375 0.8,0.375 0.5,0.775'}
            />
          </svg>
        </div>
      </AnchorButton>
    </div>
  )
}
