import { caesarCipher } from './caesarCipher'

test('Preservers the string if offset is equal to zero.', () =>
  expect(caesarCipher(0, 'Julius Caesar')).toEqual('Julius Caesar'))

test(
  'Ciphers the string sucessfully.',
  () => expect(caesarCipher(1, 'attack at dawn')).toEqual('buubdl bu ebxo'),
  expect(caesarCipher(10, 'attack at dawn')).toEqual('kddkmu kd nkgx'),
  expect(caesarCipher(25, 'attack at dawn')).toEqual('zsszbj zs czvm'),
  expect(caesarCipher(5, 'Julius Caesar')).toEqual('Ozqnzx Hfjxfw')
)

test('Throws error on invalid offset.', () => {
  expect(() => caesarCipher(26, 'Julius Caesar')).toThrow(Error),
    expect(() => caesarCipher(-1, 'Julius Caesar')).toThrow(Error)
})

test('Throws TypeError for non-numeric input.', () => {
  expect(() => caesarCipher('a', 'Julius Caesar')).toThrow(TypeError),
    expect(() => caesarCipher([], 'Julius Caesar')).toThrow(TypeError)
})

test('Throws TypeError for non-string input.', () => {
  expect(() => caesarCipher(1, 1)).toThrow(TypeError),
    expect(() => caesarCipher(25, [])).toThrow(TypeError)
})
