import { calculator } from './calculator'

test(
  'Adds two numbers.',
  () => expect(calculator('add', 2, 2)).toEqual(4),
  expect(calculator('add', -2, 2)).toEqual(0)
)

test(
  'Subtracts two numbers.',
  () => expect(calculator('subtract', 2, 2)).toEqual(0),
  expect(calculator('subtract', -2, 2)).toEqual(-4)
)

test(
  'Divides two numbers.',
  () => expect(calculator('divide', 2, 2)).toEqual(1),
  expect(calculator('divide', -2, 2)).toEqual(-1)
)

test(
  'Multiplies two numbers.',
  () => expect(calculator('multiply', 2, 2)).toEqual(4),
  expect(calculator('multiply', -2, 2)).toEqual(-4)
)

test('Throws error on non-string input.', () => {
  expect(() => calculator('add', '2', 2)).toThrow(TypeError)
  expect(() => calculator('add', 2, '2')).toThrow(TypeError)
  expect(() => calculator('add', [3], 2)).toThrow(TypeError)
})

test('Throws error on invalid operation.', () => {
  expect(() => calculator('calc', '2', 2)).toThrow(Error)
})
