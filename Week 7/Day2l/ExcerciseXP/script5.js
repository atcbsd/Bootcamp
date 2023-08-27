// 🌟 Exercise 5 : Colors #2
// Instructions
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    const suffix = (index < 3) ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["st","nd","rd", "th"];

// colors.forEach((color, index) => {
//     const suffix = (index < 3) ? ordinal[index] : ordinal[3];
//     console.log(`${index + 1}${suffix} choice is ${color}.`);
// });