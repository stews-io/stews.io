import { CurationSegmentState } from '@stews/StewsApp/hooks/useCurationSegmentState'
import { Page } from '@stews/components/Page'
import { CurationItem } from '@stews/data/CurationItem'
import { ClientCuratorConfig } from '@stews/data/CuratorConfig'
import { StateUpdater } from 'preact/hooks'
import { LinkButton } from '../Button'
import {
  ConsumerProfileBopper,
  ConsumerViewSelect,
  ViewSearchInput,
  ViewSortSelect,
} from './components'
import { useStickyPageHeaderWorkaround, useViewPage } from './hooks'
import cssModule from './CurationSegmentPage.module.scss'

export interface CurationSegmentPageProps {
  clientCuratorConfig: ClientCuratorConfig
  curationSegmentState: CurationSegmentState<CurationItem>
  setCurationSegmentState: StateUpdater<CurationSegmentState<CurationItem>>
}

export interface ItemDisplayProps<SomeCurationItem extends CurationItem> {
  someItem: SomeCurationItem
}

export function CurationSegmentPage(props: CurationSegmentPageProps) {
  const { clientCuratorConfig, curationSegmentState, setCurationSegmentState } =
    props
  const { viewPageItemElements, viewPageNavigationElement } = useViewPage({
    pageItemSize: 6,
    curationSegmentState: curationSegmentState,
    setPageIndexToPrevious: (currentAdjustedPageIndex) => {
      setCurationSegmentState((currentCurationPageState) => ({
        ...currentCurationPageState,
        viewPageIndex: currentAdjustedPageIndex - 1,
      }))
    },
    setPageIndexToNext: (currentAdjustedPageIndex) => {
      setCurationSegmentState((currentCurationPageState) => ({
        ...currentCurationPageState,
        viewPageIndex: currentAdjustedPageIndex + 1,
      }))
    },
  })
  const { pageHeaderContainerRef } = useStickyPageHeaderWorkaround()
  return (
    <Page
      pageAriaHeader={`${clientCuratorConfig.curatorInfo.curatorName}: ${curationSegmentState.curationSegment.segmentLabel} curation`}
    >
      <div
        ref={pageHeaderContainerRef}
        className={cssModule.pageHeaderContainer}
      >
        <div className={cssModule.pageHeader}>
          <div className={cssModule.viewSelectContainer}>
            <ConsumerViewSelect
              viewAriaHeader={`${curationSegmentState.curationSegment.segmentLabel} view: ${curationSegmentState.segmentView.viewLabel}`}
              curationSegmentState={curationSegmentState}
              // todo???: abstract generic select interface
              optionList={curationSegmentState.curationSegment.segmentViews}
              // todo???: abstract generic select interface
              selectedOption={curationSegmentState.segmentView}
              // todo???: abstract generic select interface
              selectOption={(nextSegmentView) => {
                setCurationSegmentState((currentCurationSegmentState) => ({
                  ...currentCurationSegmentState,
                  segmentView: nextSegmentView,
                  viewPageIndex: 0,
                }))
              }}
            />
          </div>
          <div className={cssModule.actionContainer}>
            <ConsumerProfileBopper
              clientCuratorConfig={clientCuratorConfig}
              curationSegmentState={curationSegmentState}
              selectCurationSegment={(nextCurationSegment) => {
                setCurationSegmentState((currentCurationSegmentState) => ({
                  ...currentCurationSegmentState,
                  curationSegment: nextCurationSegment,
                  segmentSortOption: nextCurationSegment.segmentSortOptions[0],
                  segmentView: nextCurationSegment.segmentViews[0],
                  viewSearchQuery: '',
                  viewPageIndex: 0,
                }))
              }}
            />
          </div>
        </div>
      </div>
      <div className={cssModule.viewHeaderContainer}>
        <div className={cssModule.viewSortSelectContainer}>
          <ViewSortSelect
            // todo???: abstract generic select interface
            optionList={curationSegmentState.curationSegment.segmentSortOptions}
            // todo???: abstract generic select interface
            selectedOption={curationSegmentState.segmentSortOption}
            // todo???: abstract generic select interface
            selectOption={(nextSegmentSortOption) => {
              setCurationSegmentState((currentCurationSegmentState) => ({
                ...currentCurationSegmentState,
                segmentSortOption: nextSegmentSortOption,
                viewPageIndex: 0,
              }))
            }}
          />
        </div>
        <div className={cssModule.viewSearchInputContainer}>
          <ViewSearchInput
            curationSegmentState={curationSegmentState}
            // todo???: abstract generic input interface
            onInput={(someInputEvent) => {
              const nextViewSearch = someInputEvent.currentTarget.value
              setCurationSegmentState((currentCurationSegmentState) => ({
                ...currentCurationSegmentState,
                viewSearchQuery: nextViewSearch,
                viewPageIndex: 0,
              }))
            }}
            // todo???: abstract generic input interface
            resetValue={() => {
              setCurationSegmentState((currentCurationSegmentState) => ({
                ...currentCurationSegmentState,
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
            ariaLabel={'go to the stews.io project landing page'}
            ariaDescription={
              'a button that opens a new tab and navigates to stews.io'
            }
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
