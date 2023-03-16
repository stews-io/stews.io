import {
  SelectBase,
  SelectBaseConfigProps,
  SelectBaseDataProps,
  SelectMenuBase,
} from '@stews/components/Select'
import { ComponentProps } from 'preact'
import { ViewSortOption } from '../../hooks'
import cssModule from './ViewSortSelect.module.scss'

export interface ViewSortSelectProps<CurationItem extends object>
  extends SelectBaseDataProps<ViewSortOption<CurationItem>> {}

export function ViewSortSelect<CurationItem extends object>(
  props: ViewSortSelectProps<CurationItem>
) {
  const { optionList, selectedOption, selectOption } = props
  return (
    <SelectBase
      anchorBorderClassName={cssModule.viewSortSelectAnchorBorder}
      fontSizeClassName={cssModule.viewSortSelectFontSize}
      SelectMenu={ViewSortSelectMenu}
      optionLabelKey={'sortLabel'}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customOptionActionItemProps={null}
      customMenuFooterProps={null}
    />
  )
}

interface ViewSortSelectMenuProps<CurationItem extends object>
  extends ComponentProps<
    SelectBaseConfigProps<
      ViewSortOption<CurationItem>,
      'sortLabel',
      null,
      null
    >['SelectMenu']
  > {}

function ViewSortSelectMenu<CurationItem extends object>(
  props: ViewSortSelectMenuProps<CurationItem>
) {
  return (
    <SelectMenuBase
      OptionActionItem={() => null}
      MenuFooter={() => null}
      {...props}
    />
  )
}
