import { caesarCipher } from './caesarCipher'

test(
    'Preservers the string if offset is equal to zero.',
    () => expect(caesarCipher(0, 'Julius Caesar')).toEqual('Julius Caesar'),
)

test(
    'Works.',
    () => expect(caesarCipher(1, 'attack at dawn')).toEqual('buubdl bu ebxo'),
    expect(caesarCipher(25, 'attack at dawn')).toEqual('zsszbj zs czvm')
)

test('Throws error on non-string input.', () => {
    expect(() => caesarCipher('add', 'Julius Caesar')).toThrow(TypeError),
    expect(() => caesarCipher('Julius Caesar')).toThrow(TypeError)
})