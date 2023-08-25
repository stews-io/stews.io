import { Bopper, BopperProps } from '@stews/components/Bopper'
import { CurationItem } from '@stews/data/CurationItem'
import { ClientCurationSegment } from '@stews/data/CurationSegment'
import { CurationSegmentPageProps } from '../../CurationSegmentPage'

interface ProfileBopperBaseProps
  extends ProfileBopperBaseDataProps,
    ProfileBopperBaseConfigProps {}

export interface ProfileBopperBaseDataProps
  extends Pick<
    CurationSegmentPageProps,
    'clientCuratorConfig' | 'curationSegmentState'
  > {
  selectCurationSegment: (
    nextCurationSegment: ClientCurationSegment<CurationItem>
  ) => void
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
    clientCuratorConfig,
    curationSegmentState,
    selectCurationSegment,
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
        clientCuratorConfig,
        curationSegmentState,
        selectCurationSegment,
      }}
    />
  )
}
