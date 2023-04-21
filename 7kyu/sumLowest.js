// sum the two lowest number in an array

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a-b)
    let answer = numbers[0] + numbers[1]
    return answer
  }

console.log(sumTwoSmallestNumbers([145,33,5,12]))