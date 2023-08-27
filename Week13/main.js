const calculateCircleArea = require('./circle.js')

const radius = 5;
const area = calculateCircleArea(radius)

console.log(´The area of the circle with a radius of ${radius} is ${area.toFixed(2)}´);

// circle.js

const calculateCircleArea = (radius) => {
    return Math.PI * radius ** 2;
}

module.exports = calculateCircleArea;