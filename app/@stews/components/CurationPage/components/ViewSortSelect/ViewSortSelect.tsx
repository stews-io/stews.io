import { CustomAnchorButtonProps } from '@stews/components/Button'
import {
  SelectBase,
  SelectBaseConfigProps,
  SelectBaseDataProps,
  SelectMenuBase,
} from '@stews/components/Select'
import { CurationItemBase } from '@stews/data/CurationItem'
import { ComponentProps } from 'preact'
import { ViewSortOption } from '../../hooks'
import cssModule from './ViewSortSelect.module.scss'

export interface ViewSortSelectProps<CurationItem extends CurationItemBase>
  extends SelectBaseDataProps<ViewSortOption<CurationItem>> {}

export function ViewSortSelect<CurationItem extends CurationItemBase>(
  props: ViewSortSelectProps<CurationItem>
) {
  const { optionList, selectedOption, selectOption } = props
  return (
    <SelectBase
      popoverAriaRole={'listbox'}
      anchorAriaLabel={'select view sort order'}
      anchorAriaDescription={`a button that displays a popover with the view sort order options`}
      optionTypeLabel={'view sort order'}
      optionLabelKey={'sortLabel'}
      SelectMenu={ViewSortSelectMenu}
      anchorBorderClassName={cssModule.viewSortSelectAnchorBorder}
      fontSizeClassName={cssModule.viewSortSelectFontSize}
      selectIconClassName={cssModule.viewSortSelectIcon}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customOptionActionItemProps={{}}
      customMenuFooterProps={{}}
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
    />
  )
}

interface ViewSortSelectMenuProps<CurationItem extends CurationItemBase>
  extends ComponentProps<
    SelectBaseConfigProps<
      ViewSortOption<CurationItem>,
      'sortLabel',
      CustomAnchorButtonProps,
      Record<string, unknown>,
      Record<string, unknown>
    >['SelectMenu']
  > {}

function ViewSortSelectMenu<CurationItem extends CurationItemBase>(
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
