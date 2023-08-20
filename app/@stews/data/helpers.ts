import Zod, { ZodType } from 'zod'

export function arrayOfOneSchema<SomeSchema extends ZodType>(
  someSchema: SomeSchema
) {
  return Zod.tuple([someSchema]).rest(someSchema)
}
