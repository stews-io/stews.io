import { CoreAriaOrnamentsData } from '@stews/hooks/useInteractiveAria'
import { FunctionComponent } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { CoreAnchorButtonProps } from '../Button'
import { Popover, PopoverProps } from '../Popover'

export interface BopperProps<
  CustomSomeAnchorButtonProps,
  CustomPopoverContentProps
> extends Pick<
    PopoverProps<CustomPopoverContentProps>,
    'PopoverContent' | 'customPopoverContentProps' | 'popoverAriaRole'
  > {
  anchorAriaLabel: CoreAriaOrnamentsData['ariaLabel']
  anchorAriaDescription: CoreAriaOrnamentsData['ariaDescription']
  customSomeAnchorButtonProps: CustomSomeAnchorButtonProps
  SomeAnchorButton: FunctionComponent<
    SomeAnchorButtonProps<CustomSomeAnchorButtonProps>
  >
}

type SomeAnchorButtonProps<CustomAnchorButtonProps> = CoreAnchorButtonProps &
  CustomAnchorButtonProps

export function Bopper<CustomSomeAnchorButtonProps, CustomPopoverContentProps>(
  props: BopperProps<CustomSomeAnchorButtonProps, CustomPopoverContentProps>
) {
  const {
    SomeAnchorButton,
    anchorAriaLabel,
    anchorAriaDescription,
    popoverAriaRole,
    customSomeAnchorButtonProps,
    PopoverContent,
    customPopoverContentProps,
  } = props
  const anchorElementRef = useRef<HTMLDivElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <SomeAnchorButton
        ariaLabel={anchorAriaLabel}
        ariaDescription={anchorAriaDescription}
        popoverAriaRole={popoverAriaRole}
        anchorElementRef={anchorElementRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        {...customSomeAnchorButtonProps}
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
