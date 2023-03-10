import { AnchorButton, CoreAnchorButtonProps } from '@stews/components/Bopper'
import { SelectBaseProps } from '../SelectBase'
import cssModule from './SelectButton.module.scss'

export interface SelectButtonProps<
  MenuOption extends Record<string, unknown>,
  OptionLabelKey extends keyof MenuOption
> extends CoreAnchorButtonProps,
    Pick<
      SelectBaseProps<MenuOption, OptionLabelKey, unknown, unknown>,
      'selectedOption' | 'optionLabelKey'
    > {}

export function SelectButton<
  MenuOption extends Record<string, unknown>,
  OptionLabelKey extends keyof MenuOption
>(props: SelectButtonProps<MenuOption, OptionLabelKey>) {
  const { anchorElementRef, setPopoverOpen, selectedOption, optionLabelKey } =
    props
  return (
    <div className={cssModule.buttonContainer}>
      <AnchorButton
        className={cssModule.selectButton}
        anchorElementRef={anchorElementRef}
        setPopoverOpen={setPopoverOpen}
      >
        <div className={cssModule.buttonLabel}>
          {selectedOption[optionLabelKey]}
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
