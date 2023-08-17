import Zod from 'zod'

export const SpotItemSchema = Zod.object({
  itemId: Zod.number(),
  spotName: Zod.string(),
  spotLocation: Zod.string(),
  spotTags: Zod.tuple([Zod.string()]).rest(Zod.string()),
  externalLinks: Zod.tuple([
    Zod.object({
      linkLabel: Zod.string(),
      linkHref: Zod.string(),
    }),
  ]).rest(
    Zod.object({
      linkLabel: Zod.string(),
      linkHref: Zod.string(),
    })
  ),
})
