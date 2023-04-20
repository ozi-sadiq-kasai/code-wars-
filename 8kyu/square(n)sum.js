// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Complete the square sum function so that it squares each number passed into it and then sums the results together.For example, for [1, 2, 2].

function squareSum(numbers){
    let n = []
    numbers.forEach(number =>{
      let x = Math.pow(number,2)
      n.push(x)
    })
    return n.reduce((a,b) => a+b,0)
  }