import { Button } from '@stews/components/Button'
import { getCssClass } from '@stews/helpers'
import { MusicView } from '@stews/pages/MusicCurationsPage/data'
import { Ref, StateUpdater } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import {
  useSelectMenuNavigation,
  UseSelectMenuNavigationResult,
} from '../hooks/useSelectMenuNavigation'
import { MusicViewSelectBaseProps } from '../MusicViewSelectBase'
import cssModule from './SelectMenuBase.module.scss'

export interface SelectMenuProps<CustomOptionActionProps, CustomMenuFooterProps>
  extends Pick<
    MusicViewSelectBaseProps<CustomOptionActionProps, CustomMenuFooterProps>,
    | 'musicViews'
    | 'selectedMusicView'
    | 'selectMusicView'
    | 'customOptionActionProps'
    | 'customMenuFooterProps'
  > {
  anchorRef: Ref<HTMLDivElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
}

export interface SelectMenuBaseProps<
  CustomOptionActionProps,
  CustomMenuFooterProps
> extends SelectMenuProps<CustomOptionActionProps, CustomMenuFooterProps> {
  OptionAction: (
    props: OptionActionProps<CustomOptionActionProps>
  ) => JSXInternal.Element | null
  MenuFooter: (
    props: MenuFooterProps<CustomMenuFooterProps>
  ) => JSXInternal.Element | null
}

export type OptionActionProps<CustomOptionActionProps> =
  CustomOptionActionProps &
    Pick<UseSelectMenuNavigationResult, 'getOptionActionProps'> & {
      someMusicView: MusicView
      musicViewIndex: number
    }

export type MenuFooterProps<CustomMenuFooterProps> = CustomMenuFooterProps &
  Pick<UseSelectMenuNavigationResult, 'getFooterActionProps'>

export function SelectMenuBase<CustomOptionActionProps, CustomMenuFooterProps>(
  props: SelectMenuBaseProps<CustomOptionActionProps, CustomMenuFooterProps>
) {
  const {
    anchorRef,
    popoverOpen,
    setPopoverOpen,
    musicViews,
    selectedMusicView,
    selectMusicView,
    OptionAction,
    customOptionActionProps,
    MenuFooter,
    customMenuFooterProps,
  } = props
  const {
    focusedViewIndex,
    getMenuContainerProps,
    getMenuOptionProps,
    getOptionActionProps,
    getFooterActionProps,
  } = useSelectMenuNavigation({
    anchorRef,
    popoverOpen,
    setPopoverOpen,
  })
  return (
    <div className={cssModule.menuContainer} {...getMenuContainerProps()}>
      <div className={cssModule.optionList}>
        {musicViews.map((someMusicView, musicViewIndex) => (
          <Button
            {...getMenuOptionProps(musicViewIndex)}
            key={someMusicView.viewId}
            className={getCssClass(
              cssModule.optionItem,
              [
                cssModule.selectedOption,
                selectedMusicView.viewId === someMusicView.viewId,
              ],
              [
                cssModule.latestFocusedOption,
                focusedViewIndex === musicViewIndex,
              ]
            )}
            onSelect={() => {
              selectMusicView(someMusicView)
            }}
          >
            <svg className={cssModule.optionSelectedIcon} viewBox={'0 0 24 24'}>
              <path
                d={
                  'M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z'
                }
              />
            </svg>
            <div className={cssModule.optionLabelContainer}>
              <div className={cssModule.optionLabel}>
                {someMusicView.viewLabel}
              </div>
            </div>
            <div className={cssModule.optionActionContainer}>
              <OptionAction
                getOptionActionProps={getOptionActionProps}
                someMusicView={someMusicView}
                musicViewIndex={musicViewIndex}
                {...customOptionActionProps}
              />
            </div>
          </Button>
        ))}
      </div>
      <MenuFooter
        getFooterActionProps={getFooterActionProps}
        {...customMenuFooterProps}
      />
    </div>
  )
}
