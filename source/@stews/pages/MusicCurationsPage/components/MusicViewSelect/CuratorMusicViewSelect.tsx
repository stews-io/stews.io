import { Button } from '@stews/components/Button'
import { MusicView } from '../../data'
import {
  MenuFooterProps,
  OptionActionItemProps,
  SelectMenuBase,
  SelectMenuProps,
} from './components/SelectMenuBase'
import {
  MusicViewSelectBase,
  MusicViewSelectProps,
} from './MusicViewSelectBase'
import cssModule from './CuratorMusicViewSelect.module.scss'

export interface CuratorMusicViewSelectProps extends MusicViewSelectProps {
  navigateToEditMusicViewPage: (someMusicView: MusicView) => void
  navigateToCreateMusicViewPage: () => void
}

export function CuratorMusicViewSelect(props: CuratorMusicViewSelectProps) {
  const {
    navigateToEditMusicViewPage,
    navigateToCreateMusicViewPage,
    ...musicViewSelectBaseProps
  } = props
  return (
    <MusicViewSelectBase
      SelectMenu={CuratorSelectMenu}
      customOptionActionItemProps={{
        navigateToEditMusicViewPage,
      }}
      customMenuFooterProps={{
        navigateToCreateMusicViewPage,
      }}
      {...musicViewSelectBaseProps}
    />
  )
}

interface CuratorSelectMenuProps
  extends SelectMenuProps<
    CustomCuratorOptionActionItemProps,
    CustomCuratorMenuFooterProps
  > {}

function CuratorSelectMenu(props: CuratorSelectMenuProps) {
  return (
    <SelectMenuBase
      OptionActionItem={CuratorOptionActionItem}
      MenuFooter={CurtatorMenuFooter}
      {...props}
    />
  )
}

interface CuratorOptionActionItemProps
  extends OptionActionItemProps<CustomCuratorOptionActionItemProps> {}

interface CustomCuratorOptionActionItemProps
  extends Pick<CuratorMusicViewSelectProps, 'navigateToEditMusicViewPage'> {}

function CuratorOptionActionItem(props: CuratorOptionActionItemProps) {
  const {
    getOptionActionButtonProps,
    musicViewIndex,
    navigateToEditMusicViewPage,
    someMusicView,
  } = props
  return (
    <div className={cssModule.optionActionItem}>
      <Button
        {...getOptionActionButtonProps(musicViewIndex)}
        onSelect={() => {
          navigateToEditMusicViewPage(someMusicView)
        }}
      >
        <svg className={cssModule.optionActionIcon} viewBox={'0 0 24 24'}>
          <g>
            <g>
              <path d="M20.08,11.42l-4.04-5.65C15.7,5.29,15.15,5,14.56,5h0c-1.49,0-2.35,1.68-1.49,2.89L16,12l-2.93,4.11 c-0.87,1.21,0,2.89,1.49,2.89h0c0.59,0,1.15-0.29,1.49-0.77l4.04-5.65C20.33,12.23,20.33,11.77,20.08,11.42z" />
              <path d="M13.08,11.42L9.05,5.77C8.7,5.29,8.15,5,7.56,5h0C6.07,5,5.2,6.68,6.07,7.89L9,12l-2.93,4.11C5.2,17.32,6.07,19,7.56,19h0 c0.59,0,1.15-0.29,1.49-0.77l4.04-5.65C13.33,12.23,13.33,11.77,13.08,11.42z" />
            </g>
          </g>
        </svg>
      </Button>
    </div>
  )
}

interface CuratorMenuFooterProps
  extends MenuFooterProps<CustomCuratorMenuFooterProps> {}

interface CustomCuratorMenuFooterProps
  extends Pick<CuratorMusicViewSelectProps, 'navigateToCreateMusicViewPage'> {}

function CurtatorMenuFooter(props: CuratorMenuFooterProps) {
  const { getFooterActionButtonProps, navigateToCreateMusicViewPage } = props
  return (
    <div className={cssModule.footerContainer}>
      <div className={cssModule.footerDivider} />
      <div className={cssModule.footerActionButtonContainer}>
        <Button
          {...getFooterActionButtonProps()}
          className={cssModule.footerActionButton}
          onSelect={navigateToCreateMusicViewPage}
        >
          create view
        </Button>
      </div>
    </div>
  )
}
