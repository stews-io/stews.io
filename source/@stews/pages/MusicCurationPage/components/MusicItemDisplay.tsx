import { Button } from '@stews/components/Button'
import { MusicItem } from '../data/MusicItem'
import cssModule from './MusicItemDisplay.module.scss'

export type MusicListItemProps = MusicItem

export function MusicItemDisplay(props: MusicListItemProps) {
  const {
    musicTitle,
    musicThumbnailHref,
    externalLinks,
    musicArtist,
    musicStyles,
    ...musicContextData
  } = props
  return (
    <div className={cssModule.displayContainer}>
      <div className={cssModule.topRow}>
        <svg
          className={cssModule.musicThumbnail}
          viewBox={'0 0 100 100'}
          role={'img'}
        >
          <title>{`${musicTitle}: thumbnail image`}</title>
          <rect
            x={0}
            y={0}
            width={100}
            height={100}
            rx={4}
            ry={4}
            fill={'#EEEEEE'}
          />
          <image
            href={musicThumbnailHref}
            x={1}
            y={1}
            width={98}
            height={98}
            clip-path={'inset(0% round 3)'}
          />
        </svg>
        <div className={cssModule.musicLinks}>
          {externalLinks.map((someExternalLink) => {
            return (
              <div className={cssModule.linkContainer}>
                <LinkButton
                  linkLabel={someExternalLink.linkLabel}
                  linkHref={someExternalLink.linkHref}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className={cssModule.itemInfoContainer}>
        <MusicItemLabelList
          accessibilityLabel={'music title'}
          musicLabels={[musicTitle]}
        />
        <MusicItemLabelList
          accessibilityLabel={'music artist'}
          musicLabels={musicArtist}
        />
        <MusicItemLabelList
          accessibilityLabel={'music context'}
          musicLabels={[
            `${
              musicContextData.musicYear
            } ${musicContextData.recordingContext.join('/')} ${
              musicContextData.sourceType === 'collection'
                ? musicContextData.collectionType
                : musicContextData.sourceType
            }${musicContextData.musicType === 'clip' ? ' (clip)' : ''}`,
          ]}
        />
        <MusicItemLabelList
          accessibilityLabel={'music styles'}
          musicLabels={musicStyles}
        />
      </div>
    </div>
  )
}

interface LinkButtonProps {
  linkHref: string
  linkLabel: string
}

function LinkButton(props: LinkButtonProps) {
  const { linkLabel } = props
  return (
    <Button className={cssModule.linkButton} onSelect={() => {}}>
      {linkLabel}
    </Button>
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
      className={cssModule.itemLabelList}
      role={'list'}
      aria-label={accessibilityLabel}
    >
      {musicLabels.map((someMusicLabel) => (
        <div
          className={cssModule.itemLabel}
          key={someMusicLabel}
          role={'listitem'}
        >
          {someMusicLabel.toLowerCase()}
        </div>
      ))}
    </div>
  )
}
