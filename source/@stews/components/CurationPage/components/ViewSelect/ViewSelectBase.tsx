import { CustomAnchorButtonBaseProps } from '@stews/components/Bopper'
import {
  SelectBase,
  SelectBaseAccessibilityProps,
  SelectBaseConfigProps,
  SelectBaseDataProps,
} from '@stews/components/Select'
import { CurationView } from '@stews/data'
import cssModule from './ViewSelectBase.module.scss'

interface ViewSelectBaseProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends ViewSelectBaseAccessibilityProps,
    ViewSelectBaseDataProps,
    ViewSelectBaseConfigProps<
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface ViewSelectBaseAccessibilityProps
  extends Pick<SelectBaseAccessibilityProps, 'popoverRole'> {}

export interface ViewSelectBaseDataProps
  extends SelectBaseDataProps<CurationView> {}

export interface ViewSelectBaseConfigProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends Pick<
    SelectBaseConfigProps<
      CurationView,
      'viewLabel',
      Omit<CustomAnchorButtonBaseProps, keyof CustomAnchorButtonBaseProps>,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >,
    'SelectMenu' | 'customOptionActionItemProps' | 'customMenuFooterProps'
  > {}

export function ViewSelectBase<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
>(
  props: ViewSelectBaseProps<CustomOptionActionItemProps, CustomMenuFooterProps>
) {
  const {
    SelectMenu,
    popoverRole,
    optionList,
    selectedOption,
    selectOption,
    customOptionActionItemProps,
    customMenuFooterProps,
  } = props
  return (
    <SelectBase
      optionLabelKey={'viewLabel'}
      anchorBorderClassName={cssModule.viewSelectAnchorBorder}
      fontSizeClassName={cssModule.viewSelectFontSize}
      SelectMenu={SelectMenu}
      popoverRole={popoverRole}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customOptionActionItemProps={customOptionActionItemProps}
      customMenuFooterProps={customMenuFooterProps}
      customSelectAnchorButtonProps={{}}
    />
  )
}
