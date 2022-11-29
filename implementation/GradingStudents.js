
const gradingStudents = (originalGrade) => {
  const finalGrade = originalGrade.map(grade => {
    const remainder = grade % 5
    const roudedValue = (5 - remainder) + grade
    return remainder >= 3 && grade > 35 ? roudedValue : grade
  })

  return finalGrade
}


const response = gradingStudents([73, 38, 3, 4, 5, 5])


console.log(response)