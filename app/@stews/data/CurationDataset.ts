import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { CurationItem } from './CurationItem'

export interface CuratorCurationDataset<SomeCurationItem extends CurationItem>
  extends CurationDatasetBase<SomeCurationItem> {
  datasetItems: Array<CurationItem>
}

export interface AdjustedCurationDataset<SomeCurationItem extends CurationItem>
  extends CurationDatasetBase<SomeCurationItem> {}

interface CurationDatasetBase<SomeCurationItem extends CurationItem> {
  datasetId: string
  datasetType: string
  datasetSortConfig: ArrayOfAtLeastOne<
    SegmentSortOptionConfig<SomeCurationItem>
  >
}

export type SegmentSortOptionConfig<SomeCurationItem extends CurationItem> = {
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
