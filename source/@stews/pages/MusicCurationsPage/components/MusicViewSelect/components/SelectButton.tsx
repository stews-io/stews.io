import { CoreAnchorButtonProps } from '@stews/components/Bopper'
import { Button } from '@stews/components/Button'
import { throwInvalidPathError } from '@stews/helpers'
import { Ref, StateUpdater } from 'preact/hooks'
import { MusicViewSelectBaseProps } from '../MusicViewSelectBase'
import cssModule from './SelectButton.module.scss'

export interface SelectButtonProps
  extends CoreAnchorButtonProps,
    Pick<MusicViewSelectBaseProps<unknown, unknown>, 'selectedMusicView'> {}

export function SelectButton(props: SelectButtonProps) {
  const { anchorRef, setPopoverOpen, selectedMusicView } = props
  return (
    <div className={cssModule.buttonContainer}>
      <Button
        elementRef={anchorRef}
        className={cssModule.selectButton}
        onSelect={() => {
          setPopoverOpen(true)
        }}
        onKeyDown={(someKeyDownEvent) => {
          if (someKeyDownEvent.key === 'Enter') {
            anchorRef.current
              ? anchorRef.current.setAttribute('data-keyboard-selected', 'true')
              : throwInvalidPathError('SelectButton.Button.onKeyDown')
          }
        }}
      >
        <div className={cssModule.buttonLabel}>
          {selectedMusicView.viewLabel}
        </div>
        <div className={cssModule.iconContainer}>
          <svg className={cssModule.selectIcon} viewBox={'0 0 1 1'}>
            <polygon
              className={cssModule.dropdownPolygon}
              points={'0.2,0.375 0.8,0.375 0.5,0.775'}
            />
          </svg>
        </div>
      </Button>
    </div>
  )
}
