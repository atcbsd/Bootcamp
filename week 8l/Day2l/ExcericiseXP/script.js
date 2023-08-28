// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// El output es: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'] combina los arrays se crea uno nuevo completo. 

// ------2------
const country = "USA";
console.log([...country]); 
// El output es: ['U', 'S', 'A'] separa cada caracter del string.

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); 
// El output es: [undefined, undefined] lo que está haciendo es ponerlos todos dentro de un mismo array


// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = users.map(user => `Hello ${user.firstName}`)
console.log(welcomeStudents)

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident')
console.log(fullStackResidents)

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents. 
const fullStackResidentsLastNames = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName)
console.log(fullStackResidentsLastNames)

// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.

const combineString = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue)
console.log(combineString)

// 🌟 Exercise 4 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.
const passedStudents = students.filter(student => student.isPassed)
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
passedStudents.forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`))