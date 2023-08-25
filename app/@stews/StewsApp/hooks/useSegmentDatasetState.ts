import { CurationItem } from '@stews/data/CurationItem'
import { useCurationSegmentState } from './useCurationSegmentState'
import { useEffect, useMemo, useState } from 'preact/hooks'

export interface UseSegmentDatasetItemsStateApi
  extends Pick<
    ReturnType<typeof useCurationSegmentState>,
    'curationSegmentState'
  > {}

export function useSegmentDatasetState(api: UseSegmentDatasetItemsStateApi) {
  const { curationSegmentState } = api
  const [fetchSegmentDatasetState, setFetchSegmentDatasetState] =
    useState<SegmentDatasetState>({
      fetchStatus: 'loading',
    })
  useEffect(() => {
    fetch(
      `/assets/curations/${curationSegmentState.curationSegment.segmentDatasetId}.json`
    )
      .then((serverResponse) => serverResponse.json())
      .then((nextSegmentItems) => {
        setFetchSegmentDatasetState({
          fetchStatus: 'success',
          segmentDatasetId:
            curationSegmentState.curationSegment.segmentDatasetId,
          segmentDatasetItems: nextSegmentItems,
        })
      })
      .catch(() => {
        setFetchSegmentDatasetState({
          fetchStatus: 'error',
          errorMessage: 'oops, something happened!!!',
        })
      })
    setFetchSegmentDatasetState({
      fetchStatus: 'loading',
    })
  }, [curationSegmentState.curationSegment.segmentDatasetId])
  const segmentDatasetState = useMemo<SegmentDatasetState>(
    () =>
      fetchSegmentDatasetState.fetchStatus === 'success' &&
      fetchSegmentDatasetState.segmentDatasetId !==
        curationSegmentState.curationSegment.segmentDatasetId
        ? { fetchStatus: 'loading' }
        : fetchSegmentDatasetState,
    [
      curationSegmentState.curationSegment.segmentDatasetId,
      fetchSegmentDatasetState.fetchStatus,
    ]
  )
  return { segmentDatasetState }
}

export type SegmentDatasetState =
  | LoadingSegmentDatasetState
  | SuccessSegmentDatasetState
  | ErrorSegmentDatasetState

interface LoadingSegmentDatasetState
  extends SegmentDatasetStateBase<'loading'> {}

interface SuccessSegmentDatasetState
  extends SegmentDatasetStateBase<'success'> {
  segmentDatasetId: string
  segmentDatasetItems: Array<CurationItem>
}

interface ErrorSegmentDatasetState extends SegmentDatasetStateBase<'error'> {
  errorMessage: string
}

interface SegmentDatasetStateBase<FetchStatus extends string> {
  fetchStatus: FetchStatus
}
