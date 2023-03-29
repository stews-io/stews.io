import cssModule from './EmptyViewPageItem.module.scss'

export interface EmptyViewPageItemProps {}

export function EmptyViewPageItem(props: EmptyViewPageItemProps) {
  return <div className={cssModule.emptyViewPageItem}>no items match</div>
}
