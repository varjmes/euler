const getEvenFibbonaciValues = limit => {
  const values = [1, 2]
  for (let i = 1; i <= limit; i++) {
    const sum = values[i] + values[i - 1]
    if (sum > limit) break
    values.push(sum)
  }

  return values.filter(val => val % 2 === 0)
}

module.exports = getEvenFibbonaciValues