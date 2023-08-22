import { ArrayOfAtLeastOne } from '@stews/helpers/types'

export interface CuratorCurationSegment
  extends CurationSegmentBase<Array<CuratorSegmentView>> {
  segmentFilter: string | null
}

export interface AdjustedCurationSegment
  extends CurationSegmentBase<ArrayOfAtLeastOne<AdjustedSegmentView>> {}

interface CurationSegmentBase<SegmentViews> {
  segmentKey: string
  segmentLabel: string
  segmentDataset: string
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
