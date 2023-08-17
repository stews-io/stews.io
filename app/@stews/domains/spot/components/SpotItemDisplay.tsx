import { ItemDisplayProps } from '@stews/components/CurationPage'
import { SpotItem } from '../data'

export interface SpotItemProps extends ItemDisplayProps<SpotItem> {}

export function SpotItemDisplay(props: SpotItemProps) {
  const { someItem } = props
  return (
    <div>
      <div>{someItem.spotName}</div>
      <div>{someItem.spotLocation}</div>
    </div>
  )
}
