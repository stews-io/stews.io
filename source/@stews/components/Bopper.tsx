import { Ref, StateUpdater, useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { JSXInternal } from 'preact/src/jsx'
import { Popover } from './Popover'

export interface BopperProps<
  CustomAnchorButtonProps,
  CustomPopoverContentProps
> {
  customAnchorButtonProps: CustomAnchorButtonProps
  customPopoverContentProps: CustomPopoverContentProps
  AnchorButton: (
    props: AnchorButtonProps<CustomAnchorButtonProps>
  ) => JSXInternal.Element
  PopoverContent: (
    props: PopoverContentProps<CustomPopoverContentProps>
  ) => JSXInternal.Element
}

type AnchorButtonProps<CustomAnchorButtonProps> = CoreAnchorButtonProps &
  CustomAnchorButtonProps

export interface CoreAnchorButtonProps {
  anchorRef: Ref<HTMLDivElement>
  setPopoverOpen: StateUpdater<boolean>
}

type PopoverContentProps<CustomPopoverContentProps> = CorePopoverContentsProps &
  CustomPopoverContentProps

export interface CorePopoverContentsProps {
  anchorRef: Ref<HTMLDivElement>
  popoverOpen: boolean
  setPopoverOpen: StateUpdater<boolean>
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
  const anchorRef = useRef<HTMLDivElement>(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Fragment>
      <AnchorButton
        anchorRef={anchorRef}
        setPopoverOpen={setPopoverOpen}
        {...customAnchorButtonProps}
      />
      <Popover
        anchorRef={anchorRef}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
      >
        <PopoverContent
          anchorRef={anchorRef}
          popoverOpen={popoverOpen}
          setPopoverOpen={setPopoverOpen}
          {...customPopoverContentProps}
        />
      </Popover>
    </Fragment>
  )
}
