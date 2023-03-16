import { ComponentProps } from 'preact'
import cssModule from './ViewSearchInput.module.scss'

export interface ViewSearchInputProps
  extends Pick<Required<ComponentProps<'input'>>, 'value' | 'onInput'> {}

export function ViewSearchInput(props: ViewSearchInputProps) {
  const { value, onInput } = props
  return (
    <div className={cssModule.inputContainer}>
      <input
        className={cssModule.searchInput}
        type={'text'}
        autocomplete={'off'}
        autocorrect={'off'}
        autocapitalize={'off'}
        spellcheck={false}
        placeholder={'search music'}
        value={value}
        onInput={onInput}
      />
    </div>
  )
}
