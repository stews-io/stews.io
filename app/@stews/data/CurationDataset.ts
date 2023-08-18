import { CurationItemBase } from './CurationItem'

export interface CuratorCurationDataset extends CurationDatasetBase {
  datasetItems: Array<CurationItemBase>
}

export interface AdjustedCurationDataset extends CurationDatasetBase {}

interface CurationDatasetBase {
  datasetKey: string
  datasetType: string
}
