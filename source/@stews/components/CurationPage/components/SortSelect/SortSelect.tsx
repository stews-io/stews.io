import {
  SelectBase,
  SelectBaseConfigProps,
  SelectBaseDataProps,
  SelectMenuBase,
} from '@stews/components/Select'
import { ComponentProps } from 'preact'
import { ViewSortOrderSelectOption } from '../../data'
import cssModule from './SortSelect.module.scss'

export interface SortSelectProps<CurationItem extends object>
  extends SelectBaseDataProps<
    ViewSortOrderSelectOption<CurationItem>,
    'sortLabel'
  > {}

export function SortSelect<CurationItem extends object>(
  props: SortSelectProps<CurationItem>
) {
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

interface SortSelectMenuProps<CurationItem extends object>
  extends ComponentProps<
    SelectBaseConfigProps<
      ViewSortOrderSelectOption<CurationItem>,
      'sortLabel',
      null,
      null
    >['SelectMenu']
  > {}

function SortSelectMenu<CurationItem extends object>(
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
