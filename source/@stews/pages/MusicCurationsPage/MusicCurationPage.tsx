import { Page } from '@stews/components/Page'
import { useState } from 'preact/hooks'
import { MusicViewSelect } from './components/MusicViewSelect'
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
      viewLabel: 'asldfkajsdlfkjasdflskajdflskjfslkdfjslkjf',
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
        <MusicViewSelect
          musicViews={musicViews}
          selectedMusicView={selectedMusicView}
          selectMusicView={(nextSelectedMusicView) => {
            setSelectedMusicView(nextSelectedMusicView)
          }}
        />
        <div style={{ flexGrow: 1 }} />
        <MusicViewSelect
          musicViews={musicViews}
          selectedMusicView={selectedMusicView}
          selectMusicView={(nextSelectedMusicView) => {
            setSelectedMusicView(nextSelectedMusicView)
          }}
        />
      </div>
    </Page>
  )
}
