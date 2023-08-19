import { CurationItemBase } from '@stews/data/CurationItem'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'

export interface SpotItem extends CurationItemBase {
  spotName: string
  spotThumbnailHref: string
  spotLocation: ArrayOfAtLeastOne<string>
  spotTags: ArrayOfAtLeastOne<string>
  spotLinks: ArrayOfAtLeastOne<{
    linkLabel: string
    linkHref: string
  }>
}
