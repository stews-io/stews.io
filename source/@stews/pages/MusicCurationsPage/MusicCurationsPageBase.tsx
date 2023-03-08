import { Page } from '@stews/components/Page'
import { throwInvalidPathError } from '@stews/helpers'
import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { DeterminedMusicViewSelectProps } from './components/MusicViewSelect/MusicViewSelectBase'
import { DeterminedProfileBoppersProps } from './components/ProfileBopper/ProfileBopperBase'
import { MusicCurator, MusicView } from './data'
import cssModule from './MusicCurationsPageBase.module.scss'

export interface MusicCurationsPageBaseProps<CustomMusicViewSelectProps> {
  musicCurator: MusicCurator
  musicViews: Array<MusicView>
  customMusicViewSelectProps: CustomMusicViewSelectProps
  MusicViewSelect: FunctionComponent<
    MusicViewSelectProps<CustomMusicViewSelectProps>
  >
  ProfileBopper: FunctionComponent<DeterminedProfileBoppersProps>
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
    musicViews[0] !== undefined
      ? musicViews[0]
      : throwInvalidPathError(
          'MusicCurationsPageBase.useState.selectedMusicView'
        )
  )
  return (
    <Page>
      <div className={cssModule.pageHeader}>
        <div className={cssModule.viewSelectContainer}>
          <MusicViewSelect
            optionList={musicViews}
            selectedOption={selectedMusicView}
            selectOption={(nextSelectedMusicView) => {
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
