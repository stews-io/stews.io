import {
  ConsumerCurationPage,
  ConsumerCurationPageProps,
} from '@stews/components/CurationPage'
import { SpotItem } from '../data'
import { SpotItemDisplay } from './SpotItemDisplay'

export interface SpotCurationPageProps
  extends Pick<
    ConsumerCurationPageProps<SpotItem>,
    | 'curatorInfo'
    | 'curationSegments'
    | 'activeCurationSegment'
    | 'setActiveCurationSegment'
  > {}

export function SpotCurationPage(props: SpotCurationPageProps) {
  const {
    curatorInfo,
    curationSegments,
    activeCurationSegment,
    setActiveCurationSegment,
  } = props
  return (
    <ConsumerCurationPage<SpotItem>
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
          fieldType: 'orderedStringSet',
          sortLabelBase: 'location',
        },
      ]}
      curatorInfo={curatorInfo}
      curationSegments={curationSegments}
      activeCurationSegment={activeCurationSegment}
      setActiveCurationSegment={setActiveCurationSegment}
    />
  )
}
