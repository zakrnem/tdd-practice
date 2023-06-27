export function reverseString(string) {
    if (typeof string !== 'string') {
        throw new TypeError()
    } else {
        const array = [...string]
        const result = []
        for (let key in array) {
            const index = array.length-1-key
            result.push(array[index])
        }
        return result.join('')
    }
}