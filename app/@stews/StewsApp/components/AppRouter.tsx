import { CurationSegmentPage } from '@stews/components/CurationPage'
import { StewsAppProps } from '../StewsApp'
import { UseAppResourcesResult } from '../hooks/useAppResources'
import { useClientCuratorConfig } from '../hooks/useClientCuratorConfig'
import { useCurationSegmentState } from '../hooks/useCurationSegmentState'

export interface AppRouterProps
  extends Pick<
      StewsAppProps['CLI_DATA']['preRenderData'],
      'adjustedCuratorConfig'
    >,
    Pick<UseAppResourcesResult, 'appResourcesStatus'> {}

export function AppRouter(props: AppRouterProps) {
  const { appResourcesStatus, adjustedCuratorConfig } = props
  if (typeof window !== 'undefined') {
    const { clientCuratorConfig } = useClientCuratorConfig({
      adjustedCuratorConfig,
    })
    const [curationSegmentState, setCurationSegmentState] =
      useCurationSegmentState({
        clientCuratorConfig,
      })
    return appResourcesStatus === 'loaded' ? (
      <CurationSegmentPage
        clientCuratorConfig={clientCuratorConfig}
        curationSegmentState={curationSegmentState}
        setCurationSegmentState={setCurationSegmentState}
      />
    ) : null
  }
  return null
}
