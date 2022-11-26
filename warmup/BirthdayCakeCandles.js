
const birthdayCakeCandles = (candles) => {
  const tallestCandle = Math.max(...candles)
  const result = candles.filter(candle => candle === tallestCandle)
  console.log(result.length)
  return result
}


const response = birthdayCakeCandles([1, 2, 3, 4, 5, 5])


console.log(response)