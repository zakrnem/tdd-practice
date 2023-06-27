export function capitalize(string) {
  if (typeof string !== 'string') {
    throw new TypeError()
  } else {
    const firstLetter = string[0].toUpperCase()
    let stringArray = [...string]
    stringArray.splice(0, 1)
    const result = firstLetter + stringArray.join('')
    return result
  }
}
