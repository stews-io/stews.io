import { JSXInternal } from 'preact/src/jsx'

export type ArrayOfAtLeastOne<T> = [T, ...Array<T>]

export type StringPermutation<SomeString extends string> = {
  [SomeStringValue in SomeString]: [
    SomeStringValue,
    ...(Exclude<SomeString, SomeStringValue> extends never
      ? []
      : StringPermutation<Exclude<SomeString, SomeStringValue>>)
  ]
}[SomeString]

export type SimpleComponentProps<
  SomeComponent extends keyof JSXInternal.IntrinsicElements,
  SomeJsxElement extends JSXInternal.IntrinsicElements[SomeComponent] = JSXInternal.IntrinsicElements[SomeComponent]
> = {
  [JsxKey in keyof SomeJsxElement]: Exclude<
    SomeJsxElement[JsxKey],
    JSXInternal.SignalLike<unknown>
  >
}
