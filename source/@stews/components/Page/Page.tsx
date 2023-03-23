import { ComponentProps } from 'preact'
import { useEffect, useLayoutEffect } from 'preact/hooks'
import cssModule from './Page.module.scss'

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {}

export function Page(props: PageProps) {
  const { children } = props
  useEffect(() => {
    // enable unfocusing buttons, inputs, .etc
    document.body.setAttribute('tabIndex', '-1')
    // on load/refresh have page start at top
    window.history.scrollRestoration = 'manual'
  }, [])
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
