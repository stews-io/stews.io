import { CurationItemBase } from '@stews/data/CurationItem'
import { AdjustedSegmentView } from '@stews/data/CurationSegment'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useEffect, useMemo, useState } from 'preact/hooks'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { UseViewSortOptionsResult, ViewSortOption } from './useViewSortOptions'

export interface CurationPageState<CurationItem extends CurationItemBase> {
  curationView: AdjustedSegmentView
  viewSortOption: ViewSortOption<CurationItem>
  viewSearchQuery: string
  viewPageIndex: number
}

export interface UseCurationPageStateApi<CurationItem extends CurationItemBase>
  extends Pick<
      CurationPageBaseDataProps<CurationItem>,
      'activeCurationSegment'
    >,
    Pick<UseViewSortOptionsResult<CurationItem>, 'viewSortOptions'> {}

export function useCurationPageState<CurationItem extends CurationItemBase>(
  api: UseCurationPageStateApi<CurationItem>
) {
  const { activeCurationSegment, viewSortOptions } = api
  const initialUrlPageState = useMemo(() => {
    const [_, urlPathCurationKey, urlPathViewId] =
      window.location.pathname.split('/')
    const initialSearchParams = new URLSearchParams(window.location.search)
    return {
      viewId: urlPathViewId,
      sortId: initialSearchParams.get('sort'),
      viewSearchQuery: initialSearchParams.get('search') ?? '',
      viewPageIndex: 0,
    }
  }, [])
  const useCurationPageStateResult = useState<CurationPageState<CurationItem>>({
    curationView:
      activeCurationSegment.segmentViews.find(
        (someCurationView) =>
          someCurationView.viewId === initialUrlPageState.viewId
      ) ?? activeCurationSegment.segmentViews[0],
    viewSortOption:
      viewSortOptions.find(
        (someViewSortOption) =>
          someViewSortOption.sortId === initialUrlPageState.sortId
      ) ?? viewSortOptions[0],
    viewSearchQuery: initialUrlPageState.viewSearchQuery,
    viewPageIndex: initialUrlPageState.viewPageIndex,
  })
  const [curationPageState] = useCurationPageStateResult
  useEffect(() => {
    const nextUrlSearchParams = new URLSearchParams()
    nextUrlSearchParams.set(
      'sort',
      `${curationPageState.viewSortOption.sortId}`
    )
    if (curationPageState.viewSearchQuery.length > 0) {
      nextUrlSearchParams.set('search', curationPageState.viewSearchQuery)
    }
    window.history.replaceState(
      null,
      'noop',
      `/${activeCurationSegment.segmentKey}/${
        curationPageState.curationView.viewId
      }?${nextUrlSearchParams.toString()}`
    )
  }, [curationPageState])
  return useCurationPageStateResult
}
