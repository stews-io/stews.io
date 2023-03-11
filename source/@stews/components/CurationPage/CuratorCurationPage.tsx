import { CuratorViewSelect } from './components/ViewSelect'
import { CuratorProfileBopper } from './components/ProfileBopper'
import { CurationPageBase, CurationPageBaseProps } from './CurationPageBase'

export interface CuratorCurationPageProps<CurationItem extends object>
  extends Pick<
    CurationPageBaseProps<CurationItem, unknown>,
    'viewSortOrderConfig' | 'curatorInfo' | 'curationViews' | 'curationItems'
  > {}

export function CuratorCurationPage<CurationItem extends object>(
  props: CuratorCurationPageProps<CurationItem>
) {
  const { viewSortOrderConfig, curatorInfo, curationViews, curationItems } =
    props
  return (
    <CurationPageBase
      ViewSelect={CuratorViewSelect}
      ProfileBopper={CuratorProfileBopper}
      viewSortOrderConfig={viewSortOrderConfig}
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
