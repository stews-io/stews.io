import { CurationPageBaseDataProps } from '@stews/components/CurationPage'
import {
  AdjustedMusicCurationCuratorConfig,
  MusicCurationCuratorConfig,
} from '@stews/domains/music/data'
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
