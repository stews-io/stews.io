import { FocusBridge, useFocus, UseFocusApi } from '@stews/hooks/useFocus'
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
      <div role={'main'} className={cssModule.pageContent} ref={pageContentRef}>
        <PageContext.Provider value={pageContentRef}>
          {/* {children} */}
          {/* <FocusBridge /> */}
          <FocusExampleA />
        </PageContext.Provider>
      </div>
    </div>
  )
}

function FocusExampleA() {
  return (
    <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column' }}>
      <button
        {...{ foo: true }}
        style={{ marginTop: 8 }}
        onfocusin={() => {
          console.log('focusin: aaa')
        }}
        // onfocusout={(someFocusEvent) => {
        //   console.log('focusout: aaa')
        //   console.log(someFocusEvent.target)
        //   console.log(someFocusEvent.relatedTarget)
        // }}
        // onFocus={() => {
        //   console.log('focus: aaa')
        // }}
      >
        aaa
      </button>
      <div style={{ marginTop: 8 }}>
        <button
          style={{ marginTop: 8 }}
          {...{ foo: true }}
          onfocusin={(someFocusEvent) => {
            console.log('focusin: bbb')
            console.log(someFocusEvent.target)
            console.log(someFocusEvent.relatedTarget)
          }}
          // onFocus={() => {
          //   console.log(`focus: bbb`)
          // }}
          onPointerDown={(someClickEvent) => {
            if (someClickEvent.target instanceof HTMLElement) {
              someClickEvent.target.focus()
            }
            console.log('click: bbb')
          }}
        >
          bbb
        </button>
      </div>
    </div>
  )
}

function Baz() {
  const { getFocusItemProps } = useFocus<HTMLDivElement>({
    focusKey: 'page',
    tabPreviousKey: 'urlBar',
    tabNextKey: 'a',
    onSelect: () => {},
  })
  return (
    <div
      {...getFocusItemProps()}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Foo
        focusKey="a"
        tabPreviousKey={'page'}
        tabNextKey={`b`}
        label={'aaaa'}
        onSelect={() => {}}
      />
      <div
        style={{
          padding: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Foo
          focusKey={`b`}
          tabPreviousKey={'a'}
          tabNextKey={'urlBar'}
          label={'bbb'}
          onSelect={() => {}}
        />
      </div>
    </div>
  )
}

interface FooProps
  extends Pick<
    UseFocusApi,
    'focusKey' | 'tabNextKey' | 'tabPreviousKey' | 'onSelect'
  > {
  label: string
}

function Foo(props: FooProps) {
  const { focusKey, tabNextKey, tabPreviousKey, onSelect, label } = props
  const { itemFocusState, getFocusItemProps } = useFocus<HTMLButtonElement>({
    focusKey,
    tabNextKey,
    tabPreviousKey,
    onSelect,
  })
  // useEffect(() => {
  //   if (itemFocusState?.stateType === 'internal') {
  //     console.log(itemFocusState)
  //   }
  // }, [itemFocusState])
  return (
    <button
      {...getFocusItemProps()}
      style={{ marginTop: 32 }}
      onFocus={() => {
        console.log('asdfsda')
      }}
    >
      {label}
    </button>
  )
}
