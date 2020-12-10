const { expect } = require('@jest/globals')
const sumArrayValues = require('./sumArrayValues')

describe('#sumArrayValues', () => {
  it('should sum all values', () => {
    const arr = [1, 2, 3, 4, 5]
    const expected = sumArrayValues(arr)
    expect(expected).toEqual(15)
  })
})