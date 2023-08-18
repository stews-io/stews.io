import { ConsumerCurationPageProps } from '@stews/components/CurationPage'
import { CurationItemBase } from '@stews/data/CurationItem'
import { MusicCurationPage } from '@stews/domains/music/components/MusicCurationPage'
import { SpotCurationPage } from '@stews/domains/spot/components'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useAsyncData } from '@stews/hooks/useAsyncData'
import Router, { RoutableProps } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
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
  return (
    <Router>
      <DefaultPageRedirect
        default={true}
        defaultPagePath={`/${adjustedCuratorConfig.curationSegments[0].segmentKey}/0`}
      />
      {adjustedCuratorConfig.curationSegments.map((someCurationSegment) => {
        const segmentDataset =
          adjustedCuratorConfig.curationDatasets[
            someCurationSegment.segmentDataset
          ] ?? throwInvalidPathError('AppRouter.segmentDataset')
        return (
          <CurationSegmentRoutePage
            appResourcesStatus={appResourcesStatus}
            path={`/${someCurationSegment.segmentKey}/:viewId`}
            curatorInfo={adjustedCuratorConfig.curatorInfo}
            someCurationSegment={someCurationSegment}
            CurationSegmentPage={
              segmentDataset.datasetType === 'music'
                ? MusicCurationPage
                : segmentDataset.datasetType === 'spot'
                ? SpotCurationPage
                : throwInvalidPathError('AppRouter.CurationSegmentPage')
            }
          />
        )
      })}
    </Router>
  )
}

interface DefaultRedirectToMusicCurationPage
  extends Required<Pick<RoutableProps, 'default'>> {
  defaultPagePath: string
}

function DefaultPageRedirect(props: DefaultRedirectToMusicCurationPage) {
  const { defaultPagePath } = props
  if (typeof window !== 'undefined') {
    window.location.replace(defaultPagePath)
  }
  return null
}

interface CurationSegmentRoutePageProps<CurationItem extends CurationItemBase>
  extends Required<Pick<RoutableProps, 'path'>>,
    Pick<AppRouterProps, 'appResourcesStatus'>,
    Pick<AppRouterProps['adjustedCuratorConfig'], 'curatorInfo'> {
  someCurationSegment: AppRouterProps['adjustedCuratorConfig']['curationSegments'][number]
  CurationSegmentPage: (props: any) => JSXInternal.Element
}

export interface CurationSegmentPagePropsBase<
  CurationItem extends CurationItemBase
> extends Pick<
    ConsumerCurationPageProps<CurationItem>,
    'curatorInfo' | 'curationViews' | 'fetchCurationItemsMapState'
  > {}

function CurationSegmentRoutePage<CurationItem extends CurationItemBase>(
  props: CurationSegmentRoutePageProps<CurationItem>
) {
  const {
    appResourcesStatus,
    someCurationSegment,
    curatorInfo,
    CurationSegmentPage,
  } = props
  const [fetchCurationItemsMapState, triggerFetchCurationItemsMap] =
    useAsyncData({
      initialAsyncDataState: {
        stateType: 'loading',
      },
      fetchAsyncData: (): Promise<Record<string, CurationItem>> =>
        fetch(
          `/assets/curations/${someCurationSegment.segmentDataset}.json`
        ).then((serverResponse) => serverResponse.json()),
    })
  useEffect(() => {
    triggerFetchCurationItemsMap()
  }, [])
  return appResourcesStatus === 'loaded' ? (
    <CurationSegmentPage
      curatorInfo={curatorInfo}
      curationViews={someCurationSegment.segmentViews}
      fetchCurationItemsMapState={fetchCurationItemsMapState}
    />
  ) : null
}
