import { ComponentProps, createContext } from 'preact'
import { Ref, useRef } from 'preact/hooks'
import cssModule from './Page.module.scss'

type PageContextValue = Ref<HTMLDivElement>

export const PageContext = createContext<PageContextValue>({
  current: null,
})

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {}

export function Page(props: PageProps) {
  const { children } = props
  const pageContentRef = useRef<HTMLDivElement>(null)
  return (
    <div className={cssModule.pageContainer}>
      <div ref={pageContentRef} role={'main'} className={cssModule.pageContent}>
        <PageContext.Provider value={pageContentRef}>
          {children}
        </PageContext.Provider>
      </div>
    </div>
  )
}
