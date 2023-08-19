import { CurationItemBase } from '@stews/data/CurationItem'
import { CuratorProfileBopper } from './components/ProfileBopper'
import { CuratorViewSelect } from './components/ViewSelect'
import { CurationPageBase, CurationPageBaseDataProps } from './CurationPageBase'

export interface CuratorCurationPageProps<CurationItem extends CurationItemBase>
  extends CurationPageBaseDataProps<CurationItem> {}

export function CuratorCurationPage<CurationItem extends CurationItemBase>(
  props: CuratorCurationPageProps<CurationItem>
) {
  const {
    ItemDisplay,
    viewSortConfig,
    getItemSearchSpace,
    curatorInfo,
    curationSegments,
    activeCurationSegment,
    setActiveCurationSegment,
  } = props
  return (
    <CurationPageBase
      ViewSelect={CuratorViewSelect}
      ProfileBopper={CuratorProfileBopper}
      ItemDisplay={ItemDisplay}
      viewSortConfig={viewSortConfig}
      getItemSearchSpace={getItemSearchSpace}
      curatorInfo={curatorInfo}
      curationSegments={curationSegments}
      activeCurationSegment={activeCurationSegment}
      setActiveCurationSegment={setActiveCurationSegment}
    />
  )
}
