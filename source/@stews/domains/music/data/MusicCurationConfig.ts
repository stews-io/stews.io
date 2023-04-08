import {
  AdjustedCurationCuratorConfig,
  CurationConfigBase,
  CurationCuratorConfig,
} from '@stews/data/CuratorConfig'
import { MusicItem } from './MusicItem'

export interface MusicCurationConfig
  extends CurationConfigBase<'music', MusicItem> {}

export type MusicCurationCuratorConfig =
  CurationCuratorConfig<MusicCurationConfig>

export type AdjustedMusicCurationCuratorConfig =
  AdjustedCurationCuratorConfig<MusicCurationConfig>

// export type MusicCurationPageConfig = CurationPageConfig<MusicCurationConfig>

// export const musicCurationPageConfig: MusicCurationPageConfig = {
//   ItemDisplay: MusicItemDisplay,
//   curationType: 'music',
//   viewSortConfig: [
//     {
//       fieldKey: 'musicTitle',
//       fieldType: 'string',
//       sortLabelBase: 'title',
//     },
//     {
//       fieldKey: 'musicArtist',
//       fieldType: 'orderedStringSet',
//       sortLabelBase: 'artist',
//     },
//     {
//       fieldKey: 'musicYear',
//       fieldType: 'number',
//       sortLabelBase: 'year',
//     },
//   ],
//   getItemSearchSpace: (someMusicItem) =>
//     `${someMusicItem.musicTitle},${someMusicItem.musicArtist.join(
//       ','
//     )},${someMusicItem.musicStyles.join(',')},${
//       someMusicItem.musicYear
//     },${`${someMusicItem.recordingContext.join('/')} ${
//       someMusicItem.sourceType === 'collection'
//         ? someMusicItem.collectionType
//         : someMusicItem.sourceType
//     }${someMusicItem.musicType === 'clip' ? ' clip' : ''}`}`,
// }
