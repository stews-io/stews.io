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
      customOptionActionProps={null}
      customMenuFooterProps={null}
      {...props}
    />
  )
}

interface ConsumerSelectMenuProps extends SelectMenuProps<null, null> {}

function ConsumerSelectMenu(props: ConsumerSelectMenuProps) {
  return (
    <SelectMenuBase
      OptionAction={EmptyOptionAction}
      MenuFooter={EmptyMenuFooter}
      {...props}
    />
  )
}

function EmptyOptionAction() {
  return null
}

function EmptyMenuFooter() {
  return null
}
