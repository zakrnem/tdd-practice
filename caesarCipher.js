export function caesarCipher(offset, string) {
  const stringArray = Array.from(string)
  stringArray.forEach((character, index, array) => {
    array[index] = offsetChar(character, offset)
  })
  return stringArray.join('')
}

function offsetChar(character, offset) {
  if (offset > 25) {
    throw new Error()
  }
  if (character === ' ') return character
  else {
    character = character.toLowerCase()
    let charPosition = character.charCodeAt()
    if (charPosition >= 97 && charPosition <= 122) {//Lowercase
      charPosition += offset
      charPosition = (charPosition > 122) ? charPosition-26 : charPosition
      charPosition = (charPosition < 97) ? charPosition+26 : charPosition
      character = String.fromCharCode(charPosition)
      return character
    }
    
  }
}