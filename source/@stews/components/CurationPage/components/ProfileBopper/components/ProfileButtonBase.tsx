import {
  AnchorButtonBase,
  CoreAnchorButtonBaseProps,
} from '@stews/components/Bopper'
import { FunctionComponent } from 'preact'
import cssModule from './ProfileButtonBase.module.scss'

export interface ProfileButtonBaseProps
  extends CoreAnchorButtonBaseProps,
    ProfileButtonBaseConfigProps {}

interface ProfileButtonBaseConfigProps {
  ProfileIcon: FunctionComponent<unknown>
}

export function ProfileButtonBase(props: ProfileButtonBaseProps) {
  const { popoverRole, anchorElementRef, setPopoverOpen, ProfileIcon } = props
  return (
    <AnchorButtonBase
      popoverRole={popoverRole}
      anchorElementRef={anchorElementRef}
      setPopoverOpen={setPopoverOpen}
    >
      <ProfileIcon />
    </AnchorButtonBase>
  )
}

export interface ProfileIconBaseProps {
  IconContent: FunctionComponent<unknown>
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
