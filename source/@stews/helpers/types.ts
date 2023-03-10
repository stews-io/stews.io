export type ArrayOfAtLeastOne<T> = [T, ...Array<T>]

export type StringPermutation<SomeString extends string> = {
  [SomeStringValue in SomeString]: [
    SomeStringValue,
    ...(Exclude<SomeString, SomeStringValue> extends never
      ? []
      : StringPermutation<Exclude<SomeString, SomeStringValue>>)
  ]
}[SomeString]
