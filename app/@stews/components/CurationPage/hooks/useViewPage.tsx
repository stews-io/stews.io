import { CurationItem } from '@stews/data/CurationItem'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { ViewPageMessageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { CurationPageState } from './useCurationPageState'
import { useAsyncData } from '@stews/hooks/useAsyncData'

export interface UseViewPageApi<SomeCurationItem extends CurationItem>
  extends Pick<
    CurationPageBaseDataProps<SomeCurationItem>,
    'ItemDisplay' | 'getItemSearchSpace' | 'activeCurationSegment'
  > {
  curationPageState: CurationPageState<SomeCurationItem>
  pageItemSize: number
  setPageIndexToPrevious: PageIndexSetter
  setPageIndexToNext: PageIndexSetter
}

type PageIndexSetter = (currentAdjustedPageIndex: number) => void

export function useViewPage<SomeCurationItem extends CurationItem>(
  api: UseViewPageApi<SomeCurationItem>
) {
  const {
    activeCurationSegment,
    curationPageState,
    getItemSearchSpace,
    pageItemSize,
    ItemDisplay,
    setPageIndexToPrevious,
    setPageIndexToNext,
  } = api
  const [fetchCurationItemsMapState, triggerFetchCurationItemsMap] =
    useAsyncData({
      initialAsyncDataState: {
        stateType: 'loading',
      },
      fetchAsyncData: (): Promise<Record<string, SomeCurationItem>> =>
        fetch(
          `/assets/curations/${activeCurationSegment.segmentDataset}.json`
        ).then((serverResponse) => serverResponse.json()),
    })
  useEffect(() => {
    triggerFetchCurationItemsMap()
  }, [activeCurationSegment.segmentDataset])
  const pageTopElementRef = useRef<HTMLDivElement>(null)
  const viewPageResult = useMemo(() => {
    if (fetchCurationItemsMapState.stateType === 'loading') {
      return {
        viewPageItemElements: <ViewPageMessageItem message={'loading...'} />,
        viewPageNavigationElement: null,
      }
    } else if (fetchCurationItemsMapState.stateType === 'success') {
      const { curationView, viewSearchQuery, viewSortOption, viewPageIndex } =
        curationPageState
      const searchedAndSortedViewItems = curationView.viewItemIds
        .reduce<Array<SomeCurationItem>>((result, someViewItemId) => {
          const someViewItem =
            fetchCurationItemsMapState.data[someViewItemId] ??
            throwInvalidPathError('useViewPage.fetchCurationItemsMapState.data')
          if (
            getItemSearchSpace(someViewItem)
              .toLowerCase()
              .includes(viewSearchQuery.toLowerCase())
          ) {
            result.push(someViewItem)
          }
          return result
        }, [])
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
          <Fragment>
            <div ref={pageTopElementRef} />
            {viewPageItems.length > 0 ? (
              viewPageItems.map((someItem) => (
                <ItemDisplay key={someItem.itemId} someItem={someItem} />
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
    curationPageState,
    getItemSearchSpace,
    pageItemSize,
    ItemDisplay,
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
