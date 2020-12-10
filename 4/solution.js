// --- Problem Four ---

// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


const findPalindromes = (min, max) => {
  const palindromes = []
  for (let i = min; i <= max; i++) {
    for (let j = min + 1; j <= max; j++) {
      const product = i * j
      if (isPalindrome(product)) palindromes.push(product)
    }
  }

  return palindromes
}

const isPalindrome = num => {
  const str = num.toString()
  const length = str.length
  const firstHalf = str.slice(0, length / 2)
  const secondHalf = str.slice(length / 2, length).split('').reverse().join('')

  return firstHalf === secondHalf
}

const pals = findPalindromes(100, 999)
console.log(Math.max(...pals))