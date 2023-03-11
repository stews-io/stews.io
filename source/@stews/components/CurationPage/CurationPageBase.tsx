import { Page } from '@stews/components/Page'
import { CurationView, CuratorInfo } from '@stews/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { DeterminedProfileBoppersProps } from './components/ProfileBopper'
import { SortSelect } from './components/SortSelect'
import { DeterminedViewSelectProps } from './components/ViewSelect'
import { CurationViewSelectOption, ViewSortOrderSelectOption } from './data'
import { useViewSortOrderOptions } from './hooks/useViewSortOrderOptions'
import cssModule from './CurationPageBase.module.scss'

export interface CurationPageBaseProps<CurationItem, CustomViewSelectProps> {
  curatorInfo: CuratorInfo
  curationViews: ArrayOfAtLeastOne<CurationView>
  curationItems: Array<CurationItem>
  viewSortOrderConfig: ArrayOfAtLeastOne<{
    fieldKey: string
    fieldType: 'string' | 'number'
    sortLabelBase: string
  }>
  customViewSelectProps: CustomViewSelectProps
  ViewSelect: FunctionComponent<ViewSelectProps<CustomViewSelectProps>>
  ProfileBopper: FunctionComponent<DeterminedProfileBoppersProps>
}

type ViewSelectProps<CustomViewSelectProps> = DeterminedViewSelectProps &
  CustomViewSelectProps

export function CurationPageBase<CurationItem, CustomViewSelectProps>(
  props: CurationPageBaseProps<CurationItem, CustomViewSelectProps>
) {
  const {
    viewSortOrderConfig,
    curationViews,
    ViewSelect,
    customViewSelectProps,
    ProfileBopper,
    curatorInfo,
  } = props
  const viewSortOrderOptions = useViewSortOrderOptions({
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
