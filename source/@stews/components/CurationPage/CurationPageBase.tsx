import { Page } from '@stews/components/Page'
import { AdjustedCurationView, CuratorInfo } from '@stews/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { AsyncDataState } from '@stews/hooks/useAsyncData'
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
  useCurationPageState,
} from './hooks'
import cssModule from './CurationPageBase.module.scss'

interface CurationPageBaseProps<CurationItem extends object>
  extends CurationPageBaseDataProps<CurationItem>,
    CurationPageBaseConfigProps {}

export interface CurationPageBaseDataProps<CurationItem extends object> {
  curationType: string
  curatorInfo: CuratorInfo
  curationViews: ArrayOfAtLeastOne<AdjustedCurationView>
  viewSortConfig: ArrayOfAtLeastOne<ViewSortOptionConfig<CurationItem>>
  ItemDisplay: FunctionComponent<ItemDisplayProps<CurationItem>>
  getItemSearchSpace: (someCurationItem: CurationItem) => string
  fetchCurationItemsMapState: AsyncDataState<Record<string, CurationItem>>
}

export interface ItemDisplayProps<CurationItem extends object> {
  someItem: CurationItem
}

export interface CurationPageBaseConfigProps {
  ViewSelect: FunctionComponent<ViewSelectProps>
  ProfileBopper: FunctionComponent<ProfileBopperProps>
}

type ViewSelectProps = ViewSelectBaseDataProps &
  Pick<CurationPageBaseDataProps<object>, 'curationType'>

type ProfileBopperProps = Pick<CurationPageBaseProps<object>, 'curatorInfo'>

export function CurationPageBase<CurationItem extends object>(
  props: CurationPageBaseProps<CurationItem>
) {
  const {
    viewSortConfig,
    curationViews,
    ItemDisplay,
    getItemSearchSpace,
    fetchCurationItemsMapState,
    curationType,
    curatorInfo,
    ViewSelect,
    ProfileBopper,
  } = props
  const { viewSortOptions } = useViewSortOptions({
    viewSortConfig,
  })
  const [curationPageState, setCurationPageState] = useCurationPageState({
    curationViews,
    viewSortOptions,
  })
  const { viewPageItemElements, viewPageNavigationElement } = useViewPage({
    pageItemSize: 6,
    ItemDisplay,
    getItemSearchSpace,
    fetchCurationItemsMapState,
    curationPageState,
    setPageIndexToPrevious: (currentAdjustedPageIndex) => {
      setCurationPageState((currentCurationPageState) => ({
        ...currentCurationPageState,
        viewPageIndex: currentAdjustedPageIndex - 1,
      }))
    },
    setPageIndexToNext: (currentAdjustedPageIndex) => {
      setCurationPageState((currentCurationPageState) => ({
        ...currentCurationPageState,
        viewPageIndex: currentAdjustedPageIndex + 1,
      }))
    },
  })
  const { pageHeaderContainerRef } = useStickyPageHeaderWorkaround()
  return (
    <Page
      pageAriaHeader={`${curatorInfo.curatorName}: ${curationType} curation`}
    >
      <div
        ref={pageHeaderContainerRef}
        className={cssModule.pageHeaderContainer}
      >
        <div className={cssModule.pageHeader}>
          <div className={cssModule.viewSelectContainer}>
            <ViewSelect
              viewAriaHeader={`${curationType} view: ${curationPageState.curationView.viewLabel}`}
              curationType={curationType}
              optionList={curationViews}
              selectedOption={curationPageState.curationView}
              selectOption={(nextCurationView) => {
                setCurationPageState((currentCurationPageState) => ({
                  ...currentCurationPageState,
                  curationView: nextCurationView,
                  viewPageIndex: 0,
                }))
              }}
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
            selectedOption={curationPageState.viewSortOption}
            selectOption={(nextViewSortOption) => {
              setCurationPageState((currentCurationPageState) => ({
                ...currentCurationPageState,
                viewSortOption: nextViewSortOption,
                viewPageIndex: 0,
              }))
            }}
          />
        </div>
        <div className={cssModule.viewSearchInputContainer}>
          <ViewSearchInput
            curationType={curationType}
            value={curationPageState.viewSearchQuery}
            onInput={(someInputEvent) => {
              const nextViewSearch = someInputEvent.currentTarget.value
              setCurationPageState((currentCurationPageState) => ({
                ...currentCurationPageState,
                viewSearchQuery: nextViewSearch,
                viewPageIndex: 0,
              }))
            }}
            resetValue={() => {
              setCurationPageState((currentCurationPageState) => ({
                ...currentCurationPageState,
                viewSearchQuery: '',
                viewPageIndex: 0,
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
