// // Store your favorite food into a variable.
// const favoriteFood = 'apple';
// // Store your favorite meal of the day into a variable (e.g., breakfast, lunch, or dinner).
// const favoriteMeal = 'breakfast';
// // Console.log: "I eat <favorite food> at every <favorite meal>."

// // console.log("I eat " + favoriteFood + " at every " + favoriteMeal + ".");

// // Template Literals
// console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`) 

// Exc 2

// Using this array : 

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];


// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

const myWatchedSeriesLength = myWatchedSeries.length;

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

const myWatchedSeriesSentence = myWatchedSeries.join(', ');
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);



// Part II
myWatchedSeries[2] = "friends"; // Changing "the big bang theory" to "friends"

myWatchedSeries.push("stranger things"); // Adding another series at the end

myWatchedSeries.unshift("game of thrones"); // Adding favorite series at the beginning

myWatchedSeries.splice(0, 1); // Deleting "black mirror"

const thirdLetter = myWatchedSeries[1][2]; // Accessing the third letter of "money heist"

console.log(`Third letter of "money heist": ${thirdLetter}`);
console.log(myWatchedSeries);