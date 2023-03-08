import { CuratorViewSelect } from './components/ViewSelect'
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
      ViewSelect={CuratorViewSelect}
      ProfileBopper={CuratorProfileBopper}
      musicCurator={musicCurator}
      musicViews={musicViews}
      customViewSelectProps={{
        navigateToEditViewPage: () => {},
        navigateToCreateViewPage: () => {},
      }}
    />
  )
}
