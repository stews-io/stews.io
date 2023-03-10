import {
  SelectBase,
  SelectBaseProps,
  SelectMenuBase,
} from '@stews/components/Select'
import { ComponentProps } from 'preact'
import cssModule from './SortSelect.module.scss'

export interface SortSelectProps
  extends Pick<
    SortSelectPropsConfig,
    'optionList' | 'selectedOption' | 'selectOption'
  > {}

type SortSelectPropsConfig = SelectBaseProps<
  { sortLabel: string },
  'sortLabel',
  null,
  null
>

export function SortSelect(props: SortSelectProps) {
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

interface SortSelectMenuProps
  extends ComponentProps<SortSelectPropsConfig['SelectMenu']> {}

function SortSelectMenu(props: SortSelectMenuProps) {
  return (
    <SelectMenuBase
      OptionActionItem={() => null}
      MenuFooter={() => null}
      {...props}
    />
  )
}
