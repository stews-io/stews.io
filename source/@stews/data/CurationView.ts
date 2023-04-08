export interface CuratorCurationView extends CurationViewBase {
  viewFilter: string
}

export interface AdjustedCurationView extends CurationViewBase {
  viewItemIds: Array<number>
}

interface CurationViewBase {
  viewId: number
  viewLabel: string
}
