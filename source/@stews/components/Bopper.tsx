import { useMemo, useRef, useState } from 'preact/hooks'
import { Fragment } from 'preact/jsx-runtime'
import { JSXInternal } from 'preact/src/jsx'
import { ButtonProps } from './Button'
import { Popover, PopoverProps } from './Popover'

export interface BopperProps<CustomAnchorButtonProps, CustomPopoverContentProps>
  extends Pick<
    PopoverProps<CustomPopoverContentProps>,
    'PopoverContent' | 'customPopoverContentProps'
  > {
  customAnchorButtonProps: CustomAnchorButtonProps
  AnchorButton: (
    props: AnchorButtonProps<CustomAnchorButtonProps>
  ) => JSXInternal.Element
}

type AnchorButtonProps<CustomAnchorButtonProps> = CoreAnchorButtonProps &
  CustomAnchorButtonProps

export interface CoreAnchorButtonProps
  extends Pick<ButtonProps, 'onSelect'>,
    Pick<PopoverProps<unknown>, 'anchorElementRef'> {}

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
  const coreAnchorButtonProps = useMemo(
    () => ({
      anchorElementRef,
      onSelect: () => {
        setPopoverOpen(true)
      },
    }),
    [anchorElementRef, setPopoverOpen]
  )
  return (
    <Fragment>
      <AnchorButton {...coreAnchorButtonProps} {...customAnchorButtonProps} />
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
