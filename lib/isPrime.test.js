const isPrime = require('./isPrime')

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