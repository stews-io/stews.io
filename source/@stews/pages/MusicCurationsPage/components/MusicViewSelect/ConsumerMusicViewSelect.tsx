import { SelectMenuBase, SelectMenuProps } from './components/SelectMenuBase'
import {
  MusicViewSelectBase,
  MusicViewSelectProps,
} from './MusicViewSelectBase'

export interface ConsumerMusicViewSelectProps extends MusicViewSelectProps {}

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

interface ConsumerSelectMenuProps extends SelectMenuProps<null, null> {}

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
