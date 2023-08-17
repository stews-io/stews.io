import { MusicItem, MusicItemSchema } from '@stews/domains/music/data'
import { SpotItem, SpotItemSchema } from '@stews/domains/spot/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import Zod from 'zod'
import { CuratorInfo } from './CuratorInfo'

export interface CuratorConfig {
  curatorInfo: CuratorInfo
  curationSegments: ArrayOfAtLeastOne<CuratorCurationSegment>
}

type CuratorCurationSegment =
  | CuratorCurationSegmentBase<'music', MusicItem>
  | CuratorCurationSegmentBase<'spot', SpotItem>

export const CuratorConfigSchema = Zod.object({
  curatorInfo: Zod.object({
    curatorName: Zod.string(),
    curatorLocation: Zod.string(),
    curatorStatus: Zod.string(),
    curatorLinks: Zod.array(
      Zod.object({
        linkType: Zod.union([
          Zod.literal('website'),
          Zod.literal('github'),
          Zod.literal('twitter'),
          Zod.literal('instagram'),
        ]),
        linkHref: Zod.string(),
      })
    ),
  }),
  curationSegments: Zod.tuple([
    Zod.union([
      Zod.object({
        segmentType: Zod.literal('music'),
        segmentLabel: Zod.string(),
        segmentViews: Zod.tuple([
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          }),
        ]).rest(
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          })
        ),
        segmentItems: Zod.array(MusicItemSchema),
      }),
      Zod.object({
        segmentType: Zod.literal('spot'),
        segmentLabel: Zod.string(),
        segmentViews: Zod.tuple([
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          }),
        ]).rest(
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          })
        ),
        segmentItems: Zod.array(SpotItemSchema),
      }),
    ]),
  ]).rest(
    Zod.union([
      Zod.object({
        segmentType: Zod.literal('music'),
        segmentLabel: Zod.string(),
        segmentViews: Zod.tuple([
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          }),
        ]).rest(
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          })
        ),
        segmentItems: Zod.array(MusicItemSchema),
      }),
      Zod.object({
        segmentType: Zod.literal('spot'),
        segmentLabel: Zod.string(),
        segmentViews: Zod.tuple([
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          }),
        ]).rest(
          Zod.object({
            viewId: Zod.string(),
            viewLabel: Zod.string(),
            viewFilter: Zod.string(),
          })
        ),
        segmentItems: Zod.array(SpotItemSchema),
      }),
    ])
  ),
})

export interface AdjustedCuratorConfig {
  curatorInfo: CuratorInfo
  curationSegments: ArrayOfAtLeastOne<AdjustedCurationSegment>
}

export type AdjustedCurationSegment =
  | AdjustedCurationSegmentBase<'music'>
  | AdjustedCurationSegmentBase<'spot'>

interface CuratorCurationSegmentBase<SegmentType extends string, SegmentItem>
  extends CurationSegmentBase<SegmentType, CuratorSegmentView> {
  segmentItems: Array<SegmentItem>
}

interface AdjustedCurationSegmentBase<SegmentType extends string>
  extends CurationSegmentBase<SegmentType, AdjustedSegmentView> {}

interface CurationSegmentBase<
  SegmentType extends string,
  SegmentView extends SegmentViewBase
> {
  segmentType: SegmentType
  segmentLabel: string
  segmentViews: Array<SegmentView>
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
