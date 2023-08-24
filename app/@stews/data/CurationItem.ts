export interface CurationItem {
  itemId: number
}

export interface ItemDisplayProps<SomeCurationItem extends CurationItem> {
  someItem: SomeCurationItem
}
