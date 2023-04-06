import { throwInvalidPathError } from '@stews/helpers'
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { ViewPageMessageItem } from '../components'
import { ViewPageNavigation } from '../components/ViewPageNavigation/ViewPageNavigation'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { CurationPageState } from './useCurationPageState'

export interface UseViewPageApi<CurationItem extends object>
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'ItemDisplay' | 'getItemSearchSpace' | 'curationType'
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
    curationType,
    curationPageState,
    getItemSearchSpace,
    pageItemSize,
    ItemDisplay,
    setPageIndexToPrevious,
    setPageIndexToNext,
  } = api
  const pageTopElementRef = useRef<HTMLDivElement>(null)
  const [fetchCurationItemsMapState, triggerFetchCurationItemsMap] =
    useAsyncData({
      initialAsyncDataState: {
        stateType: 'loading',
      },
      fetchAsyncData: (): Promise<Record<string, CurationItem>> =>
        fetch(`/assets/curations/${curationType}.json`).then((serverResponse) =>
          serverResponse.json()
        ),
    })
  useEffect(() => {
    triggerFetchCurationItemsMap()
  }, [])
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
          <Fragment key={Math.random()}>
            <div ref={pageTopElementRef} />
            {viewPageItems.length > 0 ? (
              viewPageItems.map((someItem, pageItemIndex) => (
                <ItemDisplay key={pageItemIndex} someItem={someItem} />
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

interface UseAsyncDataApi<
  FetchAsyncDataApi extends Array<any>,
  FetchAsyncData extends (...args: FetchAsyncDataApi) => Promise<any>,
  AsyncData extends PromiseValue<ReturnType<FetchAsyncData>> = PromiseValue<
    ReturnType<FetchAsyncData>
  >
> {
  initialAsyncDataState: AsyncDataState<AsyncData>
  fetchAsyncData: FetchAsyncData
}

function useAsyncData<
  FetchAsyncDataApi extends Array<any>,
  FetchAsyncData extends (...args: FetchAsyncDataApi) => Promise<any>,
  AsyncData extends PromiseValue<ReturnType<FetchAsyncData>> = PromiseValue<
    ReturnType<FetchAsyncData>
  >
>(
  api: UseAsyncDataApi<FetchAsyncDataApi, FetchAsyncData>
): [AsyncDataState<AsyncData>, (...args: FetchAsyncDataApi) => void] {
  const { initialAsyncDataState, fetchAsyncData } = api
  const [asyncDataState, setAsyncDataState] = useState<
    AsyncDataState<AsyncData>
  >(initialAsyncDataState)
  const triggerFetchAsyncData = useMemo(() => {
    return (...args: FetchAsyncDataApi) => {
      fetchAsyncData(...args)
        .then((someAsyncData) => {
          setAsyncDataState({
            stateType: 'success',
            data: someAsyncData,
          })
        })
        .catch(() => {
          setAsyncDataState({
            stateType: 'error',
            errorMessage: 'oops, something happened!!!',
          })
        })
      setAsyncDataState({
        stateType: 'loading',
      })
    }
  }, [])
  return [asyncDataState, triggerFetchAsyncData]
}

type PromiseValue<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never

type AsyncDataState<AsyncData> =
  | EmptyAsyncDataState
  | LoadingAsyncDataState
  | SuccessAsyncDataState<AsyncData>
  | ErrorAsyncDatatState

interface EmptyAsyncDataState extends AsyncDataStateBase<'empty'> {}

interface LoadingAsyncDataState extends AsyncDataStateBase<'loading'> {}

interface SuccessAsyncDataState<AsyncData>
  extends AsyncDataStateBase<'success'> {
  data: AsyncData
}

interface ErrorAsyncDatatState extends AsyncDataStateBase<'error'> {
  errorMessage: string
}

interface AsyncDataStateBase<StateType extends string> {
  stateType: StateType
}
