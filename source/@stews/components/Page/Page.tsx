import { ComponentProps } from 'preact'
import { useEffect, useLayoutEffect } from 'preact/hooks'
import cssModule from './Page.module.scss'

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {
  pageAccessibilityHeader: string
}

export function Page(props: PageProps) {
  const { pageAccessibilityHeader, children } = props
  useEffect(() => {
    // enable unfocusing buttons, inputs, .etc
    document.body.setAttribute('tabIndex', '-1')
    // have page start at top after load/refresh
    window.history.scrollRestoration = 'manual'
  }, [])
  return (
    <div className={cssModule.pageContainer}>
      <div
        id={'pageContentContainer'}
        role={'main'}
        className={cssModule.pageContentContainer}
      >
        <h1 className={cssModule.pageAccessibilityHeader}>
          {pageAccessibilityHeader}
        </h1>
        {children}
      </div>
    </div>
  )
}
