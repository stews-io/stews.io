import {
  SelectBase,
  SelectBaseProps,
  SelectMenuBase,
} from '@stews/components/Select'
import { ComponentProps } from 'preact'
import { ViewSortOrderSelectOption } from '../../data'
import cssModule from './SortSelect.module.scss'

export interface SortSelectProps<CurationItem>
  extends Pick<
    SortSelectPropsConfig<CurationItem>,
    'optionList' | 'selectedOption' | 'selectOption'
  > {}

type SortSelectPropsConfig<CurationItem> = SelectBaseProps<
  ViewSortOrderSelectOption<CurationItem>,
  'sortLabel',
  null,
  null
>

export function SortSelect<CurationItem>(props: SortSelectProps<CurationItem>) {
  const { optionList, selectedOption, selectOption } = props
  return (
    <SelectBase
      anchorBorderClassName={cssModule.sortSelectAnchorBorder}
      fontSizeClassName={cssModule.sortSelectFontSize}
      SelectMenu={SortSelectMenu}
      optionLabelKey={'sortLabel'}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customOptionActionItemProps={null}
      customMenuFooterProps={null}
    />
  )
}

interface SortSelectMenuProps<CurationItem>
  extends ComponentProps<SortSelectPropsConfig<CurationItem>['SelectMenu']> {}

function SortSelectMenu<CurationItem>(
  props: SortSelectMenuProps<CurationItem>
) {
  return (
    <SelectMenuBase
      OptionActionItem={() => null}
      MenuFooter={() => null}
      {...props}
    />
  )
}
