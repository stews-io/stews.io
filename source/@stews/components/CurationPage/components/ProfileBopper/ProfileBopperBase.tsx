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
    | 'anchorAriaLabel'
    | 'anchorAriaDescription'
    | 'SomeAnchorButton'
    | 'PopoverContent'
  > {}

export function ProfileBopperBase(props: ProfileBopperBaseProps) {
  const {
    anchorAriaLabel,
    anchorAriaDescription,
    SomeAnchorButton,
    PopoverContent,
    curatorInfo,
  } = props
  return (
    <Bopper
      popoverAriaRole={'dialog'}
      anchorAriaLabel={anchorAriaLabel}
      anchorAriaDescription={anchorAriaDescription}
      SomeAnchorButton={SomeAnchorButton}
      PopoverContent={PopoverContent}
      customSomeAnchorButtonProps={null}
      getPopoverLayoutTop={({ anchorElement }) => anchorElement.offsetTop - 2}
      customPopoverContentProps={{
        curatorInfo,
      }}
    />
  )
}
