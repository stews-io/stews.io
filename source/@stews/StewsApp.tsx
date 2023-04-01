import Router from 'preact-router'
import { RoutePage } from './components/RoutePage'
import { MusicCurationPage } from './pages/MusicCurationPage'
import './StewsApp.scss'

export function StewsApp() {
  return (
    <Router>
      <RoutePage path={'/music/:viewId'} TargetPage={MusicCurationPage} />
      <DefaultRedirectToMusicCurationPage default={true} />
    </Router>
  )
}

interface DefaultRedirectToMusicCurationPage {
  default: true
}

function DefaultRedirectToMusicCurationPage(
  props: DefaultRedirectToMusicCurationPage
) {
  if (typeof window !== 'undefined') {
    window.location.replace('/music/0')
  }
  return null
}
