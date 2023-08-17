import { AdjustedCuratorConfig } from '@stews/data/CuratorConfig'
import { Fragment } from 'preact/jsx-runtime'
import { AppRouter } from './components/AppRouter'
import { SplashPage } from './components/SplashPage'
import { useAppResources } from './hooks/useAppResources'
import './StewsApp.scss'

export interface StewsAppProps {
  CLI_DATA: {
    preRenderData: {
      adjustedCuratorConfig: AdjustedCuratorConfig
    }
  }
}

export function StewsApp(props: StewsAppProps) {
  const { appResourcesStatus } = useAppResources()
  return (
    <Fragment>
      <SplashPage appResourcesStatus={appResourcesStatus} />
      <AppRouter
        appResourcesStatus={appResourcesStatus}
        adjustedCuratorConfig={
          props.CLI_DATA.preRenderData.adjustedCuratorConfig
        }
      />
    </Fragment>
  )
}
