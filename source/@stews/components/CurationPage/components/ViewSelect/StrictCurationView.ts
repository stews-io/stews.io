import { ExtractStrictMenuOption } from '@stews/components/Select'
import { CurationView } from '@stews/data'

export type StrictCurationView = ExtractStrictMenuOption<
  CurationView,
  'viewLabel'
>
