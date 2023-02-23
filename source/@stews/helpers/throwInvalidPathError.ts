export function throwInvalidPathError(pathIdentifier: string): never {
  throw new Error(`invalid path: ${pathIdentifier}`)
}
