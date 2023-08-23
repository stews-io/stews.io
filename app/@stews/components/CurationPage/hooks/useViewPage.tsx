import { CurationItem } from '@stews/data/CurationItem'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useAsyncData } from '@stews/hooks/useAsyncData'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { CurationSegmentPageProps } from '../CurationSegmentPage'
import { ViewPageMessageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'

export interface UseViewPageApi
  extends Pick<CurationSegmentPageProps, 'curationSegmentState'> {
  pageItemSize: number
  setPageIndexToPrevious: PageIndexSetter
  setPageIndexToNext: PageIndexSetter
}

type PageIndexSetter = (currentAdjustedPageIndex: number) => void

export function useViewPage(api: UseViewPageApi) {
  const {
    curationSegmentState,
    pageItemSize,
    setPageIndexToPrevious,
    setPageIndexToNext,
  } = api

  const [fetchCurationItemsMapState, triggerFetchCurationItemsMap] =
    useAsyncData({
      initialAsyncDataState: {
        stateType: 'loading',
      },
      fetchAsyncData: (): Promise<{
        segmentDatasetId: string
        segmentDatasetItems: Record<string, CurationItem>
      }> =>
        fetch(
          `/assets/curations/${curationSegmentState.curationSegment.segmentDatasetId}.json`
        )
          .then((serverResponse) => serverResponse.json())
          .then((someSegmentDatasetItems) => ({
            segmentDatasetId:
              curationSegmentState.curationSegment.segmentDatasetId,
            segmentDatasetItems: someSegmentDatasetItems,
          })),
    })
  useEffect(() => {
    triggerFetchCurationItemsMap()
  }, [curationSegmentState.curationSegment.segmentDatasetId])
  const pageTopElementRef = useRef<HTMLDivElement>(null)
  const viewPageResult = useMemo(() => {
    if (
      (fetchCurationItemsMapState.stateType === 'success' &&
        fetchCurationItemsMapState.data.segmentDatasetId !==
          curationSegmentState.curationSegment.segmentDatasetId) ||
      fetchCurationItemsMapState.stateType === 'loading'
    ) {
      return {
        viewPageItemElements: <ViewPageMessageItem message={'loading...'} />,
        viewPageNavigationElement: null,
      }
    } else if (fetchCurationItemsMapState.stateType === 'success') {
      const { segmentView, viewSearchQuery, segmentSortOption, viewPageIndex } =
        curationSegmentState
      const searchedAndSortedViewItems = segmentView.viewItemIds
        .reduce<Array<CurationItem>>((result, someViewItemId) => {
          const someViewItem =
            fetchCurationItemsMapState.data.segmentDatasetItems[
              someViewItemId
            ] ??
            throwInvalidPathError('useViewPage.fetchCurationItemsMapState.data')
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
    } else if (fetchCurationItemsMapState.stateType === 'error') {
      return {
        viewPageItemElements: (
          <ViewPageMessageItem
            message={fetchCurationItemsMapState.errorMessage}
          />
        ),
        viewPageNavigationElement: null,
      }
    } else {
      throwInvalidPathError('useViewPage.useMemo')
    }
  }, [
    curationSegmentState,
    pageItemSize,
    setPageIndexToPrevious,
    setPageIndexToNext,
    fetchCurationItemsMapState,
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
