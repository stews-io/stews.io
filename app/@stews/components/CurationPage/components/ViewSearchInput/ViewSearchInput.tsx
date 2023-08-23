import { Button } from '@stews/components/Button'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { ComponentProps } from 'preact'
import { useMemo, useRef } from 'preact/hooks'
import { CurationSegmentPageProps } from '../../CurationSegmentPage'
import cssModule from './ViewSearchInput.module.scss'

export interface ViewSearchInputProps
  extends Pick<CurationSegmentPageProps, 'curationSegmentState'>,
    Pick<Required<ComponentProps<'input'>>, 'onInput'> {
  resetValue: () => void
}

export function ViewSearchInput(props: ViewSearchInputProps) {
  const { curationSegmentState, onInput, resetValue } = props
  const searchInputRef = useRef<HTMLInputElement>(null)
  const scrollInputIntoFocus = useMemo(
    () => () => {
      const approximateViewSearchDocumentTop = 64
      const searchInputElement =
        searchInputRef.current ??
        throwInvalidPathError('ViewSearchInput.searchInputRef')
      if (
        searchInputElement.getBoundingClientRect().top <
        approximateViewSearchDocumentTop
      ) {
        window.scrollTo({
          behavior: 'smooth',
          top: 0,
        })
      }
    },
    []
  )
  return (
    <div className={cssModule.inputContainer}>
      <input
        type={'text'}
        autocomplete={'off'}
        autocorrect={'off'}
        autocapitalize={'off'}
        spellcheck={false}
        className={cssModule.searchInput}
        placeholder={`search ${curationSegmentState.curationSegment.segmentLabel}`}
        ref={searchInputRef}
        value={curationSegmentState.viewSearchQuery}
        onInput={onInput}
        onFocus={scrollInputIntoFocus}
      />
      <Button
        ariaLabel={'clear search'}
        ariaDescription={'a button that resets the current search query'}
        onFocus={scrollInputIntoFocus}
        onSelect={() => {
          resetValue()
        }}
      >
        <svg className={cssModule.clearIcon} viewBox={'0 0.5 23 23'}>
          <path
            className={cssModule.closeIconOutlineCircle}
            d={
              'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10 S17.53 2 12 2z'
            }
          />
          <path
            d={
              'M12 2m4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z'
            }
          />
        </svg>
      </Button>
    </div>
  )
}
