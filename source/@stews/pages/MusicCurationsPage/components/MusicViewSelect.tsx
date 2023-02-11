import { Popover } from '@stews/components/Popover'
import { useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import cssModule from './MusicViewSelect.module.scss'

export interface MusicViewSelectProps {}

export function MusicViewSelect(props: MusicViewSelectProps) {
  const {} = props
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <div className={cssModule.buttonContainer}>
        <button
          ref={buttonRef}
          className={cssModule.selectButton}
          onClick={() => {
            setPopoverOpen(!popoverOpen)
          }}
        >
          <div className={cssModule.buttonLabel}>all</div>
          <div className={cssModule.buttonIconContainer}>
            <svg className={cssModule.buttonIcon} viewBox={'0 0 1 1'}>
              <polygon
                className={cssModule.dropdownPolygon}
                points={'0.2,0.375 0.8,0.375 0.5,0.775'}
              />
            </svg>
          </div>
        </button>
      </div>
      <Popover
        anchorRef={buttonRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
      >
        <div
          style={{
            width: 512,
            height: 1028,
          }}
        >
          howdy, popover
        </div>
      </Popover>
    </Fragment>
  )
}
