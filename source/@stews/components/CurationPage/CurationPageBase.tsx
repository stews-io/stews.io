import { Page } from '@stews/components/Page'
import { CurationView, CuratorInfo } from '@stews/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import {
  ViewSearchInput,
  ViewSelectBaseDataProps,
  ViewSortSelect,
} from './components'
import {
  CurationViewSelectOption,
  ViewSortOptionConfig,
  ViewSortSelectOption,
} from './data'
import { useViewSortOptions } from './hooks'
import cssModule from './CurationPageBase.module.scss'

interface CurationPageBaseProps<
  CurationItem extends object,
  CustomViewSelectProps
> extends CurationPageBaseDataProps<CurationItem>,
    CurationPageBaseConfigProps<CustomViewSelectProps> {}

export interface CurationPageBaseDataProps<CurationItem extends object> {
  curatorInfo: CuratorInfo
  curationViews: ArrayOfAtLeastOne<CurationView>
  curationItems: Array<CurationItem>
  viewSortConfig: ArrayOfAtLeastOne<ViewSortOptionConfig<CurationItem>>
  CurationItemDisplay: FunctionComponent<CurationItem>
}

export interface CurationPageBaseConfigProps<CustomViewSelectProps> {
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
    viewSortConfig,
    curationViews,
    ViewSelect,
    customViewSelectProps,
    ProfileBopper,
    curatorInfo,
    curationItems,
    CurationItemDisplay,
  } = props
  const { viewSortOptions } = useViewSortOptions({
    viewSortConfig,
  })
  const [pageState, setPageState] = useState<{
    curationView: CurationViewSelectOption
    viewSort: ViewSortSelectOption<CurationItem>
    viewSearch: string
  }>({
    curationView: curationViews[0],
    viewSort: viewSortOptions[0],
    viewSearch: '',
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
      <div className={cssModule.viewHeader}>
        <div className={cssModule.viewSortSelectContainer}>
          <ViewSortSelect
            optionList={viewSortOptions}
            selectedOption={pageState.viewSort}
            selectOption={(nextViewSort) => {
              setPageState((currentPageState) => ({
                ...currentPageState,
                viewSort: nextViewSort,
              }))
            }}
          />
        </div>
        <div className={cssModule.viewSearchInputContainer}>
          <ViewSearchInput
            value={pageState.viewSearch}
            onChange={(someChangeEvent) => {
              const nextViewSearch = someChangeEvent.currentTarget.value
              setPageState((currentPageState) => ({
                ...currentPageState,
                viewSearch: nextViewSearch,
              }))
            }}
          />
        </div>
      </div>
      <div className={cssModule.viewPageList}>
        {curationItems.map((someCurationItem, itemIndex) => (
          <CurationItemDisplay key={itemIndex} {...someCurationItem} />
        ))}
      </div>
    </Page>
  )
}
