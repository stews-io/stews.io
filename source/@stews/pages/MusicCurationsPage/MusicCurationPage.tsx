import { Page } from '@stews/components/Page'
import { MusicViewSelect } from './components/MusicViewSelect'
import cssModule from './MusicCurationsPage.module.scss'

export interface MusicCurationsPageProps {}

export function MusicCurationsPage(props: MusicCurationsPageProps) {
  const {} = props
  return (
    <Page>
      <div className={cssModule.pageHeader}>
        <MusicViewSelect />
      </div>
      <div
        style={{
          height: 1028,
          backgroundColor: 'red',
        }}
      />
    </Page>
  )
}
