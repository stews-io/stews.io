import { CurationItem } from './CurationItem'

export interface CuratorCurationDataset extends CurationDatasetBase {
  datasetItems: Array<CurationItem>
}

export interface AdjustedCurationDataset extends CurationDatasetBase {}

interface CurationDatasetBase {
  datasetKey: string
  datasetType: string
}
