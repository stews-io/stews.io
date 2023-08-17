import { CurationSegmentPagePropsBase } from '@stews/StewsApp/components/AppRouter'
import { ConsumerCurationPage } from '@stews/components/CurationPage'
import { MusicItem } from '../data'
import { MusicItemDisplay } from './MusicItemDisplay'

export interface MusicCurationPageProps
  extends CurationSegmentPagePropsBase<MusicItem> {}

export function MusicCurationPage(props: MusicCurationPageProps) {
  const { curatorInfo, curationViews, fetchCurationItemsMapState } = props
  return (
    <ConsumerCurationPage<MusicItem>
      curationType={'music'}
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
      curationViews={curationViews}
      fetchCurationItemsMapState={fetchCurationItemsMapState}
    />
  )
}
