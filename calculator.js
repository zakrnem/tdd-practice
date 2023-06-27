export function calculator(operation, firstNum, secondNum) {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
    throw new TypeError()
  } else {
    switch (true) {
      case operation === 'add':
        return firstNum + secondNum
        break
      case operation === 'subtract':
        return firstNum - secondNum
        break
      case operation === 'divide':
        return firstNum / secondNum
        break
      case operation === 'multiply':
        return firstNum * secondNum
        break
      default:
        throw new Error('Invalid operation')
    }
  }
  return
}
