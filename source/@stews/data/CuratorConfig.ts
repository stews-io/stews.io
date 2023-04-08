import {
  MusicAdjustedCurationConfig,
  MusicCuratorCurationConfig,
} from '@stews/domains/music/data'
import { MusicItemSchema } from '@stews/domains/music/data/MusicItemSchema'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import Zod from 'zod'
import { AdjustedCurationView, CuratorCurationView } from './CurationView'
import { CuratorInfo } from './CuratorInfo'

export interface CuratorConfig {
  curatorInfo: CuratorInfo
  musicCurationConfig: MusicCuratorCurationConfig
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
  musicCurationConfig: Zod.object({
    curationType: Zod.literal('music'),
    curationViews: Zod.tuple([
      Zod.object({
        viewId: Zod.number(),
        viewLabel: Zod.string(),
        viewFilter: Zod.string(),
      }),
    ]).rest(
      Zod.object({
        viewId: Zod.number(),
        viewLabel: Zod.string(),
        viewFilter: Zod.string(),
      })
    ),
    curationItems: Zod.array(MusicItemSchema),
  }),
})

export interface CuratorCurationConfig<
  CurationType extends string,
  CurationItem
> extends CurationConfigBase<CurationType, CuratorCurationView> {
  curationItems: Array<CurationItem>
}

export interface AdjustedCuratorConfig {
  curatorInfo: CuratorInfo
  musicCurationConfig: MusicAdjustedCurationConfig
}

export interface AdjustedCurationConfig<CurationType extends string>
  extends CurationConfigBase<CurationType, AdjustedCurationView> {}

interface CurationConfigBase<CurationType extends string, CurationView> {
  curationType: CurationType
  curationViews: ArrayOfAtLeastOne<CurationView>
}
