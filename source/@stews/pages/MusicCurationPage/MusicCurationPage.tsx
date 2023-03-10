import {
  ConsumerCurationPage,
  CuratorCurationPage,
} from '@stews/components/CurationPage'
import { CurationView, CuratorInfo } from '@stews/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'

export interface MusicCurationPageProps {}

export function MusicCurationPage(props: MusicCurationPageProps) {
  const {} = props
  const curatorInfo: CuratorInfo = {
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
  }
  const musicViews: ArrayOfAtLeastOne<CurationView> = [
    {
      viewId: 0,
      viewLabel: 'all',
      viewType: 'default',
    },
    {
      viewId: 1,
      viewLabel: 'summer drive',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: '',
    },
    {
      viewId: 2,
      viewLabel: 'sweet',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: '',
    },
    {
      viewId: 3,
      viewLabel: 'super dooper long view name',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: '',
    },
    {
      viewId: 4,
      viewLabel: 'what what chicken butt',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: '',
    },
    {
      viewId: 5,
      viewLabel: 'hey oh!',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: '',
    },
    {
      viewId: 6,
      viewLabel: '🎺🥁🎟',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: '',
    },
  ]
  return (
    <CuratorCurationPage
      curatorInfo={curatorInfo}
      curationViews={musicViews}
      curationSortConfig={[
        {
          fieldKey: 'musicTitle',
          fieldType: 'string',
          sortLabelBase: 'title',
        },
        {
          fieldKey: 'musicArtist',
          fieldType: 'string',
          sortLabelBase: 'artist',
        },
        {
          fieldKey: 'musicYear',
          fieldType: 'number',
          sortLabelBase: 'year',
        },
      ]}
      curationItems={[]}
    />
  )
  // return (
  //   <ConsumerCurationPage
  //     curatorInfo={curatorInfo}
  //     curationViews={musicViews}
  //   />
  // )
}
