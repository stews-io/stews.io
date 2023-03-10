import { SelectMenuBase } from '@stews/components/Select'
import { ComponentProps } from 'preact'
import {
  DeterminedViewSelectProps,
  ViewSelectBase,
  ViewSelectBaseProps,
} from './ViewSelectBase'

export interface ConsumerViewSelectProps extends DeterminedViewSelectProps {}

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
  extends ComponentProps<ViewSelectBaseProps<unknown, unknown>['SelectMenu']> {}

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
