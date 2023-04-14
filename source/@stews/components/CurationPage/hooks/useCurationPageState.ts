import { CurationItemBase } from '@stews/data/CurationItem'
import { AdjustedCurationView } from '@stews/data/CurationView'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useEffect, useMemo, useState } from 'preact/hooks'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { UseViewSortOptionsResult, ViewSortOption } from './useViewSortOptions'

export interface CurationPageState<CurationItem extends CurationItemBase> {
  curationKey: string
  curationView: AdjustedCurationView
  viewSortOption: ViewSortOption<CurationItem>
  viewSearchQuery: string
  viewPageIndex: number
}

export interface UseCurationPageStateApi<CurationItem extends CurationItemBase>
  extends Pick<CurationPageBaseDataProps<CurationItem>, 'curationViews'>,
    Pick<UseViewSortOptionsResult<CurationItem>, 'viewSortOptions'> {}

export function useCurationPageState<CurationItem extends CurationItemBase>(
  api: UseCurationPageStateApi<CurationItem>
) {
  const { curationViews, viewSortOptions } = api
  const initialUrlPageState = useMemo(() => {
    const [_, urlPathCurationKey, urlPathViewId] =
      window.location.pathname.split('/')
    const initialSearchParams = new URLSearchParams(window.location.search)
    return {
      curationKey:
        urlPathCurationKey ??
        throwInvalidPathError('useCurationPageState.urlPathCurationKey'),
      viewId: urlPathViewId,
      sortId: initialSearchParams.get('sort'),
      viewSearchQuery: initialSearchParams.get('search') ?? '',
      viewPageIndex: 0,
    }
  }, [])
  const useCurationPageStateResult = useState<CurationPageState<CurationItem>>({
    curationKey: initialUrlPageState.curationKey,
    curationView:
      curationViews.find(
        (someCurationView) =>
          someCurationView.viewId === initialUrlPageState.viewId
      ) ?? curationViews[0],
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
      `/${curationPageState.curationKey}/${
        curationPageState.curationView.viewId
      }?${nextUrlSearchParams.toString()}`
    )
  }, [curationPageState])
  return useCurationPageStateResult
}
