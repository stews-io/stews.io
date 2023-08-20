import { Page } from '@stews/components/Page'
import { CurationItem } from '@stews/data/CurationItem'
import {
  AdjustedCurationSegment,
  AdjustedSegmentView,
} from '@stews/data/CurationSegment'
import { CuratorInfo } from '@stews/data/CuratorInfo'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { AsyncDataState } from '@stews/hooks/useAsyncData'
import { FunctionComponent } from 'preact'
import cssModule from './CurationPageBase.module.scss'
import {
  ProfileBopperBaseDataProps,
  ViewSearchInput,
  ViewSelectBaseDataProps,
  ViewSortSelect,
} from './components'
import {
  ViewSortOptionConfig,
  useCurationPageState,
  useStickyPageHeaderWorkaround,
  useViewPage,
  useViewSortOptions,
} from './hooks'
import { StateUpdater } from 'preact/hooks'
import { LinkButton } from '../Button'

interface CurationPageBaseProps<SomeCurationItem extends CurationItem>
  extends CurationPageBaseDataProps<SomeCurationItem>,
    CurationPageBaseConfigProps {}

export interface CurationPageBaseDataProps<
  SomeCurationItem extends CurationItem
> {
  curatorInfo: CuratorInfo
  curationSegments: ArrayOfAtLeastOne<AdjustedCurationSegment>
  viewSortConfig: ArrayOfAtLeastOne<ViewSortOptionConfig<SomeCurationItem>>
  ItemDisplay: FunctionComponent<ItemDisplayProps<SomeCurationItem>>
  getItemSearchSpace: (someCurationItem: SomeCurationItem) => string
  activeCurationSegment: AdjustedCurationSegment
  setActiveCurationSegment: StateUpdater<AdjustedCurationSegment>
}

export interface ItemDisplayProps<SomeCurationItem extends CurationItem> {
  someItem: SomeCurationItem
}

export interface CurationPageBaseConfigProps {
  ViewSelect: FunctionComponent<ViewSelectProps>
  ProfileBopper: FunctionComponent<ProfileBopperProps>
}

type ViewSelectProps = ViewSelectBaseDataProps &
  Pick<CurationPageBaseDataProps<CurationItem>, 'activeCurationSegment'>

type ProfileBopperProps = ProfileBopperBaseDataProps

export function CurationPageBase<SomeCurationItem extends CurationItem>(
  props: CurationPageBaseProps<SomeCurationItem>
) {
  const {
    viewSortConfig,
    activeCurationSegment,
    ItemDisplay,
    getItemSearchSpace,
    curatorInfo,
    curationSegments,
    ViewSelect,
    ProfileBopper,
    setActiveCurationSegment,
  } = props
  const { viewSortOptions } = useViewSortOptions({
    viewSortConfig,
  })
  const [curationPageState, setCurationPageState] = useCurationPageState({
    activeCurationSegment,
    viewSortOptions,
  })
  const { viewPageItemElements, viewPageNavigationElement } = useViewPage({
    pageItemSize: 6,
    activeCurationSegment,
    ItemDisplay,
    getItemSearchSpace,
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
      pageAriaHeader={`${curatorInfo.curatorName}: ${activeCurationSegment.segmentLabel} curation`}
    >
      <div
        ref={pageHeaderContainerRef}
        className={cssModule.pageHeaderContainer}
      >
        <div className={cssModule.pageHeader}>
          <div className={cssModule.viewSelectContainer}>
            <ViewSelect
              viewAriaHeader={`${activeCurationSegment.segmentLabel} view: ${curationPageState.curationView.viewLabel}`}
              activeCurationSegment={activeCurationSegment}
              optionList={activeCurationSegment.segmentViews}
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
            <ProfileBopper
              curatorInfo={curatorInfo}
              curationSegments={curationSegments}
              activeCurationSegment={activeCurationSegment}
              selectCurationSegment={(nextCurationSegment) => {
                setActiveCurationSegment(nextCurationSegment)
              }}
            />
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
            activeCurationSegment={activeCurationSegment}
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
      <div className={cssModule.generalFooterContainer}>
        <div className={cssModule.generalFooter}>
          <LinkButton
            className={cssModule.footerLinkButton}
            ariaLabel="todo"
            ariaDescription="todo"
            href="https://stews.io"
            target={'_blank'}
          >
            stews.io
          </LinkButton>
        </div>
      </div>
      <div className={cssModule.pageFooterSpacer} />
    </Page>
  )
}
