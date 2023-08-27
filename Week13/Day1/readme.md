// myModule.js

function sayHello() {
    console.log('Hello');

}

module.exports = {
    sayHello: say Hello
};

// main.js
const myModule = require('./myModule.js');
myModule.sayHello(); // Hello!

Exxample exercise 2

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add: add,
  subtract: subtract
};

const math = require('./math');

console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2


Four Node.js / modules, exercises:
Exercise 1:
Create a module named "mathUtils" that exports a function called "sum" which takes two numbers as
parameters and returns their sum. Write a Node.js program that uses this module to find the
sum of two numbers.
Solution:
mathutils.js:
module.exports.sum = function(a, b) {
return a + b;
main.js:
const mathutils = require('./mathUtils.js');
const sumResult = mathUtils.sum (5, 7);
console.log(sumResult); // Output: 12 I

Exercise 2



stringUtils.js

module.exports.reverseString = function(str) {
  return str.split('').reverse().join('');
};


main.js

const stringUtils = require('./stringUtils');
const reversedString = stringUtils.reverseString('Hello, World!');
console.log(reversedString); // Salida: !dlroW ,olleH





module.exports.generateRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


main.js

const randomUtils = require('./randomUtils.js');
const randomNumber = randomUtils.generateRandomNumber(1, 10);
console.log(randomNumber); // Salida: Un número aleatorio entre 1 y 10 (inclusive)







mathutils.js:
export function sum(a, b) {
  return a + b;
}

index.html:
<!DOCTYPE html>
<html>
<head>
  <title>Exercise 1</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 1</h1>
  <p id="result"></p>
</body>
</html>


main.js:

import { sum } from './mathutils.js';

const sumResult = sum(5, 7);
document.getElementById('result').textContent = sumResult;






mathutils.js:
export function sum(a, b) {
  return a + b;
}

index.html:
<!DOCTYPE html>
<html>
<head>
  <title>Exercise 1</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 1</h1>
  <p id="result"></p>
</body>
</html>

main.js:
import { sum } from './mathutils.js';

const sumResult = sum(5, 7);
document.getElementById('result').textContent = sumResult;





Solution:
calculator.js:


module.exports.add = function(a, b) {
  return a + b;
};

module.exports.subtract = function(a, b) {
  return a - b;
};

module.exports.multiply = function(a, b) {
  return a * b;
};

module.exports.divide = function(a, b) {
  return a / b;
};

index.html:
<!DOCTYPE html>
<html>
<head>
<title>Exercise 3</title>
<script src="main.js" defer></script>
</head>
<body>
<h1>Exercise 3</h1>
<p id="addition"></p>
<p id="subtraction"></p>
<p id="multiplication"></p>
<p id="division"></p>
</body>
</html>



Exercise 4:
Create a module named "randomUtils" that exports a function called "generateRandomNumber" 
which takes a minimum and maximum range as parameters and returns a random number within that range. 
Write a Node.js program that uses this module to generate a random number between 1 and 10.


Solution:
randomUtils.js:


module.exports.generateRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



index.html:

html
Copy code
<!DOCTYPE html>
<html>
<head>
  <title>Exercise 5</title>
  <script src="main.js" defer></script>
</head>
<body>
  <h1>Exercise 5</h1>
  <p id="result"></p>
</body>
</html>




main.js:


const randomUtils = require('./randomUtils');

const randomNumber = randomUtils.generateRandomNumber(1, 10);
document.getElementById('result').textContent = `Random Number: ${randomNumber}`;


main.js:

const calculator = require('./calculator.js');
const additionResult = calculator.add(5, 3);
document.getElementById('addition').textContent = `Addition: ${additionResult}`;

const subtractionResult = calculator.subtract(10, 4);
document.getElementById('subtraction').textContent = `Subtraction: ${subtractionResult}`;

const multiplicationResult = calculator.multiply(7, 2);
document.getElementById('multiplication').textContent = `Multiplication: ${multiplicationResult}`;

const divisionResult = calculator.divide(20, 5);
document.getElementById('division').textContent = `Division: ${divisionResult}`;




REFACTORED 4 EXERCISES USING IMPORT AND EXPORT:


Exercise 1:
mathUtils.js:


export function sum(a, b) {
  return a + b;
}


index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 1</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 1</h1>
  <p id="result"></p>
</body>
</html>




main.js:


import { sum } from './mathUtils.js';

const sumResult = sum(5, 7);
document.getElementById('result').textContent = sumResult;
Exercise 2:
stringUtils.js:


export function reverseString(str) {
  return str.split('').reverse().join('');
}



index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 2</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 2</h1>
  <p id="result"></p>
</body>
</html>




main.js:


import { reverseString } from './stringUtils.js';

const reversedString = reverseString('Hello, World!');
document.getElementById('result').textContent = reversedString;





Exercise 3:
calculator.js:


export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}



index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 3</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 3</h1>
  <p id="addition"></p>
  <p id="subtraction"></p>
  <p id="multiplication"></p>
  <p id="division"></p>
</body>
</html>



main.js:


import { add, subtract, multiply, divide } from './calculator.js';

const additionResult = add(5, 3);
document.getElementById('addition').textContent = `Addition: ${additionResult}`;

const subtractionResult = subtract(10, 4);
document.getElementById('subtraction').textContent = `Subtraction: ${subtractionResult}`;

const multiplicationResult = multiply(7, 2);
document.getElementById('multiplication').textContent = `Multiplication: ${multiplicationResult}`;

const divisionResult = divide(20, 5);
document.getElementById('division').textContent = `Division: ${divisionResult}`;




Exercise 4:
randomUtils.js:


export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



index.html:


<!DOCTYPE html>
<html>
<head>
  <title>Exercise 5</title>
  <script src="main.js" type="module"></script>
</head>
<body>
  <h1>Exercise 5</h1>
  <p id="result"></p>
</body>
</html>



main.js:

import { generateRandomNumber } from './randomUtils.js';

const randomNumber = generateRandomNumber(1, 10);
document.getElementById('result').textContent = `Random Number: ${randomNumber}`;