// Count the number of divisors of a positive integer n
function getDivisorsCnt(n){
    
    let answer = 0
    for(let count = 1; count <= n; count++){
            if(n % count === 0){
                    answer++
            }          
            }
return answer
}
console.log(getDivisorsCnt(10))