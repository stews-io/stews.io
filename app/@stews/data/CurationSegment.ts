import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { CurationItem, ItemDisplayProps } from './CurationItem'
import { FunctionComponent } from 'preact'

export interface CuratorCurationSegment
  extends CurationSegmentBase<Array<CuratorSegmentView>> {
  segmentFilter: string | null
}

export interface AdjustedCurationSegment
  extends CurationSegmentBase<ArrayOfAtLeastOne<AdjustedSegmentView>> {}

export interface ClientCurationSegment<SomeCurationItem extends CurationItem>
  extends CurationSegmentBase<ArrayOfAtLeastOne<AdjustedSegmentView>> {
  segmentSortOptions: ArrayOfAtLeastOne<SegmentSortOption<SomeCurationItem>>
  SegmentItemDisplay: FunctionComponent<ItemDisplayProps<SomeCurationItem>>
  getSegmentItemSearchSpace: (someCurationItem: SomeCurationItem) => string
}

export interface SegmentSortOption<SomeCurationItem extends CurationItem> {
  sortId: string
  sortLabel: string
  getSortOrder: NonNullable<Parameters<Array<SomeCurationItem>['sort']>[0]>
}

interface CurationSegmentBase<SegmentViews> {
  segmentId: string
  segmentLabel: string
  segmentDatasetId: string
  segmentViews: SegmentViews
}

export interface CuratorSegmentView extends SegmentViewBase {
  viewFilter: string
}

export interface AdjustedSegmentView extends SegmentViewBase {
  viewItemIds: Array<number>
}

interface SegmentViewBase {
  viewId: string
  viewLabel: string
}
