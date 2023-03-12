import { ConsumerViewSelect } from './components/ViewSelect'
import { ConsumerProfileBopper } from './components/ProfileBopper'
import { CurationPageBase, CurationPageBaseDataProps } from './CurationPageBase'

export interface ConsumerCurationPageProps<CurationItem extends object>
  extends CurationPageBaseDataProps<CurationItem> {}

export function ConsumerCurationPage<CurationItem extends object>(
  props: ConsumerCurationPageProps<CurationItem>
) {
  const { viewSortOrderConfig, curatorInfo, curationViews, curationItems } =
    props
  return (
    <CurationPageBase
      ViewSelect={ConsumerViewSelect}
      ProfileBopper={ConsumerProfileBopper}
      viewSortOrderConfig={viewSortOrderConfig}
      curatorInfo={curatorInfo}
      curationViews={curationViews}
      curationItems={curationItems}
      customViewSelectProps={null}
    />
  )
}
