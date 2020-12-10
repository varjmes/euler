const { expect } = require('@jest/globals')
const { generatePrimeNumbers, getPrimeFactors, isPrime } = require('./lib')

describe('#generatePrimeNumbers', () => {
  it('generate prime numbers up to the limit', () => {
    const primes = generatePrimeNumbers(30)
    const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    expect(primes).toEqual(expected)
  })
})

describe('#getPrimeFactors', () => {
  it('should get the prime factors of a number', () => {
    const primeFactors = getPrimeFactors(13195)
    const expected = [5, 7, 13, 29]
    expect(primeFactors).toEqual(expected)
  })
})

describe('#isPrime', () => {
  it('should return false if the number is not prime', () => {
    const result = isPrime(1)
    expect(result).toEqual(false)
  });

  it('should return true if the number is prime', () => {
    const result = isPrime(29)
    expect(result).toEqual(true)
  });
});

