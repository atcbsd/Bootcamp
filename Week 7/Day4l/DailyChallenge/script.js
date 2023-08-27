// Instructions
// Using this object :

// let client = "John";

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. 
// Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the 
// user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? 
// Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? 
// Why ?

// Invoke the cloneGroceries function.


let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
  let user = client; // user is a copy of the client variable
  client = "Betty"; // modify the client variable
  let shopping = groceries; // shopping points to the groceries object

  shopping.totalPrice = "35$"; // modify the totalPrice key in the groceries object
  shopping.other.payed = false; // modify the payed key in the groceries object

  console.log(user); // "John" - user variable is not modified
  console.log(shopping.totalPrice); // "35$" - shopping object is modified
  console.log(shopping.other.payed); // false - shopping object is modified
};

cloneGroceries();