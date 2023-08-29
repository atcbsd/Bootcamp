// Run nodemon or node fs.js

// const fs = require("fs");
// const data = fs.readFileSync("RightLeft.txt", "utf-8");
// console.log("data:", data);


//4.) 
// const fs = require("fs");
// const characters = fs.readFileSync("RightLeft.txt", "utf-8").split("");

// let position = 0;
// for (const character of characters) {
//     if (character === "<") {
//         position = position - 1;
//     } else if (character === ">") {
//         position = position + 1;
//     } else {
//         console.log("This is a wrong character");
//     }
// }

// let leftOrRight;
// if (position < 0) {
//     leftOrRight = "to the left";
// } else if (position > 0) {
//     leftOrRight = "to the right";
// } else {
//     leftOrRight = "";
// }
// console.log(`${Math.abs(position)} steps ${leftOrRight}`);



//5.)

// const fs = require("fs");
// const characters = fs.readFileSync("RightLeft.txt", "utf-8").split("");
// let position = 0;
// let steps = 0;

// for (const character of characters) {
//     if (character === "<") {
//         position = position - 1;
//     } else if (character === ">") {
//         position = position + 1;
//     } else {
//         console.log("This is a wrong character");
//     }
//     steps += 1;
//     if (position === -1) {
//         break;
//     }
// }

// console.log(`${steps} steps to hit position -1`);



//Refactored Code Both 4 and 5 answers:


const fs = require("fs");
const characters = fs.readFileSync("RightLeft.txt", "utf-8").split("");

let position = 0;
let steps = 0;

for (const character of characters) {
    if (character === "<") {
        position = position - 1;
    } else if (character === ">") {
        position = position + 1;
    } else {
        console.log("This is a wrong character");
    }
    steps += 1;
    if (position === -1) {
        break;
    }
}

let leftOrRight;
if (position < 0) {
    leftOrRight = "to the left";
} else if (position > 0) {
    leftOrRight = "to the right";
} else {
    leftOrRight = "";
}

console.log(`${Math.abs(position)} steps ${leftOrRight}`);
console.log(`${steps} steps to hit position -1`);




// Let's go through the code step by step:

// const fs = require("fs");: This line imports the built-in Node.js module fs (File System), which provides 
// methods for working with files.
// const characters = fs.readFileSync("RightLeft.txt", "utf-8").split("");: This line reads the contents of 
// the file named "RightLeft.txt" synchronously using fs.readFileSync(). It assumes the file is encoded in 
// UTF-8. The split("") method then splits the contents into an array of individual characters.
// let position = 0;: This initializes a variable position to keep track of the current position. It starts 
// at 0.
// let steps = 0;: This initializes a variable steps to keep track of the number of steps taken. It starts at 0.
// for (const character of characters) {: This starts a loop that iterates over each character in the 
// characters array.
// Inside the loop, the code checks the value of each character:
// if (character === "<"): If the character is "<", it means to move one step to the left. The position is 
// decremented by 1.
// else if (character === ">"): If the character is ">", it means to move one step to the right. The position 
// is incremented by 1.
// else: If the character is neither "<" nor ">", it means it is an invalid character. The code logs a message 
// saying "This is a wrong character".
// steps += 1;: After each step, the steps variable is incremented by 1 to keep track of the total number of 
// steps taken.
// if (position === -1) { break; }: This condition checks if the current position is -1. If it is, it means we 
// have hit the position -1 and the loop is exited using break;.
// After the loop ends, the code determines the direction and number of steps taken:
// if (position < 0): If the final position is less than 0, it means we ended up to the left of the starting 
// position. The leftOrRight variable is set to "to the left".
// else if (position > 0): If the final position is greater than 0, it means we ended up to the right of the 
// starting position. The leftOrRight variable is set to "to the right".
// else: If the final position is 0, it means we ended up at the starting position or never moved. The 
// leftOrRight variable is set to an empty string.
// console.log(${Math.abs(position)} steps ${leftOrRight});: This logs the absolute value of the position 
// (to ensure it's always positive) along with the leftOrRight direction.
// console.log(${steps} steps to hit position -1);: This logs the total number of steps taken (steps) to hit 
// the position -1.
// In summary, this code reads a file containing symbols ">" and "<", simulating steps to the left and right, 
// respectively. It calculates the final position, determines the direction (left or right), and logs the 
// number of steps taken to reach position -1.