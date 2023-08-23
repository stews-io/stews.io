import { SelectMenuBase } from '@stews/components/Select'
import { ComponentProps } from 'preact'
import { CurationSegmentPageProps } from '../../CurationSegmentPage'
import {
  ViewSelectBase,
  ViewSelectBaseConfigProps,
  ViewSelectBaseDataProps,
} from './ViewSelectBase'

export interface ConsumerViewSelectProps
  extends ViewSelectBaseDataProps,
    Pick<CurationSegmentPageProps, 'curationSegmentState'> {}

export function ConsumerViewSelect(props: ConsumerViewSelectProps) {
  const { curationSegmentState, ...viewSelectBaseProps } = props
  return (
    <ViewSelectBase
      popoverAriaRole={'listbox'}
      anchorAriaLabel={`select ${curationSegmentState.curationSegment.segmentLabel} view`}
      anchorAriaDescription={`${curationSegmentState.curationSegment} view`}
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
