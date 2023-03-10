import { ConsumerViewSelect } from './components/ViewSelect'
import { ConsumerProfileBopper } from './components/ProfileBopper'
import { CurationPageBase, CurationPageBaseProps } from './CurationPageBase'

export interface ConsumerCurationPageProps<CurationItem extends object>
  extends Pick<
    CurationPageBaseProps<CurationItem, unknown>,
    'curationSortConfig' | 'curatorInfo' | 'curationViews' | 'curationItems'
  > {}

export function ConsumerCurationPage<CurationItem extends object>(
  props: ConsumerCurationPageProps<CurationItem>
) {
  const { curationSortConfig, curatorInfo, curationViews, curationItems } =
    props
  return (
    <CurationPageBase
      ViewSelect={ConsumerViewSelect}
      ProfileBopper={ConsumerProfileBopper}
      curationSortConfig={curationSortConfig}
      curatorInfo={curatorInfo}
      curationViews={curationViews}
      curationItems={curationItems}
      customViewSelectProps={null}
    />
  )
}
