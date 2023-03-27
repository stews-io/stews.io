import { SelectMenuBase } from '@stews/components/Select'
import { ComponentProps } from 'preact'
import { CurationPageBaseDataProps } from '../../CurationPageBase'
import {
  ViewSelectBase,
  ViewSelectBaseConfigProps,
  ViewSelectBaseDataProps,
} from './ViewSelectBase'

export interface ConsumerViewSelectProps
  extends ViewSelectBaseDataProps,
    Pick<CurationPageBaseDataProps<object>, 'curationLabel'> {}

export function ConsumerViewSelect(props: ConsumerViewSelectProps) {
  const { curationLabel, ...viewSelectBaseProps } = props
  return (
    <ViewSelectBase
      popoverAriaRole={'listbox'}
      anchorAriaLabel={`show ${curationLabel} view options`}
      anchorAriaDescription={`a button that shows a popover displaying a list of options for selecting a ${curationLabel} view`}
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
