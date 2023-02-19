import { RoutableProps } from 'preact-router'
import cssModule from './FocusExample.module.scss'

export interface FocusExampleAProps extends Pick<RoutableProps, 'path'> {}

export function FocusExampleA(props: FocusExampleAProps) {
  return (
    <div className={cssModule.exampleContainer}>
      <button
        {...getFocusItemProps({
          focusItemId: 'button-a',
        })}
      >
        button
      </button>
      <input
        placeholder={'input'}
        {...getFocusItemProps({
          focusItemId: 'input-a',
        })}
      />
      <div
        tabIndex={0}
        {...getFocusItemProps({
          focusItemId: 'div-a',
        })}
      >
        div with tabIndex
      </div>
    </div>
  )
}

interface GetFocusItemPropsApi {
  focusItemId: string
}

function getFocusItemProps(api: GetFocusItemPropsApi) {
  const { focusItemId } = api
  return {
    'focus-item-id': focusItemId,
    className: cssModule.focusItem,
    onPointerDown: (somePointerEvent: MouseEvent) => {
      if (somePointerEvent.target instanceof HTMLElement) {
        setTimeout(() => {
          if (somePointerEvent.target instanceof HTMLElement) {
            somePointerEvent.target.focus()
          }
        })
        const focusItemId =
          somePointerEvent.target.attributes.getNamedItem(
            'focus-item-id'
          )?.value
        console.log(`pointer down: ${focusItemId}`)
      }
    },
    onFocus: (someFocusEvent: FocusEvent) => {
      if (someFocusEvent.target instanceof HTMLElement) {
        const focusItemId =
          someFocusEvent.target.attributes.getNamedItem('focus-item-id')?.value
        console.log(`focus: ${focusItemId}`)
      }
    },
    onfocusin: (someFocusEvent: FocusEvent) => {
      if (someFocusEvent.target instanceof HTMLElement) {
        const focusItemId =
          someFocusEvent.target.attributes.getNamedItem('focus-item-id')?.value
        console.log(`focusin: ${focusItemId}`)
      }
      if (someFocusEvent.relatedTarget instanceof HTMLElement) {
        const relatedTargetFocusItemId =
          someFocusEvent.relatedTarget.attributes.getNamedItem(
            'focus-item-id'
          )?.value
        console.log(`focusin[relatedTarget]: ${relatedTargetFocusItemId}`)
      }
    },
    onClick: (someClickEvent: MouseEvent) => {
      if (someClickEvent.target instanceof HTMLElement) {
        const focusItemId =
          someClickEvent.target.attributes.getNamedItem('focus-item-id')?.value
        console.log(`click: ${focusItemId}`)
      }
    },
    onBlur: (someFocusEvent: FocusEvent) => {
      if (someFocusEvent.target instanceof HTMLElement) {
        const focusItemId =
          someFocusEvent.target.attributes.getNamedItem('focus-item-id')?.value
        console.log(`blur: ${focusItemId}`)
      }
    },
    onfocusout: (someFocusEvent: FocusEvent) => {
      if (someFocusEvent.target instanceof HTMLElement) {
        const focusItemId =
          someFocusEvent.target.attributes.getNamedItem('focus-item-id')?.value
        console.log(`focusout: ${focusItemId}`)
      }
    },
  }
}
