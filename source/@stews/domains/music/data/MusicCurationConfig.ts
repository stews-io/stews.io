import {
  AdjustedCurationConfig,
  CuratorCurationConfig,
} from '@stews/data/CuratorConfig'
import { MusicItem } from './MusicItem'

export type MusicCuratorCurationConfig = CuratorCurationConfig<
  'music',
  MusicItem
>

export type MusicAdjustedCurationConfig = AdjustedCurationConfig<'music'>
