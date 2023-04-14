import Zod from 'zod'

const MusicItemSchemaBase = Zod.object({
  itemId: Zod.number(),
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

export const MusicItemSchema = Zod.union([
  ClipMusicItemSchema,
  SongMusicItem,
  CollectionMusicItem,
  MixMusicItem,
])
