import Router from 'preact-router'
import { MusicCurationPage } from './pages/MusicCurationPage'
import './StewsApp.scss'
import '@fontsource/red-hat-mono'
import '@fontsource/red-hat-mono/700'
import '@fontsource/red-hat-mono/700-italic'

export function StewsApp() {
  return (
    <Router>
      <MusicCurationPage path={'/music/:viewId'} />
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
