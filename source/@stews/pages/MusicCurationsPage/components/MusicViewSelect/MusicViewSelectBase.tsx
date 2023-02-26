import { Popover } from '@stews/components/Popover'
import { MusicView } from '@stews/pages/MusicCurationsPage/data'
import { useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { JSXInternal } from 'preact/src/jsx'
import { SelectButton } from './components/SelectButton'
import { SelectMenuProps } from './components/SelectMenuBase'

export interface MusicViewSelectProps {
  musicViews: Array<MusicView>
  selectedMusicView: MusicView
  selectMusicView: (nextSelectedMusicView: MusicView) => void
}

export interface MusicViewSelectBaseProps<
  CustomOptionActionProps,
  CustomMenuFooterProps
> extends MusicViewSelectProps {
  customOptionActionProps: CustomOptionActionProps
  customMenuFooterProps: CustomMenuFooterProps
  SelectMenu: (
    props: SelectMenuProps<CustomOptionActionProps, CustomMenuFooterProps>
  ) => JSXInternal.Element
}

export function MusicViewSelectBase<
  CustomOptionActionProps,
  CustomMenuFooterProps
>(
  props: MusicViewSelectBaseProps<
    CustomOptionActionProps,
    CustomMenuFooterProps
  >
) {
  const {
    selectedMusicView,
    SelectMenu,
    selectMusicView,
    musicViews,
    customOptionActionProps,
    customMenuFooterProps,
  } = props
  const anchorRef = useRef<HTMLDivElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <SelectButton
        selectedMusicView={selectedMusicView}
        anchorRef={anchorRef}
        setPopoverOpen={setPopoverOpen}
      />
      <Popover
        anchorRef={anchorRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
      >
        <SelectMenu
          selectedMusicView={selectedMusicView}
          selectMusicView={selectMusicView}
          musicViews={musicViews}
          anchorRef={anchorRef}
          popoverOpen={popoverOpen}
          setPopoverOpen={setPopoverOpen}
          customOptionActionProps={customOptionActionProps}
          customMenuFooterProps={customMenuFooterProps}
        />
      </Popover>
    </Fragment>
  )
}
