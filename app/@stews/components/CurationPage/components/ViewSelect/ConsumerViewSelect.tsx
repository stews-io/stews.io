import { SelectMenuBase } from '@stews/components/Select'
import { CurationItemBase } from '@stews/data/CurationItem'
import { ComponentProps } from 'preact'
import { CurationPageBaseDataProps } from '../../CurationPageBase'
import {
  ViewSelectBase,
  ViewSelectBaseConfigProps,
  ViewSelectBaseDataProps,
} from './ViewSelectBase'

export interface ConsumerViewSelectProps
  extends ViewSelectBaseDataProps,
    Pick<CurationPageBaseDataProps<CurationItemBase>, 'curationType'> {}

export function ConsumerViewSelect(props: ConsumerViewSelectProps) {
  const { curationType, ...viewSelectBaseProps } = props
  return (
    <ViewSelectBase
      popoverAriaRole={'listbox'}
      anchorAriaLabel={`select ${curationType} view`}
      anchorAriaDescription={`${curationType} view`}
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
