import { ExtractStrictMenuOption } from '@stews/components/Select'
import { CurationView } from '@stews/data'

export type CurationViewSelectOption = ExtractStrictMenuOption<
  CurationView,
  'viewLabel'
>
