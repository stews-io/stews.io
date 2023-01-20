export interface MusicCurationsPageState {
  pageRoute: string;
  pageIndex: number;
  dataView: string;
  sortOrder:
    | "titleAscending"
    | "titleDescending"
    | "artistAscending"
    | "artistDescending"
    | "yearAscending"
    | "yearDescending";
  searchQuery: string;
}

export type StringPermutation<SomeString extends string> = {
  [SomeStringValue in SomeString]: [
    SomeStringValue,
    ...(Exclude<SomeString, SomeStringValue> extends never
      ? []
      : StringPermutation<Exclude<SomeString, SomeStringValue>>)
  ];
}[SomeString];

export type MusicItem<MusicYear extends string | number = string> =
  | ClippedMusicItem<MusicYear>
  | WholeMusicItem<MusicYear>;

interface ClippedMusicItem<MusicYear extends string | number>
  extends MusicItemBase<"clip", MusicYear>,
    Pick<SongMusicItem<MusicYear> | MixMusicItem<MusicYear>, "sourceType"> {}

type WholeMusicItem<MusicYear extends string | number> =
  | SongMusicItem<MusicYear>
  | CollectionMusicItem<MusicYear>
  | MixMusicItem<MusicYear>;

interface SongMusicItem<MusicYear extends string | number>
  extends SourceMusicItemBase<"track", MusicYear> {}

type CollectionMusicItem<MusicYear extends string | number> =
  | SingleMusicItem<MusicYear>
  | EpMusicItem<MusicYear>
  | AlbumMusicItem<MusicYear>
  | CompilationMusicItem<MusicYear>
  | SoundtrackMusicItem<MusicYear>;

interface SingleMusicItem<MusicYear extends string | number>
  extends CollectionMusicItemBase<"single", MusicYear> {}

interface EpMusicItem<MusicYear extends string | number>
  extends CollectionMusicItemBase<"ep", MusicYear> {}

interface AlbumMusicItem<MusicYear extends string | number>
  extends CollectionMusicItemBase<"album", MusicYear> {}

interface CompilationMusicItem<MusicYear extends string | number>
  extends CollectionMusicItemBase<"compilation", MusicYear> {}

interface SoundtrackMusicItem<MusicYear extends string | number>
  extends CollectionMusicItemBase<"soundtrack", MusicYear> {}

interface CollectionMusicItemBase<
  CollectionType extends string,
  MusicYear extends string | number
> extends SourceMusicItemBase<"collection", MusicYear> {
  collectionType: CollectionType;
}

interface MixMusicItem<MusicYear extends string | number>
  extends SourceMusicItemBase<"mix", MusicYear> {}

interface SourceMusicItemBase<
  SourceType extends string,
  MusicYear extends string | number
> extends MusicItemBase<"source", MusicYear> {
  sourceType: SourceType;
}

interface MusicItemBase<
  MusicItemType extends string,
  MusicYear extends string | number
> {
  musicId: number;
  musicType: MusicItemType;
  musicThumbnailHref: string;
  musicTitle: string;
  musicYear: MusicYear;
  musicArtist: ArrayOfAtLeastOne<string>;
  musicStyles: ArrayOfAtLeastOne<string>;
  recordingContext: ArrayOfAtLeastOne<"studio" | "live" | "concert">;
  externalLinks: ArrayOfAtLeastOne<{
    linkLabel: string;
    linkHref: string;
  }>;
}

export interface MusicView {
  viewName: string;
  viewFilter: string;
}

type ArrayOfAtLeastOne<T> = [T, ...Array<T>];
