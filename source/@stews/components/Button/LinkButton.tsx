import { SimpleComponentProps } from '@stews/helpers/types'
import {
  ButtonBase,
  ButtonBaseProps,
  CoreAriaOrnaments,
  CoreAriaOrnamentsData,
} from './ButtonBase'

export interface LinkButtonProps
  extends CoreLinkButtonProps,
    OptionalLinkButtonProps {}

export interface CoreLinkButtonProps
  extends CoreAriaOrnamentsData,
    Required<Pick<SimpleComponentProps<'a'>, 'href' | 'target'>> {}

interface OptionalLinkButtonProps
  extends Omit<
    ButtonBaseProps<LinkButtonAriaOrnaments>,
    'ariaOrnaments' | 'setCustomAriaAttributes' | 'onSelect'
  > {}

interface LinkButtonAriaOrnaments extends CoreAriaOrnaments<'link'> {}

export function LinkButton(props: LinkButtonProps) {
  const { ariaLabel, ariaDescription, href, target, ...unadjustedProps } = props
  return (
    <ButtonBase<LinkButtonAriaOrnaments>
      setCustomAriaAttributes={() => {}}
      ariaOrnaments={{
        ariaRole: 'link',
        ariaLabel,
        ariaDescription,
      }}
      onSelect={() => {
        const targetAnchorElement = document.createElement('a')
        targetAnchorElement.href = href
        targetAnchorElement.setAttribute('target', target)
        targetAnchorElement.click()
      }}
      {...unadjustedProps}
    />
  )
}
