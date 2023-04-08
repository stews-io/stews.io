import { CuratorViewSelect } from './components/ViewSelect'
import { CuratorProfileBopper } from './components/ProfileBopper'
import { CurationPageBase, CurationPageBaseDataProps } from './CurationPageBase'

export interface CuratorCurationPageProps<CurationItem extends object>
  extends CurationPageBaseDataProps<CurationItem> {}

export function CuratorCurationPage<CurationItem extends object>(
  props: CuratorCurationPageProps<CurationItem>
) {
  const {
    ItemDisplay,
    viewSortConfig,
    getItemSearchSpace,
    curationType,
    curatorInfo,
    curationViews,
    fetchCurationItemsMapState,
  } = props
  return (
    <CurationPageBase
      ViewSelect={CuratorViewSelect}
      ProfileBopper={CuratorProfileBopper}
      ItemDisplay={ItemDisplay}
      viewSortConfig={viewSortConfig}
      getItemSearchSpace={getItemSearchSpace}
      curationType={curationType}
      curatorInfo={curatorInfo}
      curationViews={curationViews}
      fetchCurationItemsMapState={fetchCurationItemsMapState}
    />
  )
}
