const findMultiples = (multiple, num) => {
  const multiples = []

  for (let i = 1; i < num; i++) {
    if (i % multiple === 0) multiples.push(i)
  }

  return multiples
}

const sumMultiples = multiples => {
  return multiples.reduce((acc, curr) => acc + curr, 0)
}

const getUniqueValues = values => {
  const set = new Set(values)
  return [...set]
}

module.exports = {
  findMultiples,
  getUniqueValues,
  sumMultiples
}