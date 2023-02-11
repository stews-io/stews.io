import { Button, Div } from '@stews/components/Primitive'
import cssModule from './MusicViewSelect.module.scss'

export interface MusicViewSelectProps {}

export function MusicViewSelect(props: MusicViewSelectProps) {
  const {} = props
  return (
    <Div className={cssModule.buttonContainer}>
      <Button className={cssModule.selectButton}>
        <Div className={cssModule.buttonLabel}>all</Div>
        <Div className={cssModule.buttonIconContainer}>
          <svg className={cssModule.buttonIcon} viewBox={'0 0 1 1'}>
            <polygon
              className={cssModule.dropdownPolygon}
              points={'0.2,0.375 0.8,0.375 0.5,0.775'}
            />
          </svg>
        </Div>
      </Button>
    </Div>
  )
}
