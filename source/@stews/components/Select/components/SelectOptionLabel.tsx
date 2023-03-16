import { throwInvalidPathError } from '@stews/helpers'
import { Fragment } from 'preact/jsx-runtime'
import { SelectBaseConfigProps, VerifiedOptionLabelKey } from '../SelectBase'

export interface SelectMenuOptionLabelProps<
  SelectOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<SelectOption>
> extends Pick<
    SelectBaseConfigProps<SelectOption, OptionLabelKey, unknown, unknown>,
    'optionLabelKey'
  > {
  someSelectOption: SelectOption
}

export function SelectOptionLabel<
  SelectOption extends object,
  OptionLabelKey extends VerifiedOptionLabelKey<SelectOption>
>(props: SelectMenuOptionLabelProps<SelectOption, OptionLabelKey>) {
  const { someSelectOption, optionLabelKey } = props
  const optionLabel = someSelectOption[optionLabelKey]
  return typeof optionLabel === 'string' ? (
    <Fragment>{optionLabel}</Fragment>
  ) : (
    throwInvalidPathError('SelectMenuOptionLabel')
  )
}
