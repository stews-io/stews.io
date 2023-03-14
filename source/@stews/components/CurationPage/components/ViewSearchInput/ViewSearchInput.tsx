import { Button } from '@stews/components/Button'
import { ComponentProps } from 'preact'
import cssModule from './ViewSearchInput.module.scss'

export interface ViewSearchInputProps
  extends Pick<Required<ComponentProps<'input'>>, 'value' | 'onChange'> {}

export function ViewSearchInput(props: ViewSearchInputProps) {
  const { value, onChange } = props
  return (
    <div className={cssModule.inputContainer}>
      <input
        className={cssModule.searchInput}
        autocomplete={'off'}
        autocorrect={'off'}
        autocapitalize={'off'}
        spellcheck={false}
        placeholder={'search music'}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
