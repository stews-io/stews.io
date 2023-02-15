import { FocusManager } from '@stews/hooks/useFocus/FocusContext'
import {
  FocusContext,
  useFocus,
  UseFocusApi,
} from '@stews/hooks/useFocus/useFocus'
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

          <FocusManager>
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
          </FocusManager>
        </PageContext.Provider>
      </div>
    </div>
  )
}

interface FooProps
  extends Pick<UseFocusApi, 'focusKey' | 'tabNextKey' | 'tabPreviousKey'> {
  label: string
}

function Foo(props: FooProps) {
  const { focusKey, tabNextKey, tabPreviousKey, label } = props
  const { itemFocusState, getFocusItemProps } = useFocus<HTMLButtonElement>({
    focusKey,
    tabNextKey,
    tabPreviousKey,
    onSelect: () => {},
  })
  useEffect(() => {
    console.log(`${focusKey}: ${JSON.stringify(itemFocusState, null, 2)}`)
  }, [itemFocusState])
  return <button {...getFocusItemProps()}>{label}</button>
}
