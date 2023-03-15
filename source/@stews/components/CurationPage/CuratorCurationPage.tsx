import { CuratorViewSelect } from './components/ViewSelect'
import { CuratorProfileBopper } from './components/ProfileBopper'
import { CurationPageBase, CurationPageBaseDataProps } from './CurationPageBase'

export interface CuratorCurationPageProps<CurationItem extends object>
  extends CurationPageBaseDataProps<CurationItem> {}

export function CuratorCurationPage<CurationItem extends object>(
  props: CuratorCurationPageProps<CurationItem>
) {
  const {
    CurationItemDisplay,
    viewSortConfig,
    curatorInfo,
    curationViews,
    curationItems,
  } = props
  return (
    <CurationPageBase
      ViewSelect={CuratorViewSelect}
      ProfileBopper={CuratorProfileBopper}
      CurationItemDisplay={CurationItemDisplay}
      viewSortConfig={viewSortConfig}
      curatorInfo={curatorInfo}
      curationViews={curationViews}
      curationItems={curationItems}
      customViewSelectProps={{
        navigateToEditViewPage: () => {},
        navigateToCreateViewPage: () => {},
      }}
    />
  )
}
