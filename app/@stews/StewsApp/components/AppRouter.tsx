import { MusicCurationPage } from '@stews/domains/music/components'
import { SpotCurationPage } from '@stews/domains/spot/components'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useState } from 'preact/hooks'
import { StewsAppProps } from '../StewsApp'
import { UseAppResourcesResult } from '../hooks/useAppResources'

export interface AppRouterProps
  extends Pick<
      StewsAppProps['CLI_DATA']['preRenderData'],
      'adjustedCuratorConfig'
    >,
    Pick<UseAppResourcesResult, 'appResourcesStatus'> {}

export function AppRouter(props: AppRouterProps) {
  const { appResourcesStatus, adjustedCuratorConfig } = props
  if (typeof window !== 'undefined') {
    const [activeCurationSegment, setActiveCurationSegment] = useState(
      adjustedCuratorConfig.curationSegments.find((someCurationSegment) => {
        return (
          someCurationSegment.segmentKey ===
          window.location.pathname.split('/')[1]
        )
      }) ?? adjustedCuratorConfig.curationSegments[0]
    )
    const activeSegmentDataset =
      adjustedCuratorConfig.curationDatasets[
        activeCurationSegment.segmentDataset
      ] ?? throwInvalidPathError('AppRouter.segmentDataset')
    return appResourcesStatus === 'loaded' ? (
      activeSegmentDataset.datasetType === 'music' ? (
        <MusicCurationPage
          curatorInfo={adjustedCuratorConfig.curatorInfo}
          curationSegments={adjustedCuratorConfig.curationSegments}
          activeCurationSegment={activeCurationSegment}
          setActiveCurationSegment={setActiveCurationSegment}
        />
      ) : activeSegmentDataset.datasetType === 'spot' ? (
        <SpotCurationPage
          curatorInfo={adjustedCuratorConfig.curatorInfo}
          curationSegments={adjustedCuratorConfig.curationSegments}
          activeCurationSegment={activeCurationSegment}
          setActiveCurationSegment={setActiveCurationSegment}
        />
      ) : (
        throwInvalidPathError('AppRouter.*CurationPage')
      )
    ) : null
  }
  return null
}
