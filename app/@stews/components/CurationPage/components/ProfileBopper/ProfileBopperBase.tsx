import { Bopper, BopperProps } from '@stews/components/Bopper'
import { CurationItem } from '@stews/data/CurationItem'
import { CurationPageBaseDataProps } from '../../CurationPageBase'
import { AdjustedCurationSegment } from '@stews/data/CurationSegment'

interface ProfileBopperBaseProps
  extends ProfileBopperBaseDataProps,
    ProfileBopperBaseConfigProps {}

export interface ProfileBopperBaseDataProps
  extends Pick<
    CurationPageBaseDataProps<CurationItem>,
    'curatorInfo' | 'curationSegments' | 'activeCurationSegment'
  > {
  selectCurationSegment: (nextCurationSegment: AdjustedCurationSegment) => void
}

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
    curationSegments,
    selectCurationSegment,
    activeCurationSegment,
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
        curationSegments,
        selectCurationSegment,
        activeCurationSegment,
      }}
    />
  )
}
