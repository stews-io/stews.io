import { Bopper } from '@stews/components/Bopper'
import { MusicView } from '@stews/pages/MusicCurationsPage/data'
import { FunctionComponent } from 'preact'
import { MusicCurationsPageBaseProps } from '../../MusicCurationsPageBase'
import { SelectButton } from './components/SelectButton'
import { SelectMenuProps } from './components/SelectMenuBase'

export interface MusicViewSelectBaseProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends DeterminedMusicViewSelectProps {
  customOptionActionItemProps: CustomOptionActionItemProps
  customMenuFooterProps: CustomMenuFooterProps
  SelectMenu: FunctionComponent<
    SelectMenuProps<CustomOptionActionItemProps, CustomMenuFooterProps>
  >
}

export interface DeterminedMusicViewSelectProps
  extends Pick<MusicCurationsPageBaseProps<unknown>, 'musicViews'> {
  selectedMusicView: MusicView
  selectMusicView: (nextSelectedMusicView: MusicView) => void
}

export function MusicViewSelectBase<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
>(
  props: MusicViewSelectBaseProps<
    CustomOptionActionItemProps,
    CustomMenuFooterProps
  >
) {
  const {
    selectedMusicView,
    SelectMenu,
    selectMusicView,
    musicViews,
    customOptionActionItemProps,
    customMenuFooterProps,
  } = props
  return (
    <Bopper
      AnchorButton={SelectButton}
      PopoverContent={SelectMenu}
      customAnchorButtonProps={{
        selectedMusicView,
      }}
      customPopoverContentProps={{
        selectedMusicView,
        selectMusicView,
        musicViews,
        customOptionActionItemProps,
        customMenuFooterProps,
      }}
    />
  )
}
