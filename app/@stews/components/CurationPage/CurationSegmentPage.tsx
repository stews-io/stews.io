import { useClientCuratorConfig } from '@stews/StewsApp/hooks/useClientCuratorConfig'
import { useCurationSegmentState } from '@stews/StewsApp/hooks/useCurationSegmentState'
import { useSegmentDatasetState } from '@stews/StewsApp/hooks/useSegmentDatasetState'
import { Page } from '@stews/components/Page'
import { LinkButton } from '../Button'
import cssModule from './CurationSegmentPage.module.scss'
import {
  ConsumerProfileBopper,
  ConsumerViewSelect,
  ViewSearchInput,
  ViewSortSelect,
} from './components'
import { useStickyPageHeaderWorkaround, useViewPage } from './hooks'

export interface CurationSegmentPageProps
  extends Pick<
      ReturnType<typeof useClientCuratorConfig>,
      'clientCuratorConfig'
    >,
    Pick<
      ReturnType<typeof useCurationSegmentState>,
      'curationSegmentState' | 'setCurationSegmentState'
    >,
    Pick<ReturnType<typeof useSegmentDatasetState>, 'segmentDatasetState'> {}

export function CurationSegmentPage(props: CurationSegmentPageProps) {
  const {
    clientCuratorConfig,
    segmentDatasetState,
    curationSegmentState,
    setCurationSegmentState,
  } = props
  const { viewPageItemElements, viewPageNavigationElement } = useViewPage({
    segmentDatasetState,
    curationSegmentState,
    pageItemSize: 6,
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
