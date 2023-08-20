import { LinkButton } from '@stews/components/Button'
import cssModule from './DefaultItemDisplay.module.scss'

export interface DefaultItemDisplayProps {
  itemTitle: string
  itemThumbnailHref: string
  itemLinks: Array<{
    linkLabel: string
    linkHref: string
    ariaLabel: string
    ariaDescription: string
  }>
  itemLabelLists: Array<{
    accessibilityLabel: string
    listLabels: Array<string>
  }>
}

export function DefaultItemDisplay(props: DefaultItemDisplayProps) {
  const { itemThumbnailHref, itemTitle, itemLinks, itemLabelLists } = props
  return (
    <div className={cssModule.itemDisplayContainer}>
      <div className={cssModule.topRow}>
        <img
          className={cssModule.itemThumbnail}
          src={itemThumbnailHref}
          alt={`${itemTitle}: thumbnail`}
        />
        <div className={cssModule.itemLinks}>
          {itemLinks.map((someItemLink) => {
            return (
              <div className={cssModule.itemLinkContainer}>
                <LinkButton
                  className={cssModule.itemLinkButton}
                  target={'_blank'}
                  ariaLabel={someItemLink.ariaLabel}
                  ariaDescription={someItemLink.ariaDescription}
                  href={someItemLink.linkHref}
                >
                  {someItemLink.linkLabel}
                </LinkButton>
              </div>
            )
          })}
        </div>
      </div>
      <div className={cssModule.itemInfoContainer}>
        {itemLabelLists.map((someLabelList) => (
          <ItemLabelList
            accessibilityLabel={someLabelList.accessibilityLabel}
            listLabels={someLabelList.listLabels}
          />
        ))}
      </div>
    </div>
  )
}

interface ItemLabelListProps {
  accessibilityLabel: string
  listLabels: Array<string>
}

function ItemLabelList(props: ItemLabelListProps) {
  const { accessibilityLabel, listLabels } = props
  return (
    <div
      className={cssModule.itemLabelListContainer}
      aria-label={accessibilityLabel}
    >
      <div
        role={'list'}
        className={cssModule.itemLabelList}
        aria-label={accessibilityLabel}
      >
        {listLabels.map((someListLabel) => (
          <div
            role={'listitem'}
            className={cssModule.itemLabel}
            key={someListLabel}
          >
            {someListLabel.toLowerCase()}
          </div>
        ))}
      </div>
    </div>
  )
}
