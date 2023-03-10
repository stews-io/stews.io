import { Page } from '@stews/components/Page'
import { CurationView, CuratorInfo } from '@stews/data'
import { throwInvalidPathError } from '@stews/helpers'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { FunctionComponent } from 'preact'
import { useMemo, useState } from 'preact/hooks'
import { DeterminedProfileBoppersProps } from './components/ProfileBopper'
import { SortSelect } from './components/SortSelect'
import { DeterminedViewSelectProps } from './components/ViewSelect'
import cssModule from './CurationPageBase.module.scss'

export interface CurationPageBaseProps<CurationItem, CustomViewSelectProps> {
  curatorInfo: CuratorInfo
  curationViews: ArrayOfAtLeastOne<CurationView>
  curationItems: Array<CurationItem>
  curationSortConfig: Array<{
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
    curationSortConfig,
    curationViews,
    ViewSelect,
    customViewSelectProps,
    ProfileBopper,
    curatorInfo,
  } = props
  const curationSortOptions = useMemo<
    ArrayOfAtLeastOne<{ sortId: string; sortLabel: string }>
  >(() => {
    const sortOptionsResult = curationSortConfig.reduce<
      Array<{ sortId: string; sortLabel: string }>
    >((result, someSortOptionConfig) => {
      if (someSortOptionConfig.fieldType === 'string') {
        result.push({
          sortId: `${someSortOptionConfig.fieldKey}_ascending`,
          sortLabel: `${someSortOptionConfig.sortLabelBase}: a -> z`,
        })
        result.push({
          sortId: `${someSortOptionConfig.fieldKey}_descending`,
          sortLabel: `${someSortOptionConfig.sortLabelBase}: z -> a`,
        })
      } else if (someSortOptionConfig.fieldType === 'number') {
        result.push({
          sortId: `${someSortOptionConfig.fieldKey}_ascending`,
          sortLabel: `${someSortOptionConfig.sortLabelBase}: 0 -> 9`,
        })
        result.push({
          sortId: `${someSortOptionConfig.fieldKey}_descending`,
          sortLabel: `${someSortOptionConfig.sortLabelBase}: 9 -> 0`,
        })
      } else {
        throwInvalidPathError('todo')
      }
      return result
    }, [])
    return sortOptionsResult.length > 0
      ? (sortOptionsResult as ArrayOfAtLeastOne<{
          sortId: string
          sortLabel: string
        }>)
      : throwInvalidPathError('todo')
  }, [curationSortConfig])
  const [pageState, setPageState] = useState<{
    curationView: DeterminedViewSelectProps['optionList'][number]
    viewSortOrder: {
      sortLabel: string
    }
  }>({
    curationView: curationViews[0],
    viewSortOrder: curationSortOptions[0],
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
            optionList={curationSortOptions}
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
