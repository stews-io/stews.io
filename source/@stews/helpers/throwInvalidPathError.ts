export function throwInvalidPathError(pathIdentifier: string) {
  throw new Error(`invalid path: ${pathIdentifier}`)
}
