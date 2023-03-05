import { Bopper, BopperProps } from '@stews/components/Bopper'
import { MusicCurator } from '../../data'

export interface ProfileBopperBaseProps<CustomProfileContentProps>
  extends Pick<
    BopperProps<
      unknown,
      CustomProfileContentPropsBase & CustomProfileContentProps
    >,
    'AnchorButton' | 'PopoverContent'
  > {
  musicCurator: MusicCurator
  customProfileContentProps: CustomProfileContentProps
}

type CustomProfileContentPropsBase = Pick<
  ProfileBopperBaseProps<unknown>,
  'musicCurator'
>

export function ProfileBopperBase<CustomProfileContentProps>(
  props: ProfileBopperBaseProps<CustomProfileContentProps>
) {
  const {
    AnchorButton,
    PopoverContent,
    musicCurator,
    customProfileContentProps,
  } = props
  return (
    <Bopper
      AnchorButton={AnchorButton}
      PopoverContent={PopoverContent}
      customAnchorButtonProps={null}
      customPopoverContentProps={{
        musicCurator,
        ...customProfileContentProps,
      }}
    />
  )
}
