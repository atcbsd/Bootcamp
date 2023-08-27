// Instructions

// Write a JavaScript program that recreates the pattern below.
// Do this Daily Challenge by youself, without looking at the answers on the internet.

// const maxNumber = 6
// let stars = ""
// for (let i = 0; i < maxNumber; i++){
//     stars= stars + "*"
//     console.log (stars)
// }

// let starse = ""
// for (let i = 0; i <  6; i++){
//     starse= starse + "*"
//     console.log (starse)
// }

// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// no recomendable lo siguiente: 
const maxNumber = 6

for (let i = 0; i < maxNumber; i++) {
  const numberOfStars = i + 1
  let lineOfStars = ""
for (let j = 0; j < numberOfStars; j++) {
  lineOfStars = lineOfStars + " * "
}
console.log(lineOfStars)
}