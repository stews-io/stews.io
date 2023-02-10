import { Page } from '@stews/components/Page'
import { Div } from '@stews/components/Primitive'
import cssModule from './MusicCurationsPage.module.scss'

export interface MusicCurationsPageProps {}

export function MusicCurationsPage(props: MusicCurationsPageProps) {
  const {} = props
  return (
    <Page>
      <Div className={cssModule.pageHeader}></Div>
    </Page>
  )
}
