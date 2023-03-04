import {
  BopperAnchorButton,
  BopperAnchorButtonProps,
} from '@stews/components/Bopper'
import { MusicViewSelectBaseProps } from '../MusicViewSelectBase'
import cssModule from './SelectButton.module.scss'

export interface SelectButtonProps
  extends BopperAnchorButtonProps,
    Pick<MusicViewSelectBaseProps<unknown, unknown>, 'selectedMusicView'> {}

export function SelectButton(props: SelectButtonProps) {
  const { anchorElementRef, setPopoverOpen, selectedMusicView } = props
  return (
    <div className={cssModule.buttonContainer}>
      <BopperAnchorButton
        className={cssModule.selectButton}
        anchorElementRef={anchorElementRef}
        setPopoverOpen={setPopoverOpen}
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
      </BopperAnchorButton>
    </div>
  )
}
