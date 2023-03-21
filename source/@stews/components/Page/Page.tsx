import { ComponentProps } from 'preact'
import { useLayoutEffect } from 'preact/hooks'
import cssModule from './Page.module.scss'

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {}

export function Page(props: PageProps) {
  const { children } = props
  return (
    <div className={cssModule.pageContainer}>
      <div
        className={cssModule.pageContentContainer}
        id={'pageContentContainer'}
        role={'main'}
      >
        {children}
      </div>
    </div>
  )
}
