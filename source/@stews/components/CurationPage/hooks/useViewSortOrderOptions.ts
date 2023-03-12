import { throwInvalidPathError } from '@stews/helpers'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { useMemo } from 'preact/hooks'
import {
  CurationPageBaseConfigProps,
  CurationPageBaseDataProps,
} from '../CurationPageBase'
import { ViewSortOrderSelectOption } from '../data'

export interface UseViewSortOrderOptionsApi<CurationItem extends object>
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'viewSortOrderConfig'
  > {}

export function useViewSortOrderOptions<CurationItem extends object>(
  api: UseViewSortOrderOptionsApi<CurationItem>
): {
  viewSortOrderOptions: ArrayOfAtLeastOne<
    ViewSortOrderSelectOption<CurationItem>
  >
} {
  const { viewSortOrderConfig } = api
  return useMemo(
    () => ({
      viewSortOrderOptions: viewSortOrderConfig.reduce(
        (viewSortOrderOptions, someSortOrderFieldConfig) => {
          if (someSortOrderFieldConfig.fieldType === 'string') {
            pushStringSortOrderOptions({
              viewSortOrderOptions,
              someSortOrderFieldConfig,
            })
          } else if (someSortOrderFieldConfig.fieldType === 'number') {
            pushNumberSortOrderOptions({
              viewSortOrderOptions,
              someSortOrderFieldConfig,
            })
          } else {
            throwInvalidPathError('useViewSortOrderOptions')
          }
          return viewSortOrderOptions
        },
        [] as unknown as ArrayOfAtLeastOne<
          ViewSortOrderSelectOption<CurationItem>
        >
      ),
    }),
    [viewSortOrderConfig]
  )
}

interface PushStringSortOrderOptionsApi<CurationItem extends object>
  extends Pick<
    PushSortOrderOptionsApi<CurationItem>,
    'viewSortOrderOptions' | 'someSortOrderFieldConfig'
  > {}

function pushStringSortOrderOptions<CurationItem extends object>(
  api: PushStringSortOrderOptionsApi<CurationItem>
) {
  const { viewSortOrderOptions, someSortOrderFieldConfig } = api
  pushSortOrderOptions({
    ascendingSortLabelExtension: 'a → z',
    descendingSortLabelExtension: 'z → a',
    viewSortOrderOptions,
    someSortOrderFieldConfig,
  })
}

interface PushNumberSortOrderOptionsApi<CurationItem extends object>
  extends Pick<
    PushSortOrderOptionsApi<CurationItem>,
    'viewSortOrderOptions' | 'someSortOrderFieldConfig'
  > {}

function pushNumberSortOrderOptions<CurationItem extends object>(
  api: PushNumberSortOrderOptionsApi<CurationItem>
) {
  const { viewSortOrderOptions, someSortOrderFieldConfig } = api
  pushSortOrderOptions({
    ascendingSortLabelExtension: '0 → 9',
    descendingSortLabelExtension: '9 → 0',
    viewSortOrderOptions,
    someSortOrderFieldConfig,
  })
}

interface PushSortOrderOptionsApi<CurationItem extends object>
  extends Pick<
    ReturnType<typeof useViewSortOrderOptions<CurationItem>>,
    'viewSortOrderOptions'
  > {
  someSortOrderFieldConfig: UseViewSortOrderOptionsApi<CurationItem>['viewSortOrderConfig'][number]
  ascendingSortLabelExtension: string
  descendingSortLabelExtension: string
}

function pushSortOrderOptions<CurationItem extends object>(
  api: PushSortOrderOptionsApi<CurationItem>
) {
  const {
    viewSortOrderOptions,
    someSortOrderFieldConfig,
    ascendingSortLabelExtension,
    descendingSortLabelExtension,
  } = api
  viewSortOrderOptions.push({
    sortId: `${someSortOrderFieldConfig.fieldKey}_ascending`,
    sortLabel: `${someSortOrderFieldConfig.sortLabelBase}: ${ascendingSortLabelExtension}`,
    getSortOrder: () => 0,
  })
  viewSortOrderOptions.push({
    sortId: `${someSortOrderFieldConfig.fieldKey}_descending`,
    sortLabel: `${someSortOrderFieldConfig.sortLabelBase}: ${descendingSortLabelExtension}`,
    getSortOrder: () => 0,
  })
}
