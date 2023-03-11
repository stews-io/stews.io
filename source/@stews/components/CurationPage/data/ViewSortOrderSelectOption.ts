import { ExtractStrictMenuOption } from '@stews/components/Select'

export type ViewSortOrderSelectOption<CurationItem> = ExtractStrictMenuOption<
  {
    sortId: string
    sortLabel: string
    getSortOrder: NonNullable<Parameters<Array<CurationItem>['sort']>[0]>
  },
  'sortLabel'
>
