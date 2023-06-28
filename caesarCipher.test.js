import { caesarCipher } from './caesarCipher'

test(
    'Preservers the string if offset is equal to zero.',
    () => expect(caesarCipher(0, 'julius caesar')).toEqual('julius caesar'),
)

 test(
    'Ciphers the string sucessfully.',
    () => expect(caesarCipher(1, 'attack at dawn')).toEqual('buubdl bu ebxo'),
    expect(caesarCipher(10, 'attack at dawn')).toEqual('kddkmu kd nkgx'),
    expect(caesarCipher(25, 'attack at dawn')).toEqual('zsszbj zs czvm')
)

test('Throws error on invalid offset.', () => {
    expect(() => caesarCipher(26, 'Julius Caesar')).toThrow(Error)
})  

/*

test('Throws error on non-string input.', () => {
    expect(() => caesarCipher('add', 'Julius Caesar')).toThrow(TypeError),
    expect(() => caesarCipher('Julius Caesar')).toThrow(TypeError)
}) */