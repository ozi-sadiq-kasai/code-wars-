// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let answer = s.split(" ")
    let arr = []
     answer.forEach(item =>{
           arr.push(item.length)
     })      
     return Math.min(...arr)
}
console.log(findShort("turns out random test cases are easier than writing out basic ones"))