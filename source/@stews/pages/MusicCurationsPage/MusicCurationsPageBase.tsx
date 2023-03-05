import { Page } from '@stews/components/Page'
import { useState } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { DeterminedMusicViewSelectProps } from './components/MusicViewSelect/MusicViewSelectBase'
import { DeterminedProfileBoppersProps } from './components/ProfileBopper/ProfileBopperBase'
import { MusicCurator, MusicView } from './data'
import cssModule from './MusicCurationsPageBase.module.scss'

export interface MusicCurationsPageBaseProps<CustomMusicViewSelectProps> {
  musicCurator: MusicCurator
  musicViews: Array<MusicView>
  customMusicViewSelectProps: CustomMusicViewSelectProps
  MusicViewSelect: (
    props: MusicViewSelectProps<CustomMusicViewSelectProps>
  ) => JSXInternal.Element
  ProfileBopper: (props: DeterminedProfileBoppersProps) => JSXInternal.Element
}

type MusicViewSelectProps<CustomMusicViewSelectProps> =
  DeterminedMusicViewSelectProps & CustomMusicViewSelectProps

export function MusicCurationsPageBase<CustomMusicViewSelectProps>(
  props: MusicCurationsPageBaseProps<CustomMusicViewSelectProps>
) {
  const {
    musicViews,
    MusicViewSelect,
    customMusicViewSelectProps,
    ProfileBopper,
    musicCurator,
  } = props
  const [selectedMusicView, setSelectedMusicView] = useState<MusicView>(
    musicViews[0]!
  )
  return (
    <Page>
      <div className={cssModule.pageHeader}>
        <div className={cssModule.viewSelectContainer}>
          <MusicViewSelect
            musicViews={musicViews}
            selectedMusicView={selectedMusicView}
            selectMusicView={(nextSelectedMusicView) => {
              setSelectedMusicView(nextSelectedMusicView)
            }}
            {...customMusicViewSelectProps}
          />
        </div>
        <div className={cssModule.actionContainer}>
          <ProfileBopper musicCurator={musicCurator} />
        </div>
      </div>
    </Page>
  )
}
