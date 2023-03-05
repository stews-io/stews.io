import { Bopper, BopperProps } from '@stews/components/Bopper'
import { MusicCurator } from '../../data'
import { ProfileContentProps } from './components/ProfileContentBase'

export interface ProfileBopperBaseProps
  extends DeterminedProfileBoppersProps,
    Pick<
      BopperProps<unknown, ProfileContentProps>,
      'AnchorButton' | 'PopoverContent'
    > {}

export interface DeterminedProfileBoppersProps {
  musicCurator: MusicCurator
}

export function ProfileBopperBase(props: ProfileBopperBaseProps) {
  const { AnchorButton, PopoverContent, musicCurator } = props
  return (
    <Bopper
      AnchorButton={AnchorButton}
      PopoverContent={PopoverContent}
      customAnchorButtonProps={null}
      customPopoverContentProps={{
        musicCurator,
      }}
    />
  )
}
