import { DefaultItemDisplay } from '@stews/components/DefaultItemDisplay/DefaultItemDisplay'
import { MusicItem } from '../data'
import { ItemDisplayProps } from '@stews/data/CurationItem'

export interface MusicItemProps extends ItemDisplayProps<MusicItem> {}

export function MusicItemDisplay(props: MusicItemProps) {
  const { someItem } = props
  return (
    <DefaultItemDisplay
      itemTitle={someItem.musicTitle}
      itemThumbnailHref={someItem.musicThumbnailHref}
      itemLinks={someItem.externalLinks.map((someMusicLink) => ({
        ...someMusicLink,
        ariaLabel: `listen on ${someMusicLink.linkLabel}`,
        ariaDescription: `a button that navigates in a new tab to ${someItem.musicTitle} by ${someItem.musicArtist[0]} on ${someMusicLink.linkLabel}`,
      }))}
      itemLabelLists={[
        {
          accessibilityLabel: 'music title',
          listLabels: [someItem.musicTitle],
        },
        {
          accessibilityLabel: 'music artist',
          listLabels: someItem.musicArtist,
        },
        {
          accessibilityLabel: 'music context',
          listLabels: [
            `${someItem.musicYear} ${someItem.recordingContext.join('/')} ${
              someItem.sourceType === 'collection'
                ? someItem.collectionType
                : someItem.sourceType
            }${someItem.musicType === 'clip' ? ' (clip)' : ''}`,
          ],
        },
        {
          accessibilityLabel: 'music styles',
          listLabels: someItem.musicTags,
        },
      ]}
    />
  )
}
