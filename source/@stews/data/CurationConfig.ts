import { CurationPageBaseDataProps } from '@stews/components/CurationPage'
import { MusicCurationCuratorConfig } from '@stews/domains/music/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { DefaultCurationView, FilterCurationView } from './CurationView'
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

export type CurationPageConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<
  SomeCurationConfig,
  | 'curationType'
  | 'ItemDisplay'
  | 'viewSortConfig'
  | 'getItemSearchSpace'
  | 'curationType'
>

export interface CuratorConfig<
  Curations extends ArrayOfAtLeastOne<MusicCurationCuratorConfig>
> {
  curatorInfo: CuratorInfo
  curations: Curations
}

export type CurationCuratorConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<SomeCurationConfig, 'curationType' | 'curationItems'> & {
  // curationViews: Array<
  //   Exclude<SomeCurationConfig['curationViews'][number], DefaultCurationView>
  // >
  curationViews: Array<CuratorFilterCurationView>
}

interface CuratorFilterCurationView
  extends Omit<FilterCurationView, 'viewItemIds'> {
  viewFilter: string
}
