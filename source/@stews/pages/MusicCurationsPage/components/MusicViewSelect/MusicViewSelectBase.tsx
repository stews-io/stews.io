import { Bopper } from '@stews/components/Bopper'
import { MusicView } from '@stews/pages/MusicCurationsPage/data'
import { JSXInternal } from 'preact/src/jsx'
import { SelectButton } from './components/SelectButton'
import { SelectMenuProps } from './components/SelectMenuBase'

export interface MusicViewSelectProps {
  musicViews: Array<MusicView>
  selectedMusicView: MusicView
  selectMusicView: (nextSelectedMusicView: MusicView) => void
}

export interface MusicViewSelectBaseProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends MusicViewSelectProps {
  customOptionActionItemProps: CustomOptionActionItemProps
  customMenuFooterProps: CustomMenuFooterProps
  SelectMenu: (
    props: SelectMenuProps<CustomOptionActionItemProps, CustomMenuFooterProps>
  ) => JSXInternal.Element
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
