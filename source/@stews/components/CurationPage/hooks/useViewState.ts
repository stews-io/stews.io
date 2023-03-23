import { CurationView } from '@stews/data'
import { throwInvalidPathError } from '@stews/helpers'
import { useEffect, useMemo, useState } from 'preact/hooks'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { UseViewSortOptionsResult, ViewSortOption } from './useViewSortOptions'

export interface ViewState<CurationItem extends object> {
  curationView: CurationView
  viewSort: ViewSortOption<CurationItem>
  viewSearch: string
  pageIndex: number
}

export interface UseViewStateApi<CurationItem extends object>
  extends Pick<CurationPageBaseDataProps<CurationItem>, 'curationViews'>,
    Pick<UseViewSortOptionsResult<CurationItem>, 'viewSortOptions'> {}

export function useViewState<CurationItem extends object>(
  api: UseViewStateApi<CurationItem>
) {
  const { curationViews, viewSortOptions } = api
  const parsedInitialSearchParams = useMemo(() => {
    const initialSearchParams = new URLSearchParams(
      typeof window !== 'undefined' ? window.location.search : ''
    )
    return {
      viewId: parseInt(initialSearchParams.get('viewId') ?? '0'),
      sortId: initialSearchParams.get('sortId'),
      viewSearch: initialSearchParams.get('viewSearch') ?? '',
      pageIndex: parseInt(initialSearchParams.get('pageIndex') ?? '0'),
    }
  }, [])
  const useViewStateResult = useState<ViewState<CurationItem>>({
    curationView:
      curationViews.find(
        (someCurationView) =>
          someCurationView.viewId === parsedInitialSearchParams.viewId
      ) ?? curationViews[0],
    viewSort:
      viewSortOptions.find(
        (someViewSortOption) =>
          someViewSortOption.sortId === parsedInitialSearchParams.sortId
      ) ?? viewSortOptions[0],
    viewSearch: parsedInitialSearchParams.viewSearch,
    pageIndex: parsedInitialSearchParams.pageIndex,
  })
  const [viewState] = useViewStateResult
  useEffect(() => {
    const nextUrlSearchParams = new URLSearchParams()
    nextUrlSearchParams.set('viewId', `${viewState.curationView.viewId}`)
    nextUrlSearchParams.set('sortId', `${viewState.viewSort.sortId}`)
    nextUrlSearchParams.set('viewSearch', viewState.viewSearch)
    nextUrlSearchParams.set('pageIndex', `${viewState.pageIndex}`)
    window.history.replaceState(
      null,
      'noop',
      `?${nextUrlSearchParams.toString()}`
    )
  }, [viewState])
  return useViewStateResult
}
