import { CurationItem } from '@stews/data/CurationItem'
import {
  AdjustedSegmentView,
  ClientCurationSegment,
  SegmentSortOption,
} from '@stews/data/CurationSegment'
import { useEffect, useMemo, useState } from 'preact/hooks'
import { useClientCuratorConfig } from './useClientCuratorConfig'

export interface CurationSegmentState<SomeCurationItem extends CurationItem> {
  curationSegment: ClientCurationSegment<SomeCurationItem>
  segmentView: AdjustedSegmentView
  segmentSortOption: SegmentSortOption<SomeCurationItem>
  viewSearchQuery: string
  viewPageIndex: number
}

export interface UseCurationSegmentState<SomeCurationItem extends CurationItem>
  extends Pick<
    ReturnType<typeof useClientCuratorConfig>,
    'clientCuratorConfig'
  > {}

export function useCurationSegmentState<SomeCurationItem extends CurationItem>(
  api: UseCurationSegmentState<SomeCurationItem>
) {
  const { clientCuratorConfig } = api
  const initialUrlPageState = useMemo(() => {
    const [_, urlCurationSegmentId, urlSegmentViewId] =
      window.location.pathname.split('/')
    const initialSearchParams = new URLSearchParams(window.location.search)
    return {
      curationSegmentId: urlCurationSegmentId,
      segmentViewId: urlSegmentViewId,
      segmentSortId: initialSearchParams.get('sort'),
      viewSearchQuery: initialSearchParams.get('search') ?? '',
      viewPageIndex: 0,
    }
  }, [])
  const activeCurationSegment =
    clientCuratorConfig.curationSegments.find(
      (someCurationSegment) =>
        someCurationSegment.segmentId === initialUrlPageState.curationSegmentId
    ) ?? clientCuratorConfig.curationSegments[0]
  const useCurationSegmentStateResult = useState<
    CurationSegmentState<CurationItem>
  >({
    curationSegment: activeCurationSegment,
    segmentView:
      activeCurationSegment.segmentViews.find(
        (someCurationView) =>
          someCurationView.viewId === initialUrlPageState.segmentViewId
      ) ?? activeCurationSegment.segmentViews[0],
    segmentSortOption:
      activeCurationSegment.segmentSortOptions.find(
        (someViewSortOption) =>
          someViewSortOption.sortId === initialUrlPageState.segmentSortId
      ) ?? activeCurationSegment.segmentSortOptions[0],
    viewSearchQuery: initialUrlPageState.viewSearchQuery,
    viewPageIndex: initialUrlPageState.viewPageIndex,
  })
  const [curationSegmentState] = useCurationSegmentStateResult
  useEffect(() => {
    const nextUrlSearchParams = new URLSearchParams()
    nextUrlSearchParams.set(
      'sort',
      `${curationSegmentState.segmentSortOption.sortId}`
    )
    if (curationSegmentState.viewSearchQuery.length > 0) {
      nextUrlSearchParams.set('search', curationSegmentState.viewSearchQuery)
    }
    window.history.replaceState(
      null,
      'noop',
      `/${curationSegmentState.curationSegment.segmentId}/${
        curationSegmentState.segmentView.viewId
      }?${nextUrlSearchParams.toString()}`
    )
  }, [curationSegmentState])
  return useCurationSegmentStateResult
}
