import { throwInvalidPathError } from '@stews/helpers'
import * as Liqe from 'liqe'
import { useLayoutEffect, useMemo, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { EmptyViewPageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { CurationPageState } from './useCurationPageState'

export interface UseViewPageApi<CurationItem extends object>
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'ItemDisplay' | 'getItemSearchSpace' | 'curationItems'
  > {
  curationPageState: CurationPageState<CurationItem>
  pageItemSize: number
  setPageIndexToPrevious: PageIndexSetter
  setPageIndexToNext: PageIndexSetter
}

type PageIndexSetter = (currentAdjustedPageIndex: number) => void

export function useViewPage<CurationItem extends object>(
  api: UseViewPageApi<CurationItem>
) {
  const {
    curationPageState,
    curationItems,
    getItemSearchSpace,
    pageItemSize,
    ItemDisplay,
    setPageIndexToPrevious,
    setPageIndexToNext,
  } = api
  const pageTopElementRef = useRef<HTMLDivElement>(null)
  const viewPageResult = useMemo(() => {
    const { curationView, viewSearchQuery, viewSortOption, viewPageIndex } =
      curationPageState
    const viewItems =
      curationView.viewType === 'default'
        ? curationItems
        : Liqe.filter(Liqe.parse(curationView.viewFilter), curationItems)
    const searchedAndSortedViewItems = viewItems
      .filter((someViewItem) =>
        getItemSearchSpace(someViewItem)
          .toLowerCase()
          .includes(viewSearchQuery.toLowerCase())
      )
      .sort(viewSortOption.getSortOrder)
    const viewPageCount =
      Math.ceil(searchedAndSortedViewItems.length / pageItemSize) || 1
    const pageIndexStart = pageItemSize * viewPageIndex
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
          viewPageIndex={viewPageIndex}
          viewPageCount={viewPageCount}
        />
      ),
    }
  }, [
    curationPageState,
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
      curationPageState.viewPageIndex === 0 &&
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
      curationPageState.viewPageIndex > 0 &&
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
      throwInvalidPathError(
        'useViewPage.useEffect[curationPageState.curationView, curationPageState.viewPageIndex]'
      )
    }
  }, [curationPageState.curationView, curationPageState.viewPageIndex])
  return viewPageResult
}
