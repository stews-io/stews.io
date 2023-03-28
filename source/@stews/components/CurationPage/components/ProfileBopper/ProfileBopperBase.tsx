import { Bopper, BopperProps } from '@stews/components/Bopper'
import { CoreAriaOrnamentsData } from '@stews/components/Button'
import { CurationPageBaseDataProps } from '../../CurationPageBase'

interface ProfileBopperBaseProps
  extends ProfileBopperBaseDataProps,
    ProfileBopperBaseConfigProps {}

export interface ProfileBopperBaseDataProps
  extends Pick<CurationPageBaseDataProps<object>, 'curatorInfo'> {}

interface ProfileBopperBaseConfigProps
  extends Pick<
    BopperProps<null, ProfileBopperBaseDataProps>,
    | 'anchorAriaLabel'
    | 'anchorAriaDescription'
    | 'AnchorButton'
    | 'PopoverContent'
  > {}

export function ProfileBopperBase(props: ProfileBopperBaseProps) {
  const {
    anchorAriaLabel,
    anchorAriaDescription,
    AnchorButton,
    PopoverContent,
    curatorInfo,
  } = props
  return (
    <Bopper
      popoverAriaRole={'dialog'}
      anchorAriaLabel={anchorAriaLabel}
      anchorAriaDescription={anchorAriaDescription}
      AnchorButton={AnchorButton}
      PopoverContent={PopoverContent}
      customAnchorButtonProps={null}
      customPopoverContentProps={{
        curatorInfo,
      }}
    />
  )
}
