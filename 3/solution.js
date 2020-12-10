// --- Problem Three ---

// The prime factors of 13195 are 5, 7, 13 and 29.

//  What is the largest prime factor of the number 600851475143?

const { getPrimeFactors } = require('./lib')
const primes = getPrimeFactors(600851475143)

console.log(Math.max(...primes))

// James, you really overengineered this solution.
// You didn't need to generate a mass amount of primes first, you simply needed
// to do the following, which you did in a really roundabout way in your above
// solution!

let i = 2;
let total = 600851475143
while (i < total) {
  if (total % i === 0) {
    total /= i
  } else {
    i++
  }
}

console.log(total)