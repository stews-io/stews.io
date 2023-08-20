import { arrayOfOneSchema } from '@stews/data/helpers'
import Zod from 'zod'

export const SpotItemSchema = Zod.object({
  itemId: Zod.number(),
  spotName: Zod.string(),
  spotLocation: Zod.string(),
  spotTags: arrayOfOneSchema(Zod.string()),
  spotLinks: arrayOfOneSchema(
    Zod.object({
      linkLabel: Zod.string(),
      linkHref: Zod.string(),
    })
  ),
})
