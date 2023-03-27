import { Bopper, BopperProps } from '@stews/components/Bopper'
import { CurationPageBaseDataProps } from '../../CurationPageBase'

interface ProfileBopperBaseProps
  extends ProfileBopperBaseDataProps,
    ProfileBopperBaseConfigProps {}

export interface ProfileBopperBaseDataProps
  extends Pick<CurationPageBaseDataProps<object>, 'curatorInfo'> {}

interface ProfileBopperBaseConfigProps
  extends Pick<
    BopperProps<null, ProfileBopperBaseDataProps>,
    'AnchorButton' | 'PopoverContent'
  > {}

export function ProfileBopperBase(props: ProfileBopperBaseProps) {
  const { AnchorButton, PopoverContent, curatorInfo } = props
  return (
    <Bopper
      popoverAriaRole={'dialog'}
      anchorAriaLabel={'todo'}
      anchorAriaDescription={'todo'}
      AnchorButton={AnchorButton}
      PopoverContent={PopoverContent}
      customAnchorButtonProps={null}
      customPopoverContentProps={{
        curatorInfo,
      }}
    />
  )
}
