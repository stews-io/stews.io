import { CuratorMusicViewSelect } from './components/MusicViewSelect'
import { CuratorProfileBopper } from './components/ProfileBopper'
import {
  MusicCurationsPageBase,
  MusicCurationsPageBaseProps,
} from './MusicCurationsPageBase'

export interface CuratorMusicCurationsPageProps
  extends Pick<
    MusicCurationsPageBaseProps<unknown>,
    'musicCurator' | 'musicViews'
  > {}

export function CuratorMusicCurationsPage(
  props: CuratorMusicCurationsPageProps
) {
  const { musicCurator, musicViews } = props
  return (
    <MusicCurationsPageBase
      MusicViewSelect={CuratorMusicViewSelect}
      ProfileBopper={CuratorProfileBopper}
      musicCurator={musicCurator}
      musicViews={musicViews}
      customMusicViewSelectProps={{
        navigateToEditMusicViewPage: () => {},
        navigateToCreateMusicViewPage: () => {},
      }}
    />
  )
}
