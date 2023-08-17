import { ConsumerCurationPage } from '@stews/components/CurationPage'
import { SpotItem } from '../data'
import { SpotItemDisplay } from './SpotItemDisplay'
import { CurationSegmentPagePropsBase } from '@stews/StewsApp/components/AppRouter'

export interface SpotCurationPageProps
  extends CurationSegmentPagePropsBase<SpotItem> {}

export function SpotCurationPage(props: SpotCurationPageProps) {
  const { curatorInfo, curationViews, fetchCurationItemsMapState } = props
  return (
    <ConsumerCurationPage<SpotItem>
      curationType={'spot'}
      ItemDisplay={SpotItemDisplay}
      getItemSearchSpace={(someSpotItem) =>
        `${someSpotItem.spotName},${
          someSpotItem.spotLocation
        },${someSpotItem.spotTags.join(',')}`
      }
      viewSortConfig={[
        {
          fieldKey: 'spotName',
          fieldType: 'string',
          sortLabelBase: 'name',
        },
        {
          fieldKey: 'spotLocation',
          fieldType: 'string',
          sortLabelBase: 'location',
        },
      ]}
      curatorInfo={curatorInfo}
      curationViews={curationViews}
      fetchCurationItemsMapState={fetchCurationItemsMapState}
    />
  )
}
