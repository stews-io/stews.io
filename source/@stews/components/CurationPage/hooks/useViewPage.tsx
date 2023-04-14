import { CurationItemBase } from '@stews/data/CurationItem'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { useLayoutEffect, useMemo, useRef } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { ViewPageMessageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { CurationPageState } from './useCurationPageState'

export interface UseViewPageApi<CurationItem extends CurationItemBase>
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'ItemDisplay' | 'getItemSearchSpace' | 'fetchCurationItemsMapState'
  > {
  curationPageState: CurationPageState<CurationItem>
  pageItemSize: number
  setPageIndexToPrevious: PageIndexSetter
  setPageIndexToNext: PageIndexSetter
}

type PageIndexSetter = (currentAdjustedPageIndex: number) => void

export function useViewPage<CurationItem extends CurationItemBase>(
  api: UseViewPageApi<CurationItem>
) {
  const {
    fetchCurationItemsMapState,
    curationPageState,
    getItemSearchSpace,
    pageItemSize,
    ItemDisplay,
    setPageIndexToPrevious,
    setPageIndexToNext,
  } = api
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
        .reduce<Array<CurationItem>>((result, someViewItemId) => {
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
