// --- Problem Six ---

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

const { sumArrayValues } = require('../lib/mathArrayValues')

const nums = Array.from({ length: 100 }, (_, k)=> k + 1)
const sumOfSquares = sumArrayValues(nums.map(num => Math.pow(num, 2)))
const squareOfSum = Math.pow(sumArrayValues(nums), 2)
const difference = squareOfSum - sumOfSquares

console.log(difference)