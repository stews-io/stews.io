import { MusicItemSchema } from '@stews/domains/music/data'
import { SpotItemSchema } from '@stews/domains/spot/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import Zod, { ZodType } from 'zod'
import {
  AdjustedCurationDataset,
  CuratorCurationDataset,
} from './CurationDataset'
import {
  AdjustedCurationSegment,
  CuratorCurationSegment,
} from './CurationSegment'
import { CuratorInfo } from './CuratorInfo'
import { arrayOfOneSchema } from './helpers'

export interface CuratorConfig {
  curatorInfo: CuratorInfo
  curationDatasets: Record<string, CuratorCurationDataset>
  curationSegments: ArrayOfAtLeastOne<CuratorCurationSegment>
}

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
  curationDatasets: Zod.record(
    Zod.object({
      datasetKey: Zod.string(),
      datasetType: Zod.string(),
      // todo improve from Zod.any()
      datasetItems: Zod.array(Zod.any()),
    })
  ),
  curationSegments: arrayOfOneSchema(
    Zod.union([
      curationSegmentSchema(MusicItemSchema),
      curationSegmentSchema(SpotItemSchema),
    ])
  ),
})

function curationSegmentSchema<SegmentItemSchema extends ZodType>(
  segmentItemSchema: SegmentItemSchema
) {
  return Zod.object({
    segmentKey: Zod.string(),
    segmentLabel: Zod.string(),
    segmentDataset: Zod.string(),
    segmentViews: arrayOfOneSchema(
      Zod.object({
        viewId: Zod.string(),
        viewLabel: Zod.string(),
        viewFilter: Zod.string(),
      })
    ),
  })
}

export interface AdjustedCuratorConfig {
  curatorInfo: CuratorInfo
  curationDatasets: Record<string, AdjustedCurationDataset>
  curationSegments: ArrayOfAtLeastOne<AdjustedCurationSegment>
}
