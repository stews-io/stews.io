import { ExtractStrictMenuOption } from '@stews/components/Select'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'

export type ViewSortSelectOption<CurationItem extends object> =
  ExtractStrictMenuOption<
    {
      sortId: string
      sortLabel: string
      getSortOrder: NonNullable<Parameters<Array<CurationItem>['sort']>[0]>
    },
    'sortLabel'
  >

export type ViewSortOptionConfig<CurationItem extends object> = {
  [SomeItemKey in keyof CurationItem]: SomeItemKey extends string
    ? CurationItem[SomeItemKey] extends string | ArrayOfAtLeastOne<string>
      ? {
          fieldKey: SomeItemKey
          fieldType: 'string'
          sortLabelBase: string
        }
      : CurationItem[SomeItemKey] extends number | ArrayOfAtLeastOne<number>
      ? {
          fieldKey: SomeItemKey
          fieldType: 'number'
          sortLabelBase: string
        }
      : never
    : never
}[keyof CurationItem]
