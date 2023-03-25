import { Page } from '@stews/components/Page'
import { CurationView, CuratorInfo } from '@stews/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { FunctionComponent } from 'preact'
import {
  ViewSearchInput,
  ViewSelectBaseDataProps,
  ViewSortSelect,
} from './components'
import {
  useStickyPageHeaderWorkaround,
  useViewPage,
  useViewSortOptions,
  ViewSortOptionConfig,
  useViewState,
} from './hooks'
import cssModule from './CurationPageBase.module.scss'

interface CurationPageBaseProps<
  CurationItem extends object,
  CustomViewSelectProps
> extends CurationPageBaseDataProps<CurationItem>,
    CurationPageBaseConfigProps<CustomViewSelectProps> {}

export interface CurationPageBaseDataProps<CurationItem extends object> {
  curationLabel: string
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
    curatorInfo,
    curationLabel,
    ViewSelect,
    customViewSelectProps,
    ProfileBopper,
    ItemDisplay,
    getItemSearchSpace,
    curationItems,
  } = props
  const { viewSortOptions } = useViewSortOptions({
    viewSortConfig,
  })
  const [viewState, setViewState] = useViewState({
    curationViews,
    viewSortOptions,
  })
  const { viewPageItemElements, viewPageNavigationElement } = useViewPage({
    ItemDisplay,
    getItemSearchSpace,
    curationItems,
    viewState,
    pageItemSize: 6,
    setPageIndexToPrevious: (currentAdjustedPageIndex) => {
      setViewState((currentViewState) => ({
        ...currentViewState,
        pageIndex: currentAdjustedPageIndex - 1,
      }))
    },
    setPageIndexToNext: (currentAdjustedPageIndex) => {
      setViewState((currentViewState) => ({
        ...currentViewState,
        pageIndex: currentAdjustedPageIndex + 1,
      }))
    },
  })
  const { pageHeaderContainerRef } = useStickyPageHeaderWorkaround()
  return (
    <Page
      pageAccessibilityHeader={`${curatorInfo.curatorName}: ${curationLabel} curation`}
    >
      <div
        ref={pageHeaderContainerRef}
        className={cssModule.pageHeaderContainer}
      >
        <div className={cssModule.pageHeader}>
          <div className={cssModule.viewSelectContainer}>
            <ViewSelect
              curationLabel={curationLabel}
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
      </div>
      <div className={cssModule.viewHeaderContainer}>
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
            curationLabel={curationLabel}
            value={viewState.viewSearch}
            onInput={(someInputEvent) => {
              const nextViewSearch = someInputEvent.currentTarget.value
              setViewState((currentViewState) => ({
                ...currentViewState,
                viewSearch: nextViewSearch,
                pageIndex: 0,
              }))
            }}
            resetValue={() => {
              setViewState((currentViewState) => ({
                ...currentViewState,
                viewSearch: '',
                pageIndex: 0,
              }))
            }}
          />
        </div>
      </div>
      <div className={cssModule.viewPageItemsContainer}>
        {viewPageItemElements}
      </div>
      {viewPageNavigationElement}
      <div className={cssModule.pageFooterSpacer} />
    </Page>
  )
}
