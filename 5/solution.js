// --- Problem Five ---

// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

let num = 0
let found = false
for (let i = 1; i <= 1000000000; i++) {
  if (found) break
  for (let j = 1; j <= 20; j++) {
    if (i % j !== 0) break
    
    if (j === 20) {
      num = i
      found = true
    }
  }
}

console.log(num)