import {
  ConsumerCurationPage,
  ConsumerCurationPageProps,
} from '@stews/components/CurationPage'
import { MusicItem } from '../data'
import { MusicItemDisplay } from './MusicItemDisplay'

export interface MusicCurationPageProps
  extends Pick<
    ConsumerCurationPageProps<MusicItem>,
    | 'curatorInfo'
    | 'curationSegments'
    | 'activeCurationSegment'
    | 'setActiveCurationSegment'
  > {}

export function MusicCurationPage(props: MusicCurationPageProps) {
  const {
    curatorInfo,
    curationSegments,
    activeCurationSegment,
    setActiveCurationSegment,
  } = props
  return (
    <ConsumerCurationPage<MusicItem>
      ItemDisplay={MusicItemDisplay}
      getItemSearchSpace={(someMusicItem) =>
        `${someMusicItem.musicTitle},${someMusicItem.musicArtist.join(
          ','
        )},${someMusicItem.musicTags.join(',')},${
          someMusicItem.musicYear
        },${`${someMusicItem.recordingContext.join('/')} ${
          someMusicItem.sourceType === 'collection'
            ? someMusicItem.collectionType
            : someMusicItem.sourceType
        }${someMusicItem.musicType === 'clip' ? ' clip' : ''}`}`
      }
      viewSortConfig={[
        {
          fieldKey: 'musicTitle',
          fieldType: 'string',
          sortLabelBase: 'title',
        },
        {
          fieldKey: 'musicArtist',
          fieldType: 'orderedStringSet',
          sortLabelBase: 'artist',
        },
        {
          fieldKey: 'musicYear',
          fieldType: 'number',
          sortLabelBase: 'year',
        },
      ]}
      curatorInfo={curatorInfo}
      curationSegments={curationSegments}
      activeCurationSegment={activeCurationSegment}
      setActiveCurationSegment={setActiveCurationSegment}
    />
  )
}
