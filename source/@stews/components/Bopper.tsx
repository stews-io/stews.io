import { useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { JSXInternal } from 'preact/src/jsx'
import { Button, ButtonProps } from './Button'
import { Popover, PopoverProps } from './Popover'

export interface BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
  extends Pick<
    PopoverProps<CustomPopoverContentProps>,
    'PopoverContent' | 'customPopoverContentProps'
  > {
  customAnchorButtonProps: CustomAnchorButtonProps
  AnchorButton: (
    props: BopperAnchorButtonProps<CustomAnchorButtonProps>
  ) => JSXInternal.Element
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

export type BopperAnchorButtonProps<CustomAnchorButtonProps> =
  CustomAnchorButtonProps &
    Omit<ButtonProps, 'elementRef' | 'onSelect'> &
    Pick<PopoverProps<unknown>, 'anchorElementRef' | 'setPopoverOpen'>

export function BopperAnchorButton<CustomAnchorButtonProps>(
  props: BopperAnchorButtonProps<CustomAnchorButtonProps>
) {
  const { anchorElementRef, setPopoverOpen, ...customAnchorButtonProps } = props
  return (
    <Button
      elementRef={anchorElementRef}
      onSelect={() => {
        setPopoverOpen(true)
      }}
      {...customAnchorButtonProps}
    />
  )
}
