import { FunctionComponent } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { CoreAnchorButtonProps, CoreAriaOrnamentsData } from '../Button'
import { Popover, PopoverProps } from '../Popover'

export interface BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
  extends Pick<
    PopoverProps<CustomPopoverContentProps>,
    'PopoverContent' | 'customPopoverContentProps' | 'popoverAriaRole'
  > {
  anchorAriaLabel: CoreAriaOrnamentsData['ariaLabel']
  anchorAriaDescription: CoreAriaOrnamentsData['ariaDescription']
  customAnchorButtonProps: CustomAnchorButtonProps
  AnchorButton: FunctionComponent<AnchorButtonProps<CustomAnchorButtonProps>>
}

type AnchorButtonProps<CustomAnchorButtonProps> = CoreAnchorButtonProps &
  CustomAnchorButtonProps

export function Bopper<CustomAnchorButtonProps, CustomPopoverContentProps>(
  props: BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
) {
  const {
    AnchorButton,
    anchorAriaLabel,
    anchorAriaDescription,
    popoverAriaRole,
    customAnchorButtonProps,
    PopoverContent,
    customPopoverContentProps,
  } = props
  const anchorElementRef = useRef<HTMLDivElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <AnchorButton
        ariaLabel={anchorAriaLabel}
        ariaDescription={anchorAriaDescription}
        popoverAriaRole={popoverAriaRole}
        anchorElementRef={anchorElementRef}
        setPopoverOpen={setPopoverOpen}
        {...customAnchorButtonProps}
      />
      <Popover
        popoverAriaRole={popoverAriaRole}
        PopoverContent={PopoverContent}
        anchorElementRef={anchorElementRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        customPopoverContentProps={customPopoverContentProps}
      />
    </Fragment>
  )
}
