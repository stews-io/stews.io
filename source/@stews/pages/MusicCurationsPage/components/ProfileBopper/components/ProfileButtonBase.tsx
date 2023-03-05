import {
  BopperAnchorButton,
  CoreBopperAnchorButtonProps,
} from '@stews/components/Bopper'
import { JSXInternal } from 'preact/src/jsx'
import cssModule from './ProfileButtonBase.module.scss'

export interface ProfileButtonBaseProps extends CoreBopperAnchorButtonProps {
  ProfileIcon: () => JSXInternal.Element
}

export function ProfileButtonBase(props: ProfileButtonBaseProps) {
  const { anchorElementRef, setPopoverOpen, ProfileIcon } = props
  return (
    <BopperAnchorButton
      anchorElementRef={anchorElementRef}
      setPopoverOpen={setPopoverOpen}
    >
      <ProfileIcon />
    </BopperAnchorButton>
  )
}

export interface ProfileIconBaseProps {
  IconContent: () => JSXInternal.Element
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
