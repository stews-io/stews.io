import { JSXInternal } from 'preact/src/jsx'

export type CssClass = JSXInternal.HTMLAttributes['className']

export function getCssClass(
  baseClass: CssClass,
  ...extensionClasses: Array<[CssClass, boolean]>
): Exclude<CssClass, undefined> {
  return `${baseClass}${extensionClasses.reduce(
    (result, someExtensionClass) =>
      `${result}${someExtensionClass[1] ? ` ${someExtensionClass[0]}` : ''}`,
    ''
  )}`
}
