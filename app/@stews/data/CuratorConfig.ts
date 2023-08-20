import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import Zod from 'zod'
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
      datasetItems: Zod.array(Zod.any()),
      // todo: figure out how to verify itemId exists without failing validation
      // datasetItems: Zod.array(
      //   Zod.object({
      //     itemId: Zod.number(),
      //   }).nonstrict()
      // ),
    })
  ),
  curationSegments: arrayOfOneSchema(
    Zod.object({
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
  ),
})

export interface AdjustedCuratorConfig {
  curatorInfo: CuratorInfo
  curationDatasets: Record<string, AdjustedCurationDataset>
  curationSegments: ArrayOfAtLeastOne<AdjustedCurationSegment>
}
