import { CurationItemBase } from '@stews/data/CurationItem'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'

export type MusicItem = ClippedMusicItem | WholeMusicItem

interface ClippedMusicItem
  extends MusicItemBase<'clip'>,
    Pick<SongMusicItem | MixMusicItem, 'sourceType'> {}

type WholeMusicItem = SongMusicItem | CollectionMusicItem | MixMusicItem

interface SongMusicItem extends SourceMusicItemBase<'track'> {}

type CollectionMusicItem =
  | SingleMusicItem
  | EpMusicItem
  | AlbumMusicItem
  | CompilationMusicItem
  | SoundtrackMusicItem

interface SingleMusicItem extends CollectionMusicItemBase<'single'> {}

interface EpMusicItem extends CollectionMusicItemBase<'ep'> {}

interface AlbumMusicItem extends CollectionMusicItemBase<'album'> {}

interface CompilationMusicItem extends CollectionMusicItemBase<'compilation'> {}

interface SoundtrackMusicItem extends CollectionMusicItemBase<'soundtrack'> {}

interface CollectionMusicItemBase<CollectionType extends string>
  extends SourceMusicItemBase<'collection'> {
  collectionType: CollectionType
}

interface MixMusicItem extends SourceMusicItemBase<'mix'> {}

interface SourceMusicItemBase<SourceType extends string>
  extends MusicItemBase<'source'> {
  sourceType: SourceType
}

interface MusicItemBase<MusicItemType extends string> extends CurationItemBase {
  musicType: MusicItemType
  musicThumbnailHref: string
  musicTitle: string
  musicYear: number
  musicArtist: ArrayOfAtLeastOne<string>
  musicTags: ArrayOfAtLeastOne<string>
  recordingContext: ArrayOfAtLeastOne<'studio' | 'live' | 'concert'>
  externalLinks: ArrayOfAtLeastOne<{
    linkLabel: string
    linkHref: string
  }>
}
