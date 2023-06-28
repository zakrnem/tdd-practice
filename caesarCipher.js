export function caesarCipher(offset, string) {
  if (offset > 25 || offset < 0) {
    throw new Error('Enter a offset value between 1 and 25')
  }
  if (typeof offset !== 'number' || typeof string !== 'string') {
    throw new TypeError()
  }
  const stringArray = Array.from(string)
  stringArray.forEach((character, index, array) => {
    array[index] = offsetChar(character, offset)
  })
  return stringArray.join('')
}

function offsetChar(character, offset) {
  if (character === ' ') return character
  else {
    let charPosition = character.charCodeAt()
    if (charPosition >= 65 && charPosition <= 90) {
      //Uppercase
      charPosition += offset
      charPosition = charPosition > 90 ? charPosition - 26 : charPosition
      charPosition = charPosition < 65 ? charPosition + 26 : charPosition
      character = String.fromCharCode(charPosition)
      return character
    }
    if (charPosition >= 97 && charPosition <= 122) {
      //Lowercase
      charPosition += offset
      charPosition = charPosition > 122 ? charPosition - 26 : charPosition
      charPosition = charPosition < 97 ? charPosition + 26 : charPosition
      character = String.fromCharCode(charPosition)
      return character
    }
  }
}
