import { MusicCurationPage } from './pages/MusicCurationPage'
import { RouterPage } from './RouterPage'
import './StewsApp.scss'

export function StewsApp() {
  return (
    <RouterPage
      defaultPagePath={'music/0'}
      pageMap={{
        '/music/:viewId': MusicCurationPage,
      }}
    />
  )
}
