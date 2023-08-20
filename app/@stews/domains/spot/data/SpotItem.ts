import { CurationItem } from '@stews/data/CurationItem'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'

export interface SpotItem extends CurationItem {
  spotName: string
  spotThumbnailHref: string
  spotLocation: ArrayOfAtLeastOne<string>
  spotTags: ArrayOfAtLeastOne<string>
  spotLinks: ArrayOfAtLeastOne<{
    linkLabel: string
    linkHref: string
  }>
}
