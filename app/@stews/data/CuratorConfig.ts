import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import Zod from 'zod'
import {
  AdjustedCurationDataset,
  CuratorCurationDataset,
} from './CurationDataset'
import {
  AdjustedCurationSegment,
  ClientCurationSegment,
  CuratorCurationSegment,
} from './CurationSegment'
import { CuratorInfo } from './CuratorInfo'
import { arrayOfOneSchema } from './helpers'
import { CurationItem } from './CurationItem'

export interface CuratorConfig {
  curatorInfo: CuratorInfo
  curationDatasets: Record<string, CuratorCurationDataset<any>>
  curationSegments: ArrayOfAtLeastOne<CuratorCurationSegment>
}

export const CuratorConfigSchema = Zod.object({
  curatorInfo: Zod.object({
    curatorName: Zod.string(),
    curatorLocation: Zod.string(),
    curatorStatus: Zod.string(),
    curatorEmail: Zod.string(),
    curatorLinks: Zod.array(
      Zod.object({
        linkType: Zod.union([
          Zod.literal('website'),
          Zod.literal('github'),
          Zod.literal('twitter'),
          Zod.literal('instagram'),
          Zod.literal('email'),
        ]),
        linkHref: Zod.string(),
      })
    ),
  }),
  curationDatasets: Zod.record(
    Zod.object({
      datasetId: Zod.string(),
      datasetType: Zod.string(),
      datasetItems: Zod.array(Zod.any()),
      // todo: figure out how to verify itemId exists without failing validation
      // datasetItems: Zod.array(
      //   Zod.object({
      //     itemId: Zod.number(),
      //   }).nonstrict()
      // ),
      datasetSortConfig: arrayOfOneSchema(
        Zod.object({
          // todo: validate fieldKey is keyof curation item
          fieldKey: Zod.string(),
          fieldType: Zod.union([
            Zod.literal('string'),
            Zod.literal('number'),
            Zod.literal('orderedStringSet'),
          ]),
          sortLabelBase: Zod.string(),
        })
      ),
    })
  ),
  curationSegments: arrayOfOneSchema(
    Zod.object({
      segmentId: Zod.string(),
      segmentLabel: Zod.string(),
      segmentDatasetId: Zod.string(),
      segmentFilter: Zod.union([Zod.string(), Zod.null()]),
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
  curationDatasets: Record<string, AdjustedCurationDataset<any>>
  curationSegments: ArrayOfAtLeastOne<AdjustedCurationSegment>
}

export interface ClientCuratorConfig {
  curatorInfo: CuratorInfo
  curationSegments: ArrayOfAtLeastOne<ClientCurationSegment<CurationItem>>
}
