import { AnchorButton, CoreAnchorButtonProps } from '@stews/components/Bopper'
import { getCssClass } from '@stews/helpers'
import {
  SelectBaseConfigProps,
  SelectBaseDataProps,
  VerifiedOptionLabelKey,
} from '../SelectBase'
import { SelectOptionLabel } from './SelectOptionLabel'
import cssModule from './SelectButton.module.scss'

export interface SelectButtonProps<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>
> extends CoreAnchorButtonProps,
    Pick<SelectBaseDataProps<MenuOption>, 'selectedOption'>,
    Pick<
      SelectBaseConfigProps<MenuOption, OptionLabelKey, unknown, unknown>,
      'optionLabelKey' | 'anchorBorderClassName' | 'fontSizeClassName'
    > {}

export function SelectButton<
  MenuOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<MenuOption>
>(props: SelectButtonProps<MenuOption, OptionLabelKey>) {
  const {
    anchorBorderClassName,
    fontSizeClassName,
    anchorElementRef,
    setPopoverOpen,
    selectedOption,
    optionLabelKey,
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
        className={cssModule.selectButton}
        anchorElementRef={anchorElementRef}
        setPopoverOpen={setPopoverOpen}
      >
        <div className={cssModule.buttonLabel}>
          <SelectOptionLabel
            optionLabelKey={optionLabelKey}
            someSelectOption={selectedOption}
          />
        </div>
        <div className={cssModule.iconContainer}>
          <svg className={cssModule.selectIcon} viewBox={'0 0 1 1'}>
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
