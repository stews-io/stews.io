import { throwInvalidPathError } from '@stews/helpers'
import * as Liqe from 'liqe'
import { useEffect, useMemo, useRef } from 'preact/hooks'
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
  const pageTopItemElementRef = useRef<HTMLDivElement>(null)
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
        <Fragment>
          <div ref={pageTopItemElementRef} />
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
  useEffect(() => {
    const pageContentContainerElement = document.getElementById(
      'pageContentContainer'
    )
    const pageTopItemElement = pageTopItemElementRef.current
    if (
      viewState.pageIndex === 0 &&
      pageContentContainerElement instanceof HTMLDivElement
    ) {
      window.scrollTo({
        behavior: 'auto',
        top: 0,
      })
      pageContentContainerElement.setAttribute('tabIndex', '-1')
      pageContentContainerElement.focus()
      pageContentContainerElement.removeAttribute('tabIndex')
    } else if (
      viewState.pageIndex > 0 &&
      pageTopItemElement instanceof HTMLDivElement
    ) {
      window.scrollTo({
        behavior: 'auto',
        top: 76,
      })
      pageTopItemElement.focus({
        preventScroll: true,
      })
    } else {
      throwInvalidPathError('useViewPage.useEffect[viewState.pageIndex]')
    }
  }, [viewState.pageIndex])
  return viewPageResult
}
