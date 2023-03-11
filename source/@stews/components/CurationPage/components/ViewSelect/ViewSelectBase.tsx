import { SelectBase, SelectBaseProps } from '@stews/components/Select'
import { ComponentProps } from 'preact'
import { CurationViewSelectOption } from '../../data'
import cssModule from './ViewSelectBase.module.scss'

export interface ViewSelectBaseProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends Pick<
    SelectBaseProps<
      CurationViewSelectOption,
      'viewLabel',
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >,
    | 'SelectMenu'
    | 'selectedOption'
    | 'selectOption'
    | 'optionList'
    | 'customOptionActionItemProps'
    | 'customMenuFooterProps'
  > {}

export interface DeterminedViewSelectProps
  extends Pick<
    ViewSelectBaseProps<unknown, unknown>,
    'optionList' | 'selectedOption' | 'selectOption'
  > {}

export interface ViewSelectMenuProps
  extends ComponentProps<ViewSelectBaseProps<unknown, unknown>['SelectMenu']> {}

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
