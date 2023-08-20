import { CurationItem } from '@stews/data/CurationItem'
import { CuratorProfileBopper } from './components/ProfileBopper'
import { CuratorViewSelect } from './components/ViewSelect'
import { CurationPageBase, CurationPageBaseDataProps } from './CurationPageBase'

export interface CuratorCurationPageProps<SomeCurationItem extends CurationItem>
  extends CurationPageBaseDataProps<SomeCurationItem> {}

export function CuratorCurationPage<SomeCurationItem extends CurationItem>(
  props: CuratorCurationPageProps<SomeCurationItem>
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
