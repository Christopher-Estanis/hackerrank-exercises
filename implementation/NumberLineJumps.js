/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

const gradingStudents = (x1, v1, x2, v2) => {
  const oneIsGrater = x1 > x2
  let greater = oneIsGrater ? x1 : x2
  let greaterAdd = oneIsGrater ? v1 : v2

  let lower = oneIsGrater ? x2 : x1
  let lowerAdd = oneIsGrater ? v2 : v1

  if (greaterAdd >= lowerAdd) return 'NO'

  while (lower < greater) {
    greater += greaterAdd
    lower += lowerAdd
  }

  return lower === greater ? 'YES' : 'NO'
}


const response = gradingStudents(0, 3, 4, 2)

console.log(response)
