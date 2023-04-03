import { CurationPageBaseDataProps } from '@stews/components/CurationPage'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { DefaultCurationView } from './CurationView'
import { CuratorInfo } from './CuratorInfo'

export interface CurationConfigBase<
  CurationType extends string,
  CurationItem extends object
> extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    | 'ItemDisplay'
    | 'viewSortConfig'
    | 'getItemSearchSpace'
    | 'curationLabel'
    | 'curationViews'
    | 'curationItems'
  > {
  curationType: CurationType
}

export type CurationPageConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<
  SomeCurationConfig,
  | 'curationType'
  | 'ItemDisplay'
  | 'viewSortConfig'
  | 'getItemSearchSpace'
  | 'curationLabel'
>

export interface CuratorConfig<
  Curations extends ArrayOfAtLeastOne<CurationCuratorConfig<any>>
> {
  curatorInfo: CuratorInfo
  curations: Curations
}

export type CurationCuratorConfig<
  SomeCurationConfig extends CurationConfigBase<any, any>
> = Pick<SomeCurationConfig, 'curationType' | 'curationItems'> & {
  curationViews: Array<
    Exclude<SomeCurationConfig['curationViews'][number], DefaultCurationView>
  >
}
