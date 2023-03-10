import { CuratorViewSelect } from './components/ViewSelect'
import { CuratorProfileBopper } from './components/ProfileBopper'
import { CurationPageBase, CurationPageBaseProps } from './CurationPageBase'

export interface CuratorCurationPageProps<
  CurationItem extends Record<string, unknown>
> extends Pick<
    CurationPageBaseProps<CurationItem, unknown>,
    'curationSortConfig' | 'curatorInfo' | 'curationViews' | 'curationItems'
  > {}

export function CuratorCurationPage<
  CurationItem extends Record<string, unknown>
>(props: CuratorCurationPageProps<CurationItem>) {
  const { curationSortConfig, curatorInfo, curationViews, curationItems } =
    props
  return (
    <CurationPageBase
      ViewSelect={CuratorViewSelect}
      ProfileBopper={CuratorProfileBopper}
      curationSortConfig={curationSortConfig}
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
