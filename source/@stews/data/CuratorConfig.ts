import { CurationPageBaseDataProps } from '@stews/components/CurationPage'
import {
  AdjustedMusicCurationCuratorConfig,
  MusicCurationCuratorConfig,
} from '@stews/domains/music/data'
import { MusicItemSchema } from '@stews/domains/music/data/MusicItemSchema'
import Zod from 'zod'
import { FilterCurationView } from './CurationView'
import { CuratorInfo } from './CuratorInfo'

export interface CurationConfigBase<
  CurationType extends string,
  CurationItem extends object
> extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    | 'ItemDisplay'
    | 'viewSortConfig'
    | 'getItemSearchSpace'
    | 'curationType'
    | 'curationViews'
  > {
  curationType: CurationType
  curationItems: Array<CurationItem>
}

export interface CuratorConfig {
  curatorInfo: CuratorInfo
  musicCurationConfig: MusicCurationCuratorConfig
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
    curationViews: Zod.array(
      Zod.object({
        viewId: Zod.number(),
        viewLabel: Zod.string(),
        viewFilter: Zod.string(),
      })
    ),
    curationItems: Zod.array(MusicItemSchema),
  }),
})

export type CurationCuratorConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<SomeCurationConfig, 'curationType' | 'curationItems'> & {
  curationViews: Array<CuratorFilterCurationView>
}

interface CuratorFilterCurationView
  extends Pick<FilterCurationView, 'viewId' | 'viewLabel'> {
  viewFilter: string
}

export interface AdjustedCuratorConfig {
  curatorInfo: CuratorInfo
  musicCurationConfig: AdjustedMusicCurationCuratorConfig
}

export type AdjustedCurationCuratorConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<SomeCurationConfig, 'curationType' | 'curationViews'>
