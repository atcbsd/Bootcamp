// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator

const isString = (value) => typeof value === 'string' ? true : false;

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false