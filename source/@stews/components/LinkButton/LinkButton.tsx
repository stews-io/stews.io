import { Button, ButtonProps } from '../Button'

export interface LinkButtonProps
  extends Pick<HTMLAnchorElement, 'href' | 'target'>,
    Omit<ButtonProps, 'onSelect' | 'href' | 'target'> {}

export function LinkButton(props: LinkButtonProps) {
  const { href, target, ...unadjustedProps } = props
  return (
    <Button
      role={'link'}
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
