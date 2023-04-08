import { useMemo, useState } from 'preact/hooks'

export interface UseAsyncDataApi<
  FetchAsyncDataApi extends Array<any>,
  FetchAsyncData extends (...args: FetchAsyncDataApi) => Promise<any>,
  AsyncData extends PromiseValue<ReturnType<FetchAsyncData>> = PromiseValue<
    ReturnType<FetchAsyncData>
  >
> {
  initialAsyncDataState: AsyncDataState<AsyncData>
  fetchAsyncData: FetchAsyncData
}

export function useAsyncData<
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

export type AsyncDataState<AsyncData> =
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
