import { JSXInternal } from 'preact/src/jsx'

export type CssClass = JSXInternal.HTMLAttributes['className']

export function getCssClass(
  baseClass: CssClass,
  extensionClass: CssClass
): CssClass {
  return `${baseClass} ${extensionClass}`
}
