import { SelectMenuBase } from '@stews/components/Select'
import { ComponentProps } from 'preact'
import {
  ViewSelectBase,
  ViewSelectBaseConfigProps,
  ViewSelectBaseDataProps,
} from './ViewSelectBase'

export interface ConsumerViewSelectProps extends ViewSelectBaseDataProps {}

export function ConsumerViewSelect(props: ConsumerViewSelectProps) {
  return (
    <ViewSelectBase
      SelectMenu={ConsumerSelectMenu}
      customOptionActionItemProps={null}
      customMenuFooterProps={null}
      {...props}
    />
  )
}

interface ConsumerSelectMenuProps
  extends ComponentProps<
    ViewSelectBaseConfigProps<unknown, unknown>['SelectMenu']
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
