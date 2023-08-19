import { CurationItemBase } from '@stews/data/CurationItem'
import { ConsumerProfileBopper } from './components/ProfileBopper'
import { ConsumerViewSelect } from './components/ViewSelect'
import { CurationPageBase, CurationPageBaseDataProps } from './CurationPageBase'

export interface ConsumerCurationPageProps<
  CurationItem extends CurationItemBase
> extends CurationPageBaseDataProps<CurationItem> {}

export function ConsumerCurationPage<CurationItem extends CurationItemBase>(
  props: ConsumerCurationPageProps<CurationItem>
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
      ItemDisplay={ItemDisplay}
      ViewSelect={ConsumerViewSelect}
      ProfileBopper={ConsumerProfileBopper}
      viewSortConfig={viewSortConfig}
      getItemSearchSpace={getItemSearchSpace}
      curatorInfo={curatorInfo}
      curationSegments={curationSegments}
      activeCurationSegment={activeCurationSegment}
      setActiveCurationSegment={setActiveCurationSegment}
    />
  )
}
