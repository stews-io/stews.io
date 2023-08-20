import { CurationItem } from '@stews/data/CurationItem'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { useMemo } from 'preact/hooks'
import { CurationPageBaseDataProps } from '../CurationPageBase'

export type ViewSortOptionConfig<SomeCurationItem extends CurationItem> = {
  [SomeItemKey in keyof SomeCurationItem]: SomeItemKey extends string &
    keyof SomeCurationItem
    ? SomeCurationItem[SomeItemKey] extends string
      ? {
          fieldKey: SomeItemKey
          fieldType: 'string'
          sortLabelBase: string
        }
      : SomeCurationItem[SomeItemKey] extends ArrayOfAtLeastOne<string>
      ? {
          fieldKey: SomeItemKey
          fieldType: 'orderedStringSet'
          sortLabelBase: string
        }
      : SomeCurationItem[SomeItemKey] extends number
      ? {
          fieldKey: SomeItemKey
          fieldType: 'number'
          sortLabelBase: string
        }
      : never
    : never
}[keyof SomeCurationItem]

export interface ViewSortOption<SomeCurationItem extends CurationItem> {
  sortId: string
  sortLabel: string
  getSortOrder: NonNullable<Parameters<Array<SomeCurationItem>['sort']>[0]>
}

export interface UseViewSortOptionsApi<SomeCurationItem extends CurationItem>
  extends Pick<CurationPageBaseDataProps<SomeCurationItem>, 'viewSortConfig'> {}

export interface UseViewSortOptionsResult<
  SomeCurationItem extends CurationItem
> {
  viewSortOptions: ArrayOfAtLeastOne<ViewSortOption<SomeCurationItem>>
}

export function useViewSortOptions<SomeCurationItem extends CurationItem>(
  api: UseViewSortOptionsApi<SomeCurationItem>
): UseViewSortOptionsResult<SomeCurationItem> {
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
          } else if (someSortOptionConfig.fieldType === 'orderedStringSet') {
            pushOrderedStringSetSortOptions({
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
        [] as unknown as ArrayOfAtLeastOne<ViewSortOption<SomeCurationItem>>
      ),
    }),
    [viewSortConfig]
  )
}

interface PushStringSortOptionsApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem> {}

function pushStringSortOptions<SomeCurationItem extends CurationItem>(
  api: PushStringSortOptionsApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushStringSortOptionsBase({
    viewSortOptionsResult,
    someSortOptionConfig,
    getFieldValue: (someItem, itemFieldKey) => {
      const fieldValue = someItem[itemFieldKey]
      return typeof fieldValue === 'string'
        ? fieldValue
        : throwInvalidPathError('pushStringSortOptions.getFieldValue')
    },
  })
}

interface PushOrderedStringSetSortOptionsApi<
  SomeCurationItem extends CurationItem
> extends PushSortOptionsDataApi<SomeCurationItem> {}

function pushOrderedStringSetSortOptions<SomeCurationItem extends CurationItem>(
  api: PushOrderedStringSetSortOptionsApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushStringSortOptionsBase({
    viewSortOptionsResult,
    someSortOptionConfig,
    getFieldValue: (someItem, itemFieldKey) => {
      const fieldValue = someItem[itemFieldKey]
      return fieldValue instanceof Array && typeof fieldValue[0] === 'string'
        ? fieldValue[0]
        : throwInvalidPathError('pushStringSortOptions.getFieldValue')
    },
  })
}

interface PushStringSortOptionsBaseApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem> {
  getFieldValue: (
    someItem: SomeCurationItem,
    fieldKey: PushSortOptionsDataApi<SomeCurationItem>['someSortOptionConfig']['fieldKey']
  ) => string
}

function pushStringSortOptionsBase<SomeCurationItem extends CurationItem>(
  api: PushStringSortOptionsBaseApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig, getFieldValue } = api
  pushSortOptions({
    viewSortOptionsResult,
    someSortOptionConfig,
    ascendingSortLabelExtension: 'a → z',
    descendingSortLabelExtension: 'z → a',
    getAscendingSortOrder: (itemA, itemB) => {
      const fieldValueA = getFieldValue(itemA, someSortOptionConfig.fieldKey)
      const fieldValueB = getFieldValue(itemB, someSortOptionConfig.fieldKey)
      return fieldValueA.localeCompare(fieldValueB)
    },
    getDescendingSortOrder: (itemA, itemB) => {
      const fieldValueA = getFieldValue(itemA, someSortOptionConfig.fieldKey)
      const fieldValueB = getFieldValue(itemB, someSortOptionConfig.fieldKey)
      return fieldValueB.localeCompare(fieldValueA)
    },
  })
}

interface PushNumberSortOptionsApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem> {}

function pushNumberSortOptions<SomeCurationItem extends CurationItem>(
  api: PushNumberSortOptionsApi<SomeCurationItem>
) {
  const { viewSortOptionsResult, someSortOptionConfig } = api
  pushSortOptions({
    viewSortOptionsResult,
    someSortOptionConfig,
    ascendingSortLabelExtension: '0 → 9',
    descendingSortLabelExtension: '9 → 0',
    getAscendingSortOrder: (itemA, itemB) => {
      const fieldValueA = itemA[someSortOptionConfig.fieldKey]
      const fieldValueB = itemB[someSortOptionConfig.fieldKey]
      return typeof fieldValueA === 'number' && typeof fieldValueB === 'number'
        ? fieldValueA - fieldValueB
        : throwInvalidPathError('pushNumberSortOptions.getAscendingSortOrder')
    },
    getDescendingSortOrder: (itemA, itemB) => {
      const fieldValueA = itemA[someSortOptionConfig.fieldKey]
      const fieldValueB = itemB[someSortOptionConfig.fieldKey]
      return typeof fieldValueA === 'number' && typeof fieldValueB === 'number'
        ? fieldValueB - fieldValueA
        : throwInvalidPathError('pushNumberSortOptions.getDescendingSortOrder')
    },
  })
}

interface PushSortOptionsApi<SomeCurationItem extends CurationItem>
  extends PushSortOptionsDataApi<SomeCurationItem>,
    PushSortOptionsConfigApi<SomeCurationItem> {}

interface PushSortOptionsDataApi<SomeCurationItem extends CurationItem> {
  viewSortOptionsResult: ReturnType<
    typeof useViewSortOptions<SomeCurationItem>
  >['viewSortOptions']
  someSortOptionConfig: UseViewSortOptionsApi<SomeCurationItem>['viewSortConfig'][number]
}

interface PushSortOptionsConfigApi<SomeCurationItem extends CurationItem> {
  ascendingSortLabelExtension: string
  descendingSortLabelExtension: string
  getAscendingSortOrder: ViewSortOption<SomeCurationItem>['getSortOrder']
  getDescendingSortOrder: ViewSortOption<SomeCurationItem>['getSortOrder']
}

function pushSortOptions<SomeCurationItem extends CurationItem>(
  api: PushSortOptionsApi<SomeCurationItem>
) {
  const {
    viewSortOptionsResult,
    someSortOptionConfig,
    ascendingSortLabelExtension,
    getAscendingSortOrder,
    descendingSortLabelExtension,
    getDescendingSortOrder,
  } = api
  viewSortOptionsResult.push({
    sortId: `${someSortOptionConfig.fieldKey}Ascending`,
    sortLabel: `${someSortOptionConfig.sortLabelBase}: ${ascendingSortLabelExtension}`,
    getSortOrder: getAscendingSortOrder,
  })
  viewSortOptionsResult.push({
    sortId: `${someSortOptionConfig.fieldKey}Descending`,
    sortLabel: `${someSortOptionConfig.sortLabelBase}: ${descendingSortLabelExtension}`,
    getSortOrder: getDescendingSortOrder,
  })
}
