const { describe, expect } = require('@jest/globals')
const { findMultiples, getUniqueValues } = require('./lib')
const sumArrayValues = require('../lib/sumArrayValues')

describe('Multiples of 3 and 5', () => {
  describe('#findMultiples', () => {
    it('should find all multiples of 3', () => {
      const multiples = findMultiples(3, 10)
      expect(multiples).toEqual([3, 6, 9])
    })
  
    it('should find all multiples of 5', () => {
      const multiples = findMultiples(5, 10)
      expect(multiples).toEqual([5])
    })
  })

  describe('#getUniqueValues', () => {
    it('should return one of each value', () => {
      const multiplesOfThree = findMultiples(3, 20)
      const multiplesOfFive = findMultiples(5, 20)
      const multiples = [...multiplesOfThree, ...multiplesOfFive]

      const uniqueValues = getUniqueValues(multiples).sort((a, b) => a - b)
      expect(uniqueValues).toEqual([ 3, 5, 6, 9, 10, 12, 15, 18])
    })
  })

  it('should sum the multiples of 3 and 5 of 1000', () => {
    const multiplesOfThree = findMultiples(3, 1000)
    const multiplesOfFive = findMultiples(5, 1000)
    const multiples = [...multiplesOfThree, ...multiplesOfFive]

    const uniqueValues = getUniqueValues(multiples)
    const sum = sumArrayValues(uniqueValues)

    expect(sum).toEqual(233168)
  })
})