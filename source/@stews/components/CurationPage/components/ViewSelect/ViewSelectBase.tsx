import {
  SelectBase,
  SelectBaseConfigProps,
  SelectBaseDataProps,
} from '@stews/components/Select'
import { CurationView } from '@stews/data'
import cssModule from './ViewSelectBase.module.scss'

interface ViewSelectBaseProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends ViewSelectBaseDataProps,
    ViewSelectBaseConfigProps<
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface ViewSelectBaseDataProps
  extends SelectBaseDataProps<CurationView> {}

export interface ViewSelectBaseConfigProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends Pick<
    SelectBaseConfigProps<
      CurationView,
      'viewLabel',
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
    optionList,
    selectedOption,
    selectOption,
    customOptionActionItemProps,
    customMenuFooterProps,
  } = props
  return (
    <SelectBase
      anchorBorderClassName={cssModule.viewSelectAnchorBorder}
      fontSizeClassName={cssModule.viewSelectFontSize}
      SelectMenu={SelectMenu}
      optionLabelKey={'viewLabel'}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customOptionActionItemProps={customOptionActionItemProps}
      customMenuFooterProps={customMenuFooterProps}
    />
  )
}
