/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s - starts of house
 *  2. INTEGER t - end of house
 *  3. INTEGER a - apple tree
 *  4. INTEGER b - orange tree
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

const countValuesInRange = (start, end, array) => {
  return array.reduce((acc, value) => (((value >= start) && (value <= end)) ? ++acc : acc), 0)
}

const gradingStudents = (s, t, a, b, apples, oranges) => {

  const appleLocation = apples.map(apple => a + apple)

  const orangeLocation = oranges.map(orange => b + orange)

  return [countValuesInRange(s, t, appleLocation), countValuesInRange(s, t, orangeLocation)]
}


const response = gradingStudents(7, 11, 5, 15, [-2, 2, 1], [5, -6])

console.log(response)
