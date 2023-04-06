import { ConsumerViewSelect } from './components/ViewSelect'
import { ConsumerProfileBopper } from './components/ProfileBopper'
import { CurationPageBase, CurationPageBaseDataProps } from './CurationPageBase'

export interface ConsumerCurationPageProps<CurationItem extends object>
  extends CurationPageBaseDataProps<CurationItem> {}

export function ConsumerCurationPage<CurationItem extends object>(
  props: ConsumerCurationPageProps<CurationItem>
) {
  const {
    ItemDisplay,
    viewSortConfig,
    getItemSearchSpace,
    curationType,
    curatorInfo,
    curationViews,
  } = props
  return (
    <CurationPageBase
      ItemDisplay={ItemDisplay}
      ViewSelect={ConsumerViewSelect}
      ProfileBopper={ConsumerProfileBopper}
      viewSortConfig={viewSortConfig}
      getItemSearchSpace={getItemSearchSpace}
      curationType={curationType}
      curatorInfo={curatorInfo}
      curationViews={curationViews}
    />
  )
}
