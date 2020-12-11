const { expect } = require('@jest/globals')
const { multiplyArrayValues, sumArrayValues } = require('./mathArrayValues')

describe('#sumArrayValues', () => {
  it('should sum all values', () => {
    const arr = [1, 2, 3, 4, 5]
    const expected = sumArrayValues(arr)
    expect(expected).toEqual(15)
  })
})

describe('#multiplyArrayValues', () => {
  it('should sum all values', () => {
    const arr = [1, 2, 3, 4, 5]
    const expected = multiplyArrayValues(arr)
    expect(expected).toEqual(120)
  })
})