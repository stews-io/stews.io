import { ConsumerMusicCurationsPage } from './ConsumerMusicCurationsPage'
import { CuratorMusicCurationsPage } from './CuratorMusicCurationsPage'
import { MusicCurator, MusicView } from './data'

export interface MusicCurationsPageProps {}

export function MusicCurationsPage(props: MusicCurationsPageProps) {
  const {} = props
  const musicCurator: MusicCurator = {
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
  const musicViews: Array<MusicView> = [
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
  // return (
  //   <CuratorMusicCurationsPage
  //     musicCurator={musicCurator}
  //     musicViews={musicViews}
  //   />
  // )
  return (
    <ConsumerMusicCurationsPage
      musicCurator={musicCurator}
      musicViews={musicViews}
    />
  )
}
