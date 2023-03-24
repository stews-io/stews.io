import { FunctionComponent } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { CoreAnchorButtonBaseProps } from './components/AnchorButtonBase'
import { Popover, PopoverProps } from './components/Popover'

export interface BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
  extends Pick<
    PopoverProps<CustomPopoverContentProps>,
    'PopoverContent' | 'customPopoverContentProps' | 'popoverRole'
  > {
  customAnchorButtonProps: CustomAnchorButtonProps
  AnchorButton: FunctionComponent<AnchorButtonProps<CustomAnchorButtonProps>>
}

type AnchorButtonProps<CustomAnchorButtonProps> = CoreAnchorButtonBaseProps &
  CustomAnchorButtonProps

export function Bopper<CustomAnchorButtonProps, CustomPopoverContentProps>(
  props: BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
) {
  const {
    AnchorButton,
    popoverRole,
    customAnchorButtonProps,
    PopoverContent,
    customPopoverContentProps,
  } = props
  const anchorElementRef = useRef<HTMLDivElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <AnchorButton
        popoverRole={popoverRole}
        anchorElementRef={anchorElementRef}
        setPopoverOpen={setPopoverOpen}
        {...customAnchorButtonProps}
      />
      <Popover
        popoverRole={popoverRole}
        PopoverContent={PopoverContent}
        anchorElementRef={anchorElementRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        customPopoverContentProps={customPopoverContentProps}
      />
    </Fragment>
  )
}
