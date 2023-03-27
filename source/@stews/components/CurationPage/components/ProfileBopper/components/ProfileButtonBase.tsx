import {} from '@stews/components/Bopper'
import { AnchorButton, CoreAnchorButtonProps } from '@stews/components/Button'
import { CoreAriaOrnamentsData } from '@stews/components/Button/ButtonBase'
import { FunctionComponent } from 'preact'
import cssModule from './ProfileButtonBase.module.scss'

export interface ProfileButtonBaseProps
  extends ProfileButtonBaseConfigProps,
    ProfileButtonBaseDataProps {}

interface ProfileButtonBaseConfigProps extends CoreAriaOrnamentsData {
  ProfileIcon: FunctionComponent<unknown>
}

export interface ProfileButtonBaseDataProps
  extends Omit<CoreAnchorButtonProps, keyof CoreAriaOrnamentsData> {}

export function ProfileButtonBase(props: ProfileButtonBaseProps) {
  const {
    ariaLabel,
    ariaDescription,
    popoverAriaRole,
    anchorElementRef,
    setPopoverOpen,
    ProfileIcon,
  } = props
  return (
    <AnchorButton
      ariaLabel={ariaLabel}
      ariaDescription={ariaDescription}
      popoverAriaRole={popoverAriaRole}
      anchorElementRef={anchorElementRef}
      setPopoverOpen={setPopoverOpen}
    >
      <ProfileIcon />
    </AnchorButton>
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
