import { throwInvalidPathError } from '@stews/helpers'
import * as Liqe from 'liqe'
import { useLayoutEffect, useMemo, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { EmptyViewPageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'
import { CurationPageBaseDataProps, ViewState } from '../CurationPageBase'

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
  const pageTopElementRef = useRef<HTMLDivElement>(null)
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
      viewPageItemElements: (
        <Fragment key={Math.random()}>
          <div ref={pageTopElementRef} />
          {viewPageItems.length > 0 ? (
            viewPageItems.map((someItem, pageItemIndex) => (
              <ItemDisplay key={pageItemIndex} someItem={someItem} />
            ))
          ) : (
            <EmptyViewPageItem />
          )}
        </Fragment>
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
  useLayoutEffect(() => {
    const pageContentContainerElement = document.getElementById(
      'pageContentContainer'
    )
    const pageTopElement = pageTopElementRef.current
    if (
      viewState.pageIndex === 0 &&
      pageContentContainerElement instanceof HTMLDivElement
    ) {
      pageContentContainerElement.setAttribute('tabIndex', '-1')
      pageContentContainerElement.focus({
        preventScroll: true,
      })
      pageContentContainerElement.removeAttribute('tabIndex')
      window.scrollTo({
        behavior: 'auto',
        top: 0,
      })
    } else if (
      viewState.pageIndex > 0 &&
      pageTopElement instanceof HTMLDivElement
    ) {
      pageTopElement.setAttribute('tabIndex', '-1')
      pageTopElement.focus({
        preventScroll: true,
      })
      pageTopElement.removeAttribute('tabIndex')
      window.scrollTo({
        behavior: 'auto',
        top: 78,
      })
    } else {
      throwInvalidPathError('useViewPage.useEffect[viewState.pageIndex]')
    }
  }, [viewState.pageIndex, viewState.curationView])
  return viewPageResult
}
