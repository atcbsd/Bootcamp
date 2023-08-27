//EXERCISE 1

// Store your favorite food into a variable.
const favoriteFood = "doritos"
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
const favoriteMeal = "breakfast"

// Console.log I eat <favorite food> at every <favorite meal>

// CONCATENATE
console.log("I eat " + favoriteFood + " at every " + favoriteMeal)

// LITERAL
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)

// EXERCISE 2
// Part I
// Using this array : 
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]; 

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
const myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// CONCATENATION
const myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + " and " + myWatchedSeries[2];
console.log(myWatchedSeriesSentence);

// TEMPLATE LITERAL
// const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;
// console.log(myWatchedSeriesSentence);

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
const sentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`;
console.log(sentence)


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// We are not reasigning the variable we are changing the content so we can use const.
myWatchedSeries[2] = "friends"
console.log(myWatchedSeries)

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("breaking bad")
console.log(myWatchedSeries)

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("better call saul")
console.log(myWatchedSeries)

// Delete the series “black mirror”. 
delete myWatchedSeries[1]
console.log(myWatchedSeries)

// Console.log the third letter of the series “money heist”.
const moneyHeist = myWatchedSeries[2]
console.log(moneyHeist[2])

// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries)

// EXERCISE 3
// Store a celsius temperature into a variable.
const celsius = 25;

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F. 
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32 

const fahrenheit = (celsius/5*9 + 32)

console.log (celsius + " C" + " is " + fahrenheit + " F")

// EXERCISE 4

let c;
let a = 34;
let b = 21;

 console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

a = 2;

console.log(a+b) //second expression
    // Prediction: 23
    // Actual: 23

// EXERCISE 5

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: not a number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: string
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: string
// Actual: 13

"1" - "3"
// Prediction: NaN
// Actual: -2 

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: Boolean
// Actual: False

1 == "1"
// Prediction: True
// Actual: True

1 === "1"
// Prediction: false
// Actual: false

// // // 
// EXERCISE 6

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: "  "

" " + 0
// Prediction: " 0"
// Actual: " 0"

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: 0
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: 0
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN