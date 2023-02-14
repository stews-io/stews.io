import { FocusContext, useFocus, UseFocusApi } from '@stews/hooks/useFocus'
import { ComponentProps, createContext } from 'preact'
import { forwardRef, HTMLAttributes } from 'preact/compat'
import { useContext, useEffect, useRef, Ref } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
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
      <div role={'main'} className={cssModule.pageContent} ref={pageContentRef}>
        <PageContext.Provider value={pageContentRef}>
          {/* {children} */}
          <FocusContext.Provider
            value={{
              setSourceFocusState: null,
              focusItems: {},
            }}
          >
            <Foo
              label={'a'}
              focusKey={'a'}
              tabNextKey={'b'}
              tabPreviousKey={'b'}
            />
            <Foo
              label={'b'}
              focusKey={'b'}
              tabNextKey={'a'}
              tabPreviousKey={'a'}
            />
          </FocusContext.Provider>
        </PageContext.Provider>
      </div>
    </div>
  )
}

interface FooProps
  extends Pick<
    UseFocusApi<'button'>,
    'focusKey' | 'tabNextKey' | 'tabPreviousKey'
  > {
  label: string
}

function Foo(props: FooProps) {
  const { focusKey, tabNextKey, tabPreviousKey, label } = props
  const { focusState, getFocusItemProps } = useFocus<'button'>({
    focusKey,
    tabNextKey,
    tabPreviousKey,
    onClick: () => {},
  })
  useEffect(() => {
    console.log(`${focusKey}: ${focusState}`)
  }, [focusState])
  return <button {...getFocusItemProps()}>{label}</button>
}
