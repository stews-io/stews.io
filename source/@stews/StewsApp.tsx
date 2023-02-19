import '@fontsource/red-hat-mono'
import '@fontsource/red-hat-mono/700'
import '@fontsource/red-hat-mono/700-italic'
import Router from 'preact-router'
import { FocusExampleA } from './focus/examples/FocusExampleA'
import './StewsApp.scss'

export function StewsApp() {
  return (
    <Router>
      <FocusExampleA path={'/focus/a'} />
    </Router>
  )
}
