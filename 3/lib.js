const generatePrimeNumbers = limit => {
  const primes = []
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i)
  }

  return primes
}

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }

  return num > 1
}

const getPrimeFactors = number => {
  const primes = generatePrimeNumbers(10000)
  let total = number
  let factors = []

  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      if (total % primes[j] === 0) {
        factors.push(primes[j])
        total /= primes[j]
      }
    }
  }

  return factors
}

module.exports = {
  generatePrimeNumbers,
  getPrimeFactors,
  isPrime
}