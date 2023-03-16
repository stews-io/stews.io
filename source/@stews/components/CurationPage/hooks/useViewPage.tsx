import { CurationPageBaseDataProps, ViewState } from '../CurationPageBase'
import * as Liqe from 'liqe'
import { useMemo } from 'preact/hooks'
import { EmptyViewPageItem } from '../components'

export interface UseViewPageApi<CurationItem extends object>
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'ItemDisplay' | 'getItemSearchSpace' | 'curationItems'
  > {
  viewState: ViewState<CurationItem>
  pageItemSize: number
}

export function useViewPage<CurationItem extends object>(
  api: UseViewPageApi<CurationItem>
) {
  const {
    viewState,
    curationItems,
    getItemSearchSpace,
    pageItemSize,
    ItemDisplay,
  } = api
  return useMemo(() => {
    const { curationView, viewSearch, viewSort, pageIndex } = viewState
    const viewItems =
      curationView.viewType === 'default'
        ? curationItems
        : Liqe.filter(Liqe.parse(curationView.viewFilter), curationItems)
    const searchedAndSortedViewItems = viewItems
      .filter((someViewItem) =>
        getItemSearchSpace(someViewItem)
          .toLowerCase()
          .includes(viewSearch.toLowerCase())
      )
      .sort(viewSort.getSortOrder)
    const pageCount =
      Math.ceil(searchedAndSortedViewItems.length / pageItemSize) || 1
    const _pageIndex = pageIndex > 0 && pageIndex <= pageCount ? pageIndex : 1
    const pageIndexStart = pageItemSize * (_pageIndex - 1)
    const viewPageItems = searchedAndSortedViewItems.slice(
      pageIndexStart,
      pageIndexStart + pageItemSize
    )
    return {
      viewPageItemElements:
        viewPageItems.length > 0 ? (
          viewPageItems.map((someItem, pageItemIndex) => (
            <ItemDisplay key={pageItemIndex} someItem={someItem} />
          ))
        ) : (
          <EmptyViewPageItem />
        ),
      viewPageNavigationElement: null,
    }
  }, [viewState, curationItems, getItemSearchSpace, pageItemSize, ItemDisplay])
}
