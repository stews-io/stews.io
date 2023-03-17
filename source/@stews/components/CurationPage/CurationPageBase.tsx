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
  useViewSortOptions,
  ViewSortOption,
  ViewSortOptionConfig,
} from './hooks'
import cssModule from './CurationPageBase.module.scss'
import { useViewPage } from './hooks/useViewPage'

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
  ItemDisplay: FunctionComponent<ItemDisplayProps<CurationItem>>
  getItemSearchSpace: (someCurationItem: CurationItem) => string
}

export interface ItemDisplayProps<CurationItem extends object> {
  someItem: CurationItem
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
    ItemDisplay,
    getItemSearchSpace,
    curationItems,
  } = props
  const { viewSortOptions } = useViewSortOptions({
    viewSortConfig,
  })
  const [viewState, setViewState] = useState<ViewState<CurationItem>>({
    curationView: curationViews[0],
    viewSort: viewSortOptions[0],
    viewSearch: '',
    pageIndex: 0,
  })
  const { viewPageItemElements, viewPageNavigationElement } = useViewPage({
    ItemDisplay,
    getItemSearchSpace,
    curationItems,
    viewState,
    pageItemSize: 6,
    setPageIndexToPrevious: () => {
      setViewState((currentViewState) => ({
        ...currentViewState,
        pageIndex: currentViewState.pageIndex - 1,
      }))
    },
    setPageIndexToNext: () => {
      setViewState((currentViewState) => ({
        ...currentViewState,
        pageIndex: currentViewState.pageIndex + 1,
      }))
    },
  })
  return (
    <Page>
      <div className={cssModule.pageHeader}>
        <div className={cssModule.viewSelectContainer}>
          <ViewSelect
            optionList={curationViews}
            selectedOption={viewState.curationView}
            selectOption={(nextCurationView) => {
              setViewState((currentViewState) => ({
                ...currentViewState,
                curationView: nextCurationView,
                pageIndex: 0,
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
            selectedOption={viewState.viewSort}
            selectOption={(nextViewSort) => {
              setViewState((currentViewState) => ({
                ...currentViewState,
                viewSort: nextViewSort,
                pageIndex: 0,
              }))
            }}
          />
        </div>
        <div className={cssModule.viewSearchInputContainer}>
          <ViewSearchInput
            value={viewState.viewSearch}
            onInput={(someInputEvent) => {
              const nextViewSearch = someInputEvent.currentTarget.value
              setViewState((currentViewState) => ({
                ...currentViewState,
                viewSearch: nextViewSearch,
                pageIndex: 0,
              }))
            }}
          />
        </div>
      </div>
      <div className={cssModule.viewPageItems}>{viewPageItemElements}</div>
      {viewPageNavigationElement}
    </Page>
  )
}

export interface ViewState<CurationItem extends object> {
  curationView: CurationView
  viewSort: ViewSortOption<CurationItem>
  viewSearch: string
  pageIndex: number
}
