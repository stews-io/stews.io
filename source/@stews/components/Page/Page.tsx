import { ComponentProps } from 'preact'
import { useEffect } from 'preact/hooks'
import cssModule from './Page.module.scss'

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {
  pageAriaHeader: string
}

export function Page(props: PageProps) {
  const { pageAriaHeader, children } = props
  useEffect(() => {
    // have page start at top after load/refresh
    window.history.scrollRestoration = 'manual'
  }, [])
  return (
    <div className={cssModule.pageContainer}>
      <h1 style={{ display: 'none' }}>{pageAriaHeader}</h1>
      <div
        id={'pageContentContainer'}
        role={'main'}
        className={cssModule.pageContentContainer}
      >
        {children}
      </div>
    </div>
  )
}
