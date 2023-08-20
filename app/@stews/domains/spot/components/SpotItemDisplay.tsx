import { ItemDisplayProps } from '@stews/components/CurationPage/CurationPageBase'
import { DefaultItemDisplay } from '@stews/components/DefaultItemDisplay/DefaultItemDisplay'
import { SpotItem } from '../data'

export interface SpotItemProps extends ItemDisplayProps<SpotItem> {}

export function SpotItemDisplay(props: SpotItemProps) {
  const { someItem } = props
  return (
    <DefaultItemDisplay
      itemTitle={someItem.spotName}
      itemThumbnailHref={someItem.spotThumbnailHref}
      itemLinks={someItem.spotLinks.map((someSpotLink) => ({
        ...someSpotLink,
        ariaLabel: `TODO`,
        ariaDescription: `a button that navigates in a new tab to ${someSpotLink.linkLabel}`,
      }))}
      itemLabelLists={[
        {
          accessibilityLabel: 'spot name',
          listLabels: [someItem.spotName],
        },
        {
          accessibilityLabel: 'spot location',
          listLabels: [someItem.spotLocation.slice(0, 2).join(', ')],
        },
        {
          accessibilityLabel: 'spot tags',
          listLabels: someItem.spotTags,
        },
      ]}
    />
  )
}
