
const minMaxSum = (value) => {
  const test = value.sort((a, b) => a - b).reduce((acc, number, index) => {
    if (index > 0) acc.max += number
    if (index < 3) acc.min += number
    return acc
  }, { max: 0, min: 0 })

  // const test = [10, 3, 5, 6].sort((a, b) => a - b).forEach((number, index) => {
  //   if (index > 0) result.max += number
  //   if (index < 3) result.min += number
  // })
  return test
}


const response = minMaxSum([1, 2, 3, 4, 5])


console.log(response)