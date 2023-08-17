import { CurationItemBase } from '@stews/data/CurationItem'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { useMemo } from 'preact/hooks'
import { CurationPageBaseDataProps } from '../CurationPageBase'

export type ViewSortOptionConfig<CurationItem extends CurationItemBase> = {
  [SomeItemKey in keyof CurationItem]: SomeItemKey extends string &
    keyof CurationItem
    ? CurationItem[SomeItemKey] extends string
      ? {
          fieldKey: SomeItemKey
          fieldType: 'string'
          sortLabelBase: string
        }
      : CurationItem[SomeItemKey] extends ArrayOfAtLeastOne<string>
      ? {
          fieldKey: SomeItemKey
          fieldType: 'orderedStringSet'
          sortLabelBase: string
        }
      : CurationItem[SomeItemKey] extends number
      ? {
          fieldKey: SomeItemKey
          fieldType: 'number'
          sortLabelBase: string
        }
      : never
    : never
}[keyof CurationItem]

export interface ViewSortOption<CurationItem extends CurationItemBase> {
  sortId: string
  sortLabel: string
  getSortOrder: NonNullable<Parameters<Array<CurationItem>['sort']>[0]>
}

export interface UseViewSortOptionsApi<CurationItem extends CurationItemBase>
  extends Pick<CurationPageBaseDataProps<CurationItem>, 'viewSortConfig'> {}

export interface UseViewSortOptionsResult<
  CurationItem extends CurationItemBase
> {
  viewSortOptions: ArrayOfAtLeastOne<ViewSortOption<CurationItem>>
}

export function useViewSortOptions<CurationItem extends CurationItemBase>(
  api: UseViewSortOptionsApi<CurationItem>
): UseViewSortOptionsResult<CurationItem> {
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
        [] as unknown as ArrayOfAtLeastOne<ViewSortOption<CurationItem>>
      ),
    }),
    [viewSortConfig]
  )
}

interface PushStringSortOptionsApi<CurationItem extends CurationItemBase>
  extends PushSortOptionsDataApi<CurationItem> {}

function pushStringSortOptions<CurationItem extends CurationItemBase>(
  api: PushStringSortOptionsApi<CurationItem>
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
  CurationItem extends CurationItemBase
> extends PushSortOptionsDataApi<CurationItem> {}

function pushOrderedStringSetSortOptions<CurationItem extends CurationItemBase>(
  api: PushOrderedStringSetSortOptionsApi<CurationItem>
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

interface PushStringSortOptionsBaseApi<CurationItem extends CurationItemBase>
  extends PushSortOptionsDataApi<CurationItem> {
  getFieldValue: (
    someItem: CurationItem,
    fieldKey: PushSortOptionsDataApi<CurationItem>['someSortOptionConfig']['fieldKey']
  ) => string
}

function pushStringSortOptionsBase<CurationItem extends CurationItemBase>(
  api: PushStringSortOptionsBaseApi<CurationItem>
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

interface PushNumberSortOptionsApi<CurationItem extends CurationItemBase>
  extends PushSortOptionsDataApi<CurationItem> {}

function pushNumberSortOptions<CurationItem extends CurationItemBase>(
  api: PushNumberSortOptionsApi<CurationItem>
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

interface PushSortOptionsApi<CurationItem extends CurationItemBase>
  extends PushSortOptionsDataApi<CurationItem>,
    PushSortOptionsConfigApi<CurationItem> {}

interface PushSortOptionsDataApi<CurationItem extends CurationItemBase> {
  viewSortOptionsResult: ReturnType<
    typeof useViewSortOptions<CurationItem>
  >['viewSortOptions']
  someSortOptionConfig: UseViewSortOptionsApi<CurationItem>['viewSortConfig'][number]
}

interface PushSortOptionsConfigApi<CurationItem extends CurationItemBase> {
  ascendingSortLabelExtension: string
  descendingSortLabelExtension: string
  getAscendingSortOrder: ViewSortOption<CurationItem>['getSortOrder']
  getDescendingSortOrder: ViewSortOption<CurationItem>['getSortOrder']
}

function pushSortOptions<CurationItem extends CurationItemBase>(
  api: PushSortOptionsApi<CurationItem>
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
