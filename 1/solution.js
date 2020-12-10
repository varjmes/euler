// --- Problem One ---
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const { findMultiples, getUniqueValues } = require('./lib')
const sumArrayValues = require('../lib/sumArrayValues')

const multiplesOfThree = findMultiples(3, 1000)
const multiplesOfFive = findMultiples(5, 1000)
const multiples = getUniqueValues([...multiplesOfThree, ...multiplesOfFive])
const sum = sumArrayValues(multiples)

console.log(sum)