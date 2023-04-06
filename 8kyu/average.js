//    Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
  // your code here
     if(array.length !== 0){
    let result = array.reduce((a,b)=> a+b,0)/array.length
    return result
   }
    else{
        return 0
    }
}
  console.log(findAverage([57,81,57,99,66,98,91]))
