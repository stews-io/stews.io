import { RouterPage } from './RouterPage'
import './StewsApp.scss'

export function StewsApp(props: any) {
  return (
    <RouterPage
      adjustedCuratorConfig={props.CLI_DATA.preRenderData.adjustedCuratorConfig}
    />
  )
}
