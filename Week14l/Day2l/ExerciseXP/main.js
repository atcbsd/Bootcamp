// Exercise XP 1

const fs = require("fs/promises")

fs.readFile("./hello.txt", { encoding: "utf8" })
.then(res => console.log(res))
.catch(console.error);

// using nodemon main.js or node main.js check result in terminal


// Exercise XP 2

//1.) using nodemon main.js or node main.js, goodbye.txt is created instantly.
fs.writeFile("goodbye.txt", "Goodbye everyone");

//2.)Use the Node js file system to append some other text file.
// Add this below the first writeFile.
fs.appendFile("goodbye.txt", "\nSee you soon");

//3.) Delete the file. (comment before running first two.)
fs.unlink("goodbye.txt");