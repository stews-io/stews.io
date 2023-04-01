import {
  ConsumerCurationPage,
  // CuratorCurationPage,
} from '@stews/components/CurationPage'
import { MusicItemDisplay } from './components/MusicItemDisplay'
import { musicItems } from './musicItemsDataset'

export interface MusicCurationPageProps {}

export function MusicCurationPage(props: MusicCurationPageProps) {
  return (
    <ConsumerCurationPage
      curationLabel={'music'}
      ItemDisplay={MusicItemDisplay}
      getItemSearchSpace={(someMusicItem) =>
        `${someMusicItem.musicTitle},${someMusicItem.musicArtist.join(
          ','
        )},${someMusicItem.musicStyles.join(',')},${
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
      curatorInfo={{
        curatorName: 'clumsycomputer',
        curatorLocation: 'guadalajara, jalisco',
        curatorStatus: 'just trying to listen and groove',
        curatorLinks: [
          {
            linkType: 'website',
            linkHref: 'https://clumsycomputer.com',
          },
          {
            linkType: 'github',
            linkHref: 'https://github.com/clumsycomputer',
          },
          {
            linkType: 'twitter',
            linkHref: 'https://twitter.com/c1umsyc0mputer',
          },
        ],
      }}
      curationViews={[
        {
          viewId: 0,
          viewLabel: 'all',
          viewType: 'default',
        },
        {
          viewId: 1,
          viewLabel: '2010s',
          viewType: 'custom',
          customType: 'filter',
          viewFilter: 'musicYear:[2010 TO 2019]',
        },
        {
          viewId: 2,
          viewLabel: '2000s',
          viewType: 'custom',
          customType: 'filter',
          viewFilter: 'musicYear:[2000 TO 2009]',
        },
        {
          viewId: 3,
          viewLabel: '1990s',
          viewType: 'custom',
          customType: 'filter',
          viewFilter: 'musicYear:[1990 TO 1999]',
        },
        {
          viewId: 4,
          viewLabel: 'hip-hop',
          viewType: 'custom',
          customType: 'filter',
          viewFilter: 'musicStyles:hip-hop',
        },
        {
          viewId: 5,
          viewLabel: 'jazz',
          viewType: 'custom',
          customType: 'filter',
          viewFilter: 'musicStyles:jazz',
        },
        {
          viewId: 6,
          viewLabel: 'electronic',
          viewType: 'custom',
          customType: 'filter',
          viewFilter: 'musicStyles:electronic',
        },
        {
          viewId: 7,
          viewLabel: 'in the now',
          viewType: 'custom',
          customType: 'filter',
          viewFilter: 'recordingContext:live OR recordingContext:concert',
        },
      ]}
      curationItems={musicItems}
    />
  )
}
