import { CurationPageBaseDataProps } from '@stews/components/CurationPage'
import {
  AdjustedMusicCurationCuratorConfig,
  MusicCurationCuratorConfig,
} from '@stews/domains/music/data'
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

const MusicItemSchemaBase = Zod.object({
  musicId: Zod.number(),
  musicThumbnailHref: Zod.string(),
  musicTitle: Zod.string(),
  musicYear: Zod.number(),
  musicArtist: Zod.tuple([Zod.string()]).rest(Zod.string()),
  musicStyles: Zod.tuple([Zod.string()]).rest(Zod.string()),
  recordingContext: Zod.tuple([
    Zod.union([
      Zod.literal('studio'),
      Zod.literal('live'),
      Zod.literal('concert'),
    ]),
  ]).rest(
    Zod.union([
      Zod.literal('studio'),
      Zod.literal('live'),
      Zod.literal('concert'),
    ])
  ),
  externalLinks: Zod.tuple([
    Zod.object({
      linkLabel: Zod.string(),
      linkHref: Zod.string(),
    }),
  ]).rest(
    Zod.object({
      linkLabel: Zod.string(),
      linkHref: Zod.string(),
    })
  ),
})

const SourceMusicItemSchemaBase = MusicItemSchemaBase.extend({
  musicType: Zod.literal('source'),
})

const SongMusicItem = SourceMusicItemSchemaBase.extend({
  sourceType: Zod.literal('track'),
})

const MixMusicItem = SourceMusicItemSchemaBase.extend({
  sourceType: Zod.literal('mix'),
})

const CollectionMusicItemSchemaBase = SourceMusicItemSchemaBase.extend({
  sourceType: Zod.literal('collection'),
})

const CollectionMusicItem = Zod.union([
  CollectionMusicItemSchemaBase.extend({
    collectionType: Zod.literal('single'),
  }),
  CollectionMusicItemSchemaBase.extend({
    collectionType: Zod.literal('ep'),
  }),
  CollectionMusicItemSchemaBase.extend({
    collectionType: Zod.literal('album'),
  }),
  CollectionMusicItemSchemaBase.extend({
    collectionType: Zod.literal('compilation'),
  }),
  CollectionMusicItemSchemaBase.extend({
    collectionType: Zod.literal('soundtrack'),
  }),
])

const ClippedMusicItemSchemaBase = MusicItemSchemaBase.extend({
  musicType: Zod.literal('clip'),
})

const SongClipMusicItemSchema = ClippedMusicItemSchemaBase.extend(
  SongMusicItem.pick({
    sourceType: true,
  }).shape
)

const MixClipMusicItemSchema = ClippedMusicItemSchemaBase.extend(
  MixMusicItem.pick({
    sourceType: true,
  }).shape
)

const ClipMusicItemSchema = Zod.union([
  SongClipMusicItemSchema,
  MixClipMusicItemSchema,
])

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
        viewType: Zod.literal('custom'),
        customType: Zod.literal('filter'),
        viewId: Zod.number(),
        viewLabel: Zod.string(),
        viewFilter: Zod.string(),
      })
    ),
    curationItems: Zod.array(
      Zod.union([
        ClipMusicItemSchema,
        SongMusicItem,
        CollectionMusicItem,
        MixMusicItem,
      ])
    ),
  }),
})

export type CurationCuratorConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<SomeCurationConfig, 'curationType' | 'curationItems'> & {
  curationViews: Array<CuratorFilterCurationView>
}

interface CuratorFilterCurationView
  extends Omit<FilterCurationView, 'viewItemIds'> {
  viewFilter: string
}

export interface AdjustedCuratorConfig {
  curatorInfo: CuratorInfo
  musicCurationConfig: AdjustedMusicCurationCuratorConfig
}

export type AdjustedCurationCuratorConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<SomeCurationConfig, 'curationType' | 'curationViews' | 'curationItems'>
