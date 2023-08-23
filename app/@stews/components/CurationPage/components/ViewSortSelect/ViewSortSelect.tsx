import { CustomAnchorButtonProps } from '@stews/components/Button'
import {
  SelectBase,
  SelectBaseConfigProps,
  SelectBaseDataProps,
  SelectMenuBase,
} from '@stews/components/Select'
import { CurationItem } from '@stews/data/CurationItem'
import { ComponentProps } from 'preact'
import cssModule from './ViewSortSelect.module.scss'
import { SegmentSortOption } from '@stews/data/CurationSegment'

export interface ViewSortSelectProps<SomeCurationItem extends CurationItem>
  extends SelectBaseDataProps<SegmentSortOption<SomeCurationItem>> {}

export function ViewSortSelect<SomeCurationItem extends CurationItem>(
  props: ViewSortSelectProps<SomeCurationItem>
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

interface ViewSortSelectMenuProps<SomeCurationItem extends CurationItem>
  extends ComponentProps<
    SelectBaseConfigProps<
      SegmentSortOption<SomeCurationItem>,
      'sortLabel',
      CustomAnchorButtonProps,
      Record<string, unknown>,
      Record<string, unknown>
    >['SelectMenu']
  > {}

function ViewSortSelectMenu<SomeCurationItem extends CurationItem>(
  props: ViewSortSelectMenuProps<SomeCurationItem>
) {
  return (
    <SelectMenuBase
      OptionActionItem={() => null}
      MenuFooter={() => null}
      {...props}
    />
  )
}
