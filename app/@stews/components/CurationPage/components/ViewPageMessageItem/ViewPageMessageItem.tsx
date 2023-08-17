import cssModule from './ViewPageMessageItem.module.scss'

export interface ViewPageMessageItemProps {
  message: string
}

export function ViewPageMessageItem(props: ViewPageMessageItemProps) {
  const { message } = props
  return <div className={cssModule.viewPageMessageItem}>{message}</div>
}
