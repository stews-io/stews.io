import { AnchorButton, CoreAnchorButtonProps } from '@stews/components/Bopper'
import { ComponentType } from 'preact'
import cssModule from './ProfileButtonBase.module.scss'

export interface ProfileButtonBaseProps extends CoreAnchorButtonProps {
  ProfileIcon: ComponentType<unknown>
}

export function ProfileButtonBase(props: ProfileButtonBaseProps) {
  const { anchorElementRef, setPopoverOpen, ProfileIcon } = props
  return (
    <AnchorButton
      anchorElementRef={anchorElementRef}
      setPopoverOpen={setPopoverOpen}
    >
      <ProfileIcon />
    </AnchorButton>
  )
}

export interface ProfileIconBaseProps {
  IconContent: ComponentType<unknown>
}

export function ProfileIconBase(props: ProfileIconBaseProps) {
  const { IconContent } = props
  return (
    <svg className={cssModule.profileIcon} viewBox={'-5 -5 34 34'}>
      <circle className={cssModule.iconOutlineCircle} cx={12} cy={12} r={14} />
      <IconContent />
    </svg>
  )
}
