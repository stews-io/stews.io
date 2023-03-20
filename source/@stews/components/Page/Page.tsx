import { ComponentProps } from 'preact'
import { useLayoutEffect } from 'preact/hooks'
import cssModule from './Page.module.scss'

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {}

export function Page(props: PageProps) {
  const { children } = props
  useLayoutEffect(() => {
    setPageContentStyleVariables()
    const windowResizeHandler = () => {
      setPageContentStyleVariables()
    }
    window.addEventListener('resize', windowResizeHandler)
    return () => {
      window.removeEventListener('resize', windowResizeHandler)
    }
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

function setPageContentStyleVariables() {
  const pageContentContainerElement = document.getElementById(
    'pageContentContainer'
  )
  if (pageContentContainerElement instanceof HTMLDivElement) {
    document.documentElement.style.setProperty(
      '--pageContentLeft',
      `${pageContentContainerElement.offsetLeft}px`
    )
    document.documentElement.style.setProperty(
      '--pageContentWidth',
      `${pageContentContainerElement.offsetWidth}px`
    )
  }
}
