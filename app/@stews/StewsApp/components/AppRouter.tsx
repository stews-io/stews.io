import { CurationSegmentPage } from '@stews/components/CurationPage'
import { StewsAppProps } from '../StewsApp'
import { UseAppResourcesResult } from '../hooks/useAppResources'
import { useClientCuratorConfig } from '../hooks/useClientCuratorConfig'
import { useCurationSegmentState } from '../hooks/useCurationSegmentState'
import { useSegmentDatasetState } from '../hooks/useSegmentDatasetState'

export interface AppRouterProps
  extends Pick<
      StewsAppProps['CLI_DATA']['preRenderData'],
      'adjustedCuratorConfig'
    >,
    Pick<UseAppResourcesResult, 'appResourcesStatus'> {}

export function AppRouter(props: AppRouterProps) {
  const { appResourcesStatus, adjustedCuratorConfig } = props
  if (typeof window !== 'undefined' && appResourcesStatus === 'loaded') {
    const { clientCuratorConfig } = useClientCuratorConfig({
      adjustedCuratorConfig,
    })
    const { curationSegmentState, setCurationSegmentState } =
      useCurationSegmentState({
        clientCuratorConfig,
      })
    const { segmentDatasetState } = useSegmentDatasetState({
      curationSegmentState,
    })
    return (
      <CurationSegmentPage
        clientCuratorConfig={clientCuratorConfig}
        curationSegmentState={curationSegmentState}
        setCurationSegmentState={setCurationSegmentState}
        segmentDatasetState={segmentDatasetState}
      />
    )
  } else {
    return null
  }
}
