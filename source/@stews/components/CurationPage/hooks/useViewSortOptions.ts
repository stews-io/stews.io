import { throwInvalidPathError } from '@stews/helpers'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { useMemo } from 'preact/hooks'
import { CurationPageBaseDataProps } from '../CurationPageBase'
import { ViewSortSelectOption } from '../data'

export interface UseViewSortOptionsApi<CurationItem extends object>
  extends Pick<CurationPageBaseDataProps<CurationItem>, 'viewSortConfig'> {}

export function useViewSortOptions<CurationItem extends object>(
  api: UseViewSortOptionsApi<CurationItem>
): {
  viewSortOptions: ArrayOfAtLeastOne<ViewSortSelectOption<CurationItem>>
} {
  const { viewSortConfig } = api
  return useMemo(
    () => ({
      viewSortOptions: viewSortConfig.reduce(
        (viewSortOptionsResult, someSortOptionConfig) => {
          if (someSortOptionConfig.fieldType === 'string') {
            pushStringSortOptions({
              viewSortOptionsResult,
              someSortOptionConfig,
            })
          } else if (someSortOptionConfig.fieldType === 'number') {
            pushNumberSortOptions({
              viewSortOptionsResult,
              someSortOptionConfig,
            })
          } else {
            throwInvalidPathError('useViewSortOrderOptions')
          }
          return viewSortOptionsResult
        },
        [] as unknown as ArrayOfAtLeastOne<ViewSortSelectOption<CurationItem>>
      ),
    }),
    [viewSortConfig]
  )
}

interface PushStringSortOptionsApi<CurationItem extends object>
  extends PushSortOptionsDataApi<CurationItem> {}

function pushStringSortOptions<CurationItem extends object>(
  api: PushStringSortOptionsApi<CurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushSortOptions({
    ascendingSortLabelExtension: 'a → z',
    descendingSortLabelExtension: 'z → a',
    viewSortOptionsResult,
    someSortOptionConfig,
  })
}

interface PushNumberSortOptionsApi<CurationItem extends object>
  extends PushSortOptionsDataApi<CurationItem> {}

function pushNumberSortOptions<CurationItem extends object>(
  api: PushNumberSortOptionsApi<CurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushSortOptions({
    ascendingSortLabelExtension: '0 → 9',
    descendingSortLabelExtension: '9 → 0',
    viewSortOptionsResult,
    someSortOptionConfig,
  })
}

interface PushSortOptionsApi<CurationItem extends object>
  extends PushSortOptionsDataApi<CurationItem>,
    PushSortOptionsConfigApi {
  ascendingSortLabelExtension: string
  descendingSortLabelExtension: string
}

interface PushSortOptionsDataApi<CurationItem extends object> {
  viewSortOptionsResult: ReturnType<
    typeof useViewSortOptions<CurationItem>
  >['viewSortOptions']
  someSortOptionConfig: UseViewSortOptionsApi<CurationItem>['viewSortConfig'][number]
}

interface PushSortOptionsConfigApi {
  ascendingSortLabelExtension: string
  descendingSortLabelExtension: string
}

function pushSortOptions<CurationItem extends object>(
  api: PushSortOptionsApi<CurationItem>
) {
  const {
    viewSortOptionsResult,
    someSortOptionConfig,
    ascendingSortLabelExtension,
    descendingSortLabelExtension,
  } = api
  viewSortOptionsResult.push({
    sortId: `${someSortOptionConfig.fieldKey}_ascending`,
    sortLabel: `${someSortOptionConfig.sortLabelBase}: ${ascendingSortLabelExtension}`,
    getSortOrder: () => 0,
  })
  viewSortOptionsResult.push({
    sortId: `${someSortOptionConfig.fieldKey}_descending`,
    sortLabel: `${someSortOptionConfig.sortLabelBase}: ${descendingSortLabelExtension}`,
    getSortOrder: () => 0,
  })
}
