import { FocusBridge, focusTargetItem } from '@stews/hooks/useFocus'
import { useFocus, UseFocusApi } from '@stews/hooks/useFocus'
import {
  FocusContextRef,
  ReadyFocusContext,
} from '@stews/hooks/useFocus/FocusContext'
import { ComponentProps, createContext } from 'preact'
import { Ref, useContext, useEffect, useRef, useState } from 'preact/hooks'
import cssModule from './Page.module.scss'

type PageContextValue = Ref<HTMLDivElement>

export const PageContext = createContext<PageContextValue>({
  current: null,
})

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {}

export function Page(props: PageProps) {
  const { children } = props
  const pageContentRef = useRef<HTMLDivElement>(null)
  const [fooItems, setFooItems] = useState<Array<number>>([])
  const focusContextRef = useContext(FocusContextRef)
  return (
    <div className={cssModule.pageContainer}>
      <div role={'main'} className={cssModule.pageContent} ref={pageContentRef}>
        <PageContext.Provider value={pageContentRef}>
          {/* {children} */}
          <FocusBridge />
          <Foo
            focusKey="add_foo"
            tabPreviousKey={'urlBar'}
            tabNextKey={fooItems.length === 0 ? 'urlBar' : `foo_${fooItems[0]}`}
            label={'add foo'}
            onSelect={() => {
              const nextFooItems = [...fooItems, Math.random()]
              setFooItems(nextFooItems)
            }}
          />
          <div
            style={{
              padding: 8,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {fooItems.map((someFooItem, fooItemIndex) => {
              return (
                <Foo
                  key={someFooItem}
                  focusKey={`foo_${someFooItem}`}
                  tabPreviousKey={
                    fooItemIndex === 0
                      ? 'add_foo'
                      : `foo_${fooItems[fooItemIndex - 1]}`
                  }
                  tabNextKey={
                    fooItemIndex === fooItems.length - 1
                      ? 'urlBar'
                      : `foo_${fooItems[fooItemIndex + 1]}`
                  }
                  label={`${someFooItem}`}
                  onSelect={() => {
                    const nextFooItems = fooItems.filter(
                      (someCurrentFooItem) => {
                        return someCurrentFooItem !== someFooItem
                      }
                    )
                    setFooItems(nextFooItems)
                    focusTargetItem({
                      focusContext:
                        focusContextRef.current as ReadyFocusContext,
                      triggerType: 'manual',
                      focusType: 'navigate',
                      focusKey: nextFooItems[fooItemIndex]
                        ? `foo_${nextFooItems[fooItemIndex]}`
                        : nextFooItems[fooItemIndex - 1]
                        ? `foo_${nextFooItems[fooItemIndex - 1]}`
                        : 'add_foo',
                    })
                  }}
                />
              )
            })}
          </div>
        </PageContext.Provider>
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
  return <button {...getFocusItemProps()}>{label}</button>
}
