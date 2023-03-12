import { Page } from '@stews/components/Page'
import { CurationView, CuratorInfo } from '@stews/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { SortSelect } from './components/SortSelect'
import {
  CurationViewSelectOption,
  ViewSortOrderOptionConfig,
  ViewSortOrderSelectOption,
} from './data'
import { useViewSortOrderOptions } from './hooks/useViewSortOrderOptions'
import cssModule from './CurationPageBase.module.scss'
import { ViewSelectBaseDataProps } from './components/ViewSelect'

interface CurationPageBaseProps<
  CurationItem extends object,
  CustomViewSelectProps
> extends CurationPageBaseDataProps<CurationItem>,
    CurationPageBaseConfigProps<CurationItem, CustomViewSelectProps> {}

export interface CurationPageBaseDataProps<CurationItem extends object> {
  curatorInfo: CuratorInfo
  curationViews: ArrayOfAtLeastOne<CurationView>
  curationItems: Array<CurationItem>
  viewSortOrderConfig: ArrayOfAtLeastOne<
    ViewSortOrderOptionConfig<CurationItem>
  >
}

export interface CurationPageBaseConfigProps<
  CurationItem extends object,
  CustomViewSelectProps
> {
  ViewSelect: FunctionComponent<ViewSelectProps<CustomViewSelectProps>>
  customViewSelectProps: CustomViewSelectProps
  ProfileBopper: FunctionComponent<ProfileBopperProps>
}

type ViewSelectProps<CustomViewSelectProps> = ViewSelectBaseDataProps &
  CustomViewSelectProps

type ProfileBopperProps = Pick<
  CurationPageBaseProps<object, unknown>,
  'curatorInfo'
>

export function CurationPageBase<
  CurationItem extends object,
  CustomViewSelectProps
>(props: CurationPageBaseProps<CurationItem, CustomViewSelectProps>) {
  const {
    viewSortOrderConfig,
    curationViews,
    ViewSelect,
    customViewSelectProps,
    ProfileBopper,
    curatorInfo,
  } = props
  const { viewSortOrderOptions } = useViewSortOrderOptions({
    viewSortOrderConfig,
  })
  const [pageState, setPageState] = useState<{
    curationView: CurationViewSelectOption
    viewSortOrder: ViewSortOrderSelectOption<CurationItem>
  }>({
    curationView: curationViews[0],
    viewSortOrder: viewSortOrderOptions[0],
  })
  return (
    <Page>
      <div className={cssModule.pageHeader}>
        <div className={cssModule.viewSelectContainer}>
          <ViewSelect
            optionList={curationViews}
            selectedOption={pageState.curationView}
            selectOption={(nextCurationView) => {
              setPageState((currentPageState) => ({
                ...currentPageState,
                curationView: nextCurationView,
              }))
            }}
            {...customViewSelectProps}
          />
        </div>
        <div className={cssModule.actionContainer}>
          <ProfileBopper curatorInfo={curatorInfo} />
        </div>
      </div>
      <div className={cssModule.pageSubHeader}>
        <div className={cssModule.sortSelectContainer}>
          <SortSelect
            optionList={viewSortOrderOptions}
            selectedOption={pageState.viewSortOrder}
            selectOption={(nextViewSortOrder) => {
              setPageState((currentPageState) => ({
                ...currentPageState,
                viewSortOrder: nextViewSortOrder,
              }))
            }}
          />
        </div>
      </div>
    </Page>
  )
}
