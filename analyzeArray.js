export function analyzeArray(array) {
  const length = array.length
  let sum = 0
  array.forEach((el) => (sum += el))
  const average = sum / length
  const sortedArray = array.sort((a, b) => a - b)
  const min = sortedArray[0]
  const max = sortedArray[length - 1]

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  }
}
