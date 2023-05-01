// finde the other angle in a triangle

function otherAngle(a, b) {
  let c = a + b
  let d = 180 - c
  return d
}
console.log(otherAngle(60,30))