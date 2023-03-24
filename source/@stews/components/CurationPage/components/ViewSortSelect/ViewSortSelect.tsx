import { CustomAnchorButtonBaseProps } from '@stews/components/Bopper'
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
      popoverRole={'listbox'}
      optionLabelKey={'sortLabel'}
      SelectMenu={ViewSortSelectMenu}
      anchorBorderClassName={cssModule.viewSortSelectAnchorBorder}
      fontSizeClassName={cssModule.viewSortSelectFontSize}
      selectIconClassName={cssModule.viewSortSelectIcon}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customSelectAnchorButtonProps={{
        onFocus: (someFocusEvent) => {
          const approximateViewSortSelectDocumentTop = 59
          if (
            !someFocusEvent.currentTarget.hasAttribute('data-pointer-focus') &&
            someFocusEvent.currentTarget.getBoundingClientRect().top <
              approximateViewSortSelectDocumentTop
          ) {
            window.scrollTo({
              behavior: 'smooth',
              top: 0,
            })
          }
        },
      }}
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
      CustomAnchorButtonBaseProps,
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
