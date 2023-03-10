import { Bopper, BopperProps } from '@stews/components/Bopper'
import { CurationPageBaseProps } from '../../CurationPageBase'
import { ProfileContentProps } from './components/ProfileContentBase'

export interface ProfileBopperBaseProps
  extends DeterminedProfileBoppersProps,
    Pick<
      BopperProps<null, ProfileContentProps>,
      'AnchorButton' | 'PopoverContent'
    > {}

export interface DeterminedProfileBoppersProps
  extends Pick<CurationPageBaseProps<unknown>, 'curatorInfo'> {}

export function ProfileBopperBase(props: ProfileBopperBaseProps) {
  const { AnchorButton, PopoverContent, curatorInfo } = props
  return (
    <Bopper
      AnchorButton={AnchorButton}
      PopoverContent={PopoverContent}
      customAnchorButtonProps={null}
      customPopoverContentProps={{
        curatorInfo,
      }}
    />
  )
}
