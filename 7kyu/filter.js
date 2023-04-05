// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function sorts(arr){
    if(arr){
        let s = arr.sort((a, b) => a - b)
        return(s)
    }
    else{
        return []
    }
}
console.log(sorts([1, 2, 10, 50, 5]))