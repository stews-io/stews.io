import { SelectMenuBase } from '@stews/components/Select'
import { CurationItem } from '@stews/data/CurationItem'
import { ComponentProps } from 'preact'
import { CurationPageBaseDataProps } from '../../CurationPageBase'
import {
  ViewSelectBase,
  ViewSelectBaseConfigProps,
  ViewSelectBaseDataProps,
} from './ViewSelectBase'

export interface ConsumerViewSelectProps
  extends ViewSelectBaseDataProps,
    Pick<CurationPageBaseDataProps<CurationItem>, 'activeCurationSegment'> {}

export function ConsumerViewSelect(props: ConsumerViewSelectProps) {
  const { activeCurationSegment, ...viewSelectBaseProps } = props
  return (
    <ViewSelectBase
      popoverAriaRole={'listbox'}
      anchorAriaLabel={`select ${activeCurationSegment.segmentLabel} view`}
      anchorAriaDescription={`${activeCurationSegment.segmentLabel} view`}
      SelectMenu={ConsumerSelectMenu}
      customOptionActionItemProps={{}}
      customMenuFooterProps={{}}
      {...viewSelectBaseProps}
    />
  )
}

interface ConsumerSelectMenuProps
  extends ComponentProps<
    ViewSelectBaseConfigProps<
      Record<string, unknown>,
      Record<string, unknown>
    >['SelectMenu']
  > {}

function ConsumerSelectMenu(props: ConsumerSelectMenuProps) {
  return (
    <SelectMenuBase
      OptionActionItem={EmptyOptionActionItem}
      MenuFooter={EmptyMenuFooter}
      {...props}
    />
  )
}

function EmptyOptionActionItem() {
  return null
}

function EmptyMenuFooter() {
  return null
}
