import { throwInvalidPathError } from '@stews/helpers'
import * as Liqe from 'liqe'
import { useLayoutEffect, useMemo, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { EmptyViewPageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { ViewState } from './useViewState'

export interface UseViewPageApi<CurationItem extends object>
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'ItemDisplay' | 'getItemSearchSpace' | 'curationItems'
  > {
  viewState: ViewState<CurationItem>
  pageItemSize: number
  setPageIndexToPrevious: PageIndexSetter
  setPageIndexToNext: PageIndexSetter
}

type PageIndexSetter = (currentAdjustedPageIndex: number) => void

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
  const { adjustedPageIndex, ...viewPageResult } = useMemo(() => {
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
    const adjustedPageIndex =
      pageIndex >= 0 && pageIndex < pageCount ? pageIndex : 0
    const pageIndexStart = pageItemSize * adjustedPageIndex
    const viewPageItems = searchedAndSortedViewItems.slice(
      pageIndexStart,
      pageIndexStart + pageItemSize
    )
    return {
      adjustedPageIndex,
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
          adjustedPageIndex={adjustedPageIndex}
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
      adjustedPageIndex === 0 &&
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
      adjustedPageIndex > 0 &&
      pageTopElement instanceof HTMLDivElement
    ) {
      pageTopElement.setAttribute('tabIndex', '-1')
      pageTopElement.focus({
        preventScroll: true,
      })
      pageTopElement.removeAttribute('tabIndex')
      const approximateViewHeaderDocumentBottomPlusSome = 88
      window.scrollTo({
        behavior: 'auto',
        top: approximateViewHeaderDocumentBottomPlusSome,
      })
    } else {
      throwInvalidPathError('useViewPage.useEffect[viewState.pageIndex]')
    }
  }, [adjustedPageIndex, viewState.curationView])
  return viewPageResult
}
