import { ComponentType } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { AnchorButtonProps } from './components/AnchorButton'
import { Popover, PopoverProps } from './components/Popover'

export interface BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
  extends Pick<
    PopoverProps<CustomPopoverContentProps>,
    'PopoverContent' | 'customPopoverContentProps'
  > {
  customAnchorButtonProps: CustomAnchorButtonProps
  AnchorButton: ComponentType<AnchorButtonProps<CustomAnchorButtonProps>>
}

export function Bopper<CustomAnchorButtonProps, CustomPopoverContentProps>(
  props: BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
) {
  const {
    AnchorButton,
    customAnchorButtonProps,
    PopoverContent,
    customPopoverContentProps,
  } = props
  const anchorElementRef = useRef<HTMLDivElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <AnchorButton
        anchorElementRef={anchorElementRef}
        setPopoverOpen={setPopoverOpen}
        {...customAnchorButtonProps}
      />
      <Popover
        PopoverContent={PopoverContent}
        anchorElementRef={anchorElementRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        customPopoverContentProps={customPopoverContentProps}
      />
    </Fragment>
  )
}
