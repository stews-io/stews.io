import { CurationPageBaseDataProps, ViewState } from '../CurationPageBase'
import * as Liqe from 'liqe'
import { useEffect, useMemo } from 'preact/hooks'
import { EmptyViewPageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'

export interface UseViewPageApi<CurationItem extends object>
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'ItemDisplay' | 'getItemSearchSpace' | 'curationItems'
  > {
  viewState: ViewState<CurationItem>
  pageItemSize: number
  setPageIndexToPrevious: () => void
  setPageIndexToNext: () => void
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
    setPageIndexToPrevious,
    setPageIndexToNext,
  } = api
  const viewPageResult = useMemo(() => {
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
    const pageIndexStart = pageItemSize * pageIndex
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
      viewPageNavigationElement: (
        <ViewPageNavigation
          setPageIndexToPrevious={setPageIndexToPrevious}
          setPageIndexToNext={setPageIndexToNext}
          pageIndex={pageIndex}
          pageCount={pageCount}
        />
      ),
    }
  }, [
    viewState,
    curationItems,
    getItemSearchSpace,
    pageItemSize,
    ItemDisplay,
    setPageIndexToPrevious,
    setPageIndexToNext,
  ])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
    document.body.focus()
  }, [viewPageResult.viewPageItemElements])
  return viewPageResult
}
