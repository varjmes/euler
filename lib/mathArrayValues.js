const sumArrayValues = arr => {
  return arr.reduce((acc, curr) => acc + curr, 0)
}

const multiplyArrayValues = arr => {
  return arr.reduce((acc, curr) => acc * curr)
}

module.exports = {
  multiplyArrayValues,
  sumArrayValues
}