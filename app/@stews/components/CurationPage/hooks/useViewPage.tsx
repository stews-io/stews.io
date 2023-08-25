import { CurationItem } from '@stews/data/CurationItem'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useLayoutEffect, useMemo, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { CurationSegmentPageProps } from '../CurationSegmentPage'
import { ViewPageMessageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'

export interface UseViewPageApi
  extends Pick<
    CurationSegmentPageProps,
    'segmentDatasetState' | 'curationSegmentState'
  > {
  pageItemSize: number
  setPageIndexToPrevious: PageIndexSetter
  setPageIndexToNext: PageIndexSetter
}

type PageIndexSetter = (currentAdjustedPageIndex: number) => void

export function useViewPage(api: UseViewPageApi) {
  const {
    segmentDatasetState,
    curationSegmentState,
    pageItemSize,
    setPageIndexToPrevious,
    setPageIndexToNext,
  } = api
  const pageTopElementRef = useRef<HTMLDivElement>(null)
  const viewPageResult = useMemo(() => {
    if (segmentDatasetState.fetchStatus === 'loading') {
      return {
        viewPageItemElements: <ViewPageMessageItem message={'loading...'} />,
        viewPageNavigationElement: null,
      }
    } else if (segmentDatasetState.fetchStatus === 'success') {
      const { segmentView, viewSearchQuery, segmentSortOption, viewPageIndex } =
        curationSegmentState
      const searchedAndSortedViewItems = segmentView.viewItemIds
        .reduce<Array<CurationItem>>((result, someViewItemId) => {
          const someViewItem =
            segmentDatasetState.segmentDatasetItems[someViewItemId] ??
            throwInvalidPathError('useViewPage.someViewItem')
          if (
            curationSegmentState.curationSegment
              .getSegmentItemSearchSpace(someViewItem)
              .toLowerCase()
              .includes(viewSearchQuery.toLowerCase())
          ) {
            result.push(someViewItem)
          }
          return result
        }, [])
        .sort(segmentSortOption.getSortOrder)
      const viewPageCount =
        Math.ceil(searchedAndSortedViewItems.length / pageItemSize) || 1
      const pageIndexStart = pageItemSize * viewPageIndex
      const viewPageItems = searchedAndSortedViewItems.slice(
        pageIndexStart,
        pageIndexStart + pageItemSize
      )
      return {
        viewPageItemElements: (
          <Fragment>
            <div ref={pageTopElementRef} />
            {viewPageItems.length > 0 ? (
              viewPageItems.map((someItem) => (
                <curationSegmentState.curationSegment.SegmentItemDisplay
                  key={someItem.itemId}
                  someItem={someItem}
                />
              ))
            ) : (
              <ViewPageMessageItem message={'no items match'} />
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
    } else if (segmentDatasetState.fetchStatus === 'error') {
      return {
        viewPageItemElements: (
          <ViewPageMessageItem message={segmentDatasetState.errorMessage} />
        ),
        viewPageNavigationElement: null,
      }
    } else {
      throwInvalidPathError('useViewPage.useMemo')
    }
  }, [
    segmentDatasetState,
    curationSegmentState,
    pageItemSize,
    setPageIndexToPrevious,
    setPageIndexToNext,
  ])
  useLayoutEffect(() => {
    const pageContentContainerElement = document.getElementById(
      'pageContentContainer'
    )
    const pageTopElement = pageTopElementRef.current
    if (document.activeElement instanceof HTMLInputElement) {
      // noop
    } else if (
      curationSegmentState.viewPageIndex === 0 &&
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
      curationSegmentState.viewPageIndex > 0 &&
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
  }, [curationSegmentState.segmentView, curationSegmentState.viewPageIndex])
  return viewPageResult
}
