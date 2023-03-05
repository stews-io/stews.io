import { Page } from '@stews/components/Page'
import { useState } from 'preact/hooks'
import { CuratorMusicViewSelect } from './components/MusicViewSelect'
import { CuratorProfileBopper } from './components/ProfileBopper'
import { MusicView } from './data'
import cssModule from './MusicCurationsPage.module.scss'

export interface MusicCurationsPageProps {}

export function MusicCurationsPage(props: MusicCurationsPageProps) {
  const {} = props
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
  const [selectedMusicView, setSelectedMusicView] = useState<MusicView>(
    musicViews[0]!
  )
  return (
    <Page>
      <div className={cssModule.pageHeader}>
        <div className={cssModule.viewSelectContainer}>
          <CuratorMusicViewSelect
            musicViews={musicViews}
            selectedMusicView={selectedMusicView}
            selectMusicView={(nextSelectedMusicView) => {
              setSelectedMusicView(nextSelectedMusicView)
            }}
            navigateToEditMusicViewPage={() => {}}
            navigateToCreateMusicViewPage={() => {}}
          />
        </div>
        <div className={cssModule.actionContainer}>
          <CuratorProfileBopper
            musicCurator={{
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
          />
        </div>
      </div>
    </Page>
  )
}
