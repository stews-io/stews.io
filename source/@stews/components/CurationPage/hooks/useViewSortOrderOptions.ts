import { throwInvalidPathError } from '@stews/helpers'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { useMemo } from 'preact/hooks'
import { CurationPageBaseProps } from '../CurationPageBase'
import { ViewSortOrderSelectOption } from '../data'

export interface UseViewSortOrderOptionsApi<CurationItem>
  extends Pick<
    CurationPageBaseProps<CurationItem, unknown>,
    'viewSortOrderConfig'
  > {}

export function useViewSortOrderOptions<CurationItem>(
  api: UseViewSortOrderOptionsApi<CurationItem>
): ArrayOfAtLeastOne<ViewSortOrderSelectOption<CurationItem>> {
  const { viewSortOrderConfig } = api
  return useMemo(() => {
    const sortOptionsResult = viewSortOrderConfig.reduce<
      Array<ViewSortOrderSelectOption<CurationItem>>
    >((result, someSortFieldConfig) => {
      if (someSortFieldConfig.fieldType === 'string') {
        result.push({
          sortId: `${someSortFieldConfig.fieldKey}_ascending`,
          sortLabel: `${someSortFieldConfig.sortLabelBase}: a → z`,
          getSortOrder: () => 0,
        })
        result.push({
          sortId: `${someSortFieldConfig.fieldKey}_descending`,
          sortLabel: `${someSortFieldConfig.sortLabelBase}: z → a`,
          getSortOrder: () => 0,
        })
      } else if (someSortFieldConfig.fieldType === 'number') {
        result.push({
          sortId: `${someSortFieldConfig.fieldKey}_ascending`,
          sortLabel: `${someSortFieldConfig.sortLabelBase}: 0 → 9`,
          getSortOrder: () => 0,
        })
        result.push({
          sortId: `${someSortFieldConfig.fieldKey}_descending`,
          sortLabel: `${someSortFieldConfig.sortLabelBase}: 9 → 0`,
          getSortOrder: () => 0,
        })
      } else {
        throwInvalidPathError('todo')
      }
      return result
    }, [])
    return sortOptionsResult.length > 0
      ? (sortOptionsResult as ArrayOfAtLeastOne<
          ViewSortOrderSelectOption<CurationItem>
        >)
      : throwInvalidPathError('todo')
  }, [viewSortOrderConfig])
}
