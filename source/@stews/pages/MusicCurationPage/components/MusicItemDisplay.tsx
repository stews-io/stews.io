import { ItemDisplayProps } from '@stews/components/CurationPage/CurationPageBase'
import { LinkButton } from '@stews/components/LinkButton'
import { MusicItem } from '../data/MusicItem'
import cssModule from './MusicItemDisplay.module.scss'

export interface MusicItemProps extends ItemDisplayProps<MusicItem> {}

export function MusicItemDisplay(props: MusicItemProps) {
  const { someItem } = props
  return (
    <div className={cssModule.displayContainer}>
      <div className={cssModule.topRow}>
        <img
          className={cssModule.musicThumbnail}
          src={someItem.musicThumbnailHref}
          alt={`${someItem.musicTitle}: thumbnail`}
        />
        <div className={cssModule.musicLinks}>
          {someItem.externalLinks.map((someExternalLink) => {
            return (
              <div className={cssModule.linkContainer}>
                <LinkButton
                  target={'_blank'}
                  className={cssModule.musicLinkButton}
                  href={someExternalLink.linkHref}
                >
                  {someExternalLink.linkLabel}
                </LinkButton>
              </div>
            )
          })}
        </div>
      </div>
      <div className={cssModule.itemInfoContainer}>
        <MusicItemLabelList
          accessibilityLabel={'music title'}
          musicLabels={[someItem.musicTitle]}
        />
        <MusicItemLabelList
          accessibilityLabel={'music artist'}
          musicLabels={someItem.musicArtist}
        />
        <MusicItemLabelList
          accessibilityLabel={'music context'}
          musicLabels={[
            `${someItem.musicYear} ${someItem.recordingContext.join('/')} ${
              someItem.sourceType === 'collection'
                ? someItem.collectionType
                : someItem.sourceType
            }${someItem.musicType === 'clip' ? ' (clip)' : ''}`,
          ]}
        />
        <MusicItemLabelList
          accessibilityLabel={'music styles'}
          musicLabels={someItem.musicStyles}
        />
      </div>
    </div>
  )
}

interface MusicItemLabelListProps {
  accessibilityLabel: string
  musicLabels: Array<string>
}

function MusicItemLabelList(props: MusicItemLabelListProps) {
  const { accessibilityLabel, musicLabels } = props
  return (
    <div
      role={'list'}
      className={cssModule.itemLabelList}
      aria-label={accessibilityLabel}
    >
      {musicLabels.map((someMusicLabel) => (
        <div
          role={'listitem'}
          className={cssModule.itemLabel}
          key={someMusicLabel}
        >
          {someMusicLabel.toLowerCase()}
        </div>
      ))}
    </div>
  )
}
