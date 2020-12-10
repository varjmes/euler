const { expect } = require('@jest/globals')
const getEvenFibonacciValues = require('./lib')

describe('#getEvenFibonacciValues', () => {
  it('should return all even Fibonacci values', () => {
    const expected = [2, 8, 34]
    const values = getEvenFibonacciValues(89)
    expect(values).toEqual(expected)
  })
})
