import { ConsumerViewSelect } from './components/ViewSelect'
import { ConsumerProfileBopper } from './components/ProfileBopper'
import {
  MusicCurationsPageBase,
  MusicCurationsPageBaseProps,
} from './MusicCurationsPageBase'

export interface ConsumerMusicCurationsPageProps
  extends Pick<
    MusicCurationsPageBaseProps<unknown>,
    'musicCurator' | 'musicViews'
  > {}

export function ConsumerMusicCurationsPage(
  props: ConsumerMusicCurationsPageProps
) {
  const { musicCurator, musicViews } = props
  return (
    <MusicCurationsPageBase
      ViewSelect={ConsumerViewSelect}
      ProfileBopper={ConsumerProfileBopper}
      musicCurator={musicCurator}
      musicViews={musicViews}
      customViewSelectProps={null}
    />
  )
}
