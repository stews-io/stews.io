import { SelectMenuBase } from '@stews/components/Select'
import { ComponentProps } from 'preact'
import {
  DeterminedMusicViewSelectProps,
  MusicViewSelectBase,
  MusicViewSelectBaseProps,
} from './MusicViewSelectBase'

export interface ConsumerMusicViewSelectProps
  extends DeterminedMusicViewSelectProps {}

export function ConsumerMusicViewSelect(props: ConsumerMusicViewSelectProps) {
  return (
    <MusicViewSelectBase
      SelectMenu={ConsumerSelectMenu}
      customOptionActionItemProps={null}
      customMenuFooterProps={null}
      {...props}
    />
  )
}

interface ConsumerSelectMenuProps
  extends ComponentProps<
    MusicViewSelectBaseProps<unknown, unknown>['SelectMenu']
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
