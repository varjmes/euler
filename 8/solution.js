// --- Problem Eight ---

// Find the thirteen adjacent digits in the 1000-digit number that have the
// greatest product. What is the value of this product?

const fs = require('fs')
const { multiplyArrayValues } = require('../lib/mathArrayValues')

const numStr = fs.readFileSync('input.txt').toString()
let greatestProduct = 0

for (let i = 0; i < numStr.length; i++) {
  const multiplicands = numStr.slice(i, i + 13).split('').map(Number)
  if (multiplicands.length !== 13) break

  const product = multiplyArrayValues(multiplicands)
  if (product > greatestProduct) greatestProduct = product
}

console.log(greatestProduct)