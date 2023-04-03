import {
  CurationConfigBase,
  CurationPageConfig,
  CurationCuratorConfig,
} from '@stews/data/CurationConfig'
import { MusicItem } from './MusicItem'
import { MusicItemDisplay } from './MusicItemDisplay'

export interface MusicCurationConfig
  extends CurationConfigBase<'music', MusicItem> {}

export type MusicCurationCuratorConfig =
  CurationCuratorConfig<MusicCurationConfig>

export type MusicCurationPageConfig = CurationPageConfig<MusicCurationConfig>

export const musicCurationPageConfig: MusicCurationPageConfig = {
  ItemDisplay: MusicItemDisplay,
  curationType: 'music',
  curationLabel: 'music',
  viewSortConfig: [
    {
      fieldKey: 'musicTitle',
      fieldType: 'string',
      sortLabelBase: 'title',
    },
    {
      fieldKey: 'musicArtist',
      fieldType: 'orderedStringSet',
      sortLabelBase: 'artist',
    },
    {
      fieldKey: 'musicYear',
      fieldType: 'number',
      sortLabelBase: 'year',
    },
  ],
  getItemSearchSpace: (someMusicItem) =>
    `${someMusicItem.musicTitle},${someMusicItem.musicArtist.join(
      ','
    )},${someMusicItem.musicStyles.join(',')},${
      someMusicItem.musicYear
    },${`${someMusicItem.recordingContext.join('/')} ${
      someMusicItem.sourceType === 'collection'
        ? someMusicItem.collectionType
        : someMusicItem.sourceType
    }${someMusicItem.musicType === 'clip' ? ' clip' : ''}`}`,
}
