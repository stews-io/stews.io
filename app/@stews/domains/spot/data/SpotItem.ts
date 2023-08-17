import { CurationItemBase } from '@stews/data/CurationItem'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'

export interface SpotItem extends CurationItemBase {
  spotName: string
  spotLocation: string
  spotTags: ArrayOfAtLeastOne<string>
  externalLinks: ArrayOfAtLeastOne<{
    linkLabel: string
    linkHref: string
  }>
}
