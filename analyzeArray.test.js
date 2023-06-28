import { analyzeArray } from './analyzeArray'

const array1 = [1, 8, 3, 4, 2, 6]
const object1 = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
}
const array2 = [3, 7, 5, 10, 2, 16, 13]
const object2 = {
  average: 8,
  min: 2,
  max: 16,
  length: 7,
}

test(
  'Returns the expected properties.',
  () => expect(analyzeArray(array1)).toEqual(object1),
  expect(analyzeArray(array2)).toEqual(object2)
)
