// --- Problem Seven ---
// What is the 10001st prime number?

const isPrime = require('../lib/isPrime')

let primeCount = 0
let num = 1

while (primeCount < 10001) {
  num++
  if (isPrime(num)) primeCount++
}

console.log(primeCount, num)