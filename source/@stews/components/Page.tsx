import { Div } from '@stews/components/Primitive'
import { ComponentProps } from 'preact'
import cssModule from './Page.module.scss'

export interface PageProps extends Pick<ComponentProps<'div'>, 'children'> {}

export function Page(props: PageProps) {
  const { children } = props
  return (
    <Div className={cssModule.pageContainer}>
      <Div role={'main'} className={cssModule.pageContent}>
        {children}
      </Div>
    </Div>
  )
}
