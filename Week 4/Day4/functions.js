// function infoAboutMe() {
//     console.log("Hello i am Abdo");
//   }
  
  // Call the function
//   infoAboutMe();

//   function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log("Your name is", personName)
//     console.log("Your are", personAge, "years old")
//     console.log("Your favorite color is", personFavoriteColor)
//   }

//   infoAboutPerson("John", 25, "red")
//   infoAboutPerson("Sam", 14, "Orange")

  //2

//   function calculateTip() {

//     const amount = Number(prompt("How much is the bill"))
//     let tipPercent

//     if (amount < 50) tipPercent = 0.2
//     if (amount > 50 && amount < 200) tipPercent =0.15
//     if (amoun > 200) tipPercent = 0.1

//     const totalBill = amount * (1 + tipPercent)
        
//         console.log("bill: ", amount)
//         console.log("total bill including tip: ",totalBill)
//   }

//   calculateTip()
  

//   Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// function isDivisible() {
//     let sum = 0
//     for (let i = 0; i < 500; i++ ) {
//         if (i % 23 === 0) {
//             console.log(i)
//             sum = sum + i
//         }
//     }
// console.log("The sum of numbers divisible by 23 is: ",sum)
    // }

    // isDivisible()

//     Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

// function isDivisible() {
//     let sum = 0
//     for (let i = 0 ; i < 500; i++) {
//         if (i % divisor === 0) {
//             console.log(i)
//             sum = sum + i
//         }
//     }
// }

// Exercise 4 : Shopping List
// Instructions
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  
// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// const shoppingList = ["banana", "orange", "apple"]
// function myBill() {
//     for (const item of shoppingList) {
//     const quantityInStock = stock[item]
    
//     if (quantityInStock > 0) {
//         const price = prices[item]
//         console.log("the price of: ", item, "is ", price)
//         console.log("We have these many in stock: ", stock[item])
//         stock[item] = stock[item] - 1
//         console.log("and now the new quantity of this item in stock is", stock[item])
//     } else {
//         console.log("there is no", item, "in stock")
//     }
// }
// }

// myBill()


// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// // changeEnough(0.75, [0,0,20,5]) => returns true


// function changeEnough(itemPrice, amountOfChange) {
//   console.log("the item price is", itemPrice)
//   const sum = calculateSum(amountOfChange)
//   return (sum > itemPrice)
// }

// function calculateSum(arr) {
//   let sum = 0

//   for (let i = 0; i < arr.length; i++){
//       let coinValue
//       const numberOfCoins = arr[i]
//       if (i === 0) {coinValue = 0.25}
//       if (i === 1) {coinValue = 0.10}
//       if (i === 2) {coinValue = 0.05}
//       if (i === 3) {coinValue = 0.01}
//       console.log("We have ", numberOfCoins, " coins that have a value of ", coinValue)
      
//       sum = sum + numberOfCoins * coinValue
//   }
//   console.log("you own", sum)
//   return sum
// }
// changeEnough(4.25, [25, 20, 5, 0])




/* Exercise 6 : Vacations Costs
Instructions
Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.

Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$

Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


def hotelCost():
    while True:
        try:
            nights = int(input("¿Cuántas noches te gustaría alojarte en el hotel? "))
            if nights <= 0:
                print("Ingrese un número positivo.")
            else:
                return nights * 140
        except ValueError:
            print("Ingrese un número válido.")


def planeRideCost():
    while True:
        destination = input("¿Cuál es tu destino? ")
        if destination.lower() == "londres":
            return 183
        elif destination.lower() == "parís":
            return 220
        elif destination:
            return 300
        else:
            print("Ingrese un destino válido.")


def rentalCarCost():
    while True:
        try:
            days = int(input("¿Por cuántos días le gustaría alquilar el automóvil? "))
            if days <= 0:
                print("Ingrese un número positivo.")
            else:
                cost = days * 40
                if days >= 10:
                    cost *= 0.95
                return cost
        except ValueError:
            print("Ingrese un número válido.")


def totalVacationCost():
    print("Bienvenido a su planificador de vacaciones.")
    hotel = hotelCost()
    plane = planeRideCost()
    rental = rentalCarCost()
    total = hotel + plane + rental
    print(f"El hotel cuesta: ${hotel}, los billetes de avión cuestan: ${plane}, el coche cuesta: ${rental}.")
    print(f"El costo total de sus vacaciones es: ${total}.")


totalVacationCost()

*/
function hotelCost(){

  let answer
  while (!isOnlyNumbers(answer)) {
answer = prompt("How many nights would you like to stay?")
  }
  const numberOfNights = Number(answer)
  const costPerNight = 140
  const totalPrice = numberOfNights * costPerNight
  return totalPrice
}


// ^ ---- Option + {
  function isOnlyNumbers(str) {
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function includesNumbers(str) {
    const regex = new RegExp(/\d/)
    return regex.test(str)
}


// // The [0-9] expression is used to find any character between the brackets. 
// // The digits inside the brackets can be any numbers or span of numbers from 0 to 9. 
// // Tip: Use the [^0-9] expression to find any character that is NOT a digit.

// // test. The test() method tests for a match in a string.
// // If it finds a match, it returns true, otherwise it returns false.

function planeRideCost() {
  let destination =""

  while (destination == "" ||  includesNumbers(destination)){
    destination = promp("whwre are you going ?")
  }
  console.log("your destination is", destination)
  if (destination === "London") return 183
  if (destination === "Paris") return 220
  return 300
}





function rentalCost(){
  let answer = ""

  while (!isOnlyNumbers(answer)) {
    answer = prompt("How many days would you like to rent the car?")

    const dailyPrice = 40;
    const numberOfDays = Number(answer)

    let discount = 0
    if (numberOfDays >= 10) discount = 0.05

    const totalPrice = dailyPrice * numberOfDays * (1 - discount)
    return totalPrice
  }
}











function totalVacationCost() {
  const carPrice = rentalCarCost()
  const hotelPrice = hotelCost()
  const planePrice = planeRideCost()

  console.log.apply("hotelPrice:", hotelPrice)
  console.log("carPrice", carPrice)
  console.log("planePrice:", planePrice)

  const totalPrice = carPrice + hotelPrice + planePrice
  console.log("total price", totalPrice)
}
totalVacationCost()




function hotelCost(numberOfNights){

    const costPerNight = 140
    const totalPrice = Number(numberOfNights) * costPerNight
    return totalPrice
}
 // ^ ---- Option + {
function isOnlyNumbers(str) {
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function includesNumbers(str) {
    const regex = new RegExp(/\d/)
    return regex.test(str)
}


function planeRideCost(destination) {
    console.log("your destination is", destination)
    if (destination === "London") return 183
    if (destination === "Paris") return 220
    return 300
}



function rentalCarCost(carAnswer) {

const dailyPrice = 40;
const numberOfDays = Number(carAnswer)

let discount = 0
if (numberOfDays >= 10) discount = 0.05

const totalPrice = dailyPrice * numberOfDays * (1 - discount)
return totalPrice 
}





function totalVacationCost() {
    let hotelAnswer
    let carAnswer
    let destination = ""

    while (!isOnlyNumbers(hotelAnswer)) {
        hotelAnswer = prompt("How many nights would you like to stay?")
    }
 
    while (!isOnlyNumbers(carAnswer)) {
        carAnswer = prompt("How many days would you like to rent the car?")
    }

    while (destination == "" || includesNumbers(destination)){
        destination = prompt("Where are you going ?")
    }

    const carPrice = rentalCarCost(carAnswer)
    const hotelPrice = hotelCost(hotelAnswer)
    const planePrice = planeRideCost(destination)

    console.log("hotelPrice: ", hotelPrice)
    console.log("carPrice: ", carPrice)
    console.log("planePrice: ", planePrice)

    const totalPrice = carPrice + hotelPrice + planePrice
    console.log("total Price: ", totalPrice)
}
totalVacationCost()



function hotelCost(numberOfNights){

  const costPerNight = 140
  const totalPrice = Number(numberOfNights) * costPerNight
  return totalPrice
}
// ^ ---- Option + {
function isOnlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/)
  return regex.test(str)
}

function includesNumbers(str) {
  const regex = new RegExp(/\d/)
  return regex.test(str)
}


function planeRideCost(destination) {
  console.log("your destination is", destination)
  if (destination === "London") return 183
  if (destination === "Paris") return 220
  return 300
}



function rentalCarCost(carAnswer) {

const dailyPrice = 40;
const numberOfDays = Number(carAnswer)

let discount = 0
if (numberOfDays >= 10) discount = 0.05

const totalPrice = dailyPrice * numberOfDays * (1 - discount)
return totalPrice 
}





function totalVacationCost() {
  let hotelAnswer
  let carAnswer
  let destination = ""

  while (!isOnlyNumbers(hotelAnswer)) {
      hotelAnswer = prompt("How many nights would you like to stay?")
  }

  while (!isOnlyNumbers(carAnswer)) {
      carAnswer = prompt("How many days would you like to rent the car?")
  }

  while (destination == "" || includesNumbers(destination)){
      destination = prompt("Where are you going ?")
  }

  const carPrice = rentalCarCost(carAnswer)
  const hotelPrice = hotelCost(hotelAnswer)
  const planePrice = planeRideCost(destination)

  console.log("hotelPrice: ", hotelPrice)
  console.log("carPrice: ", carPrice)
  console.log("planePrice: ", planePrice)

  const totalPrice = carPrice + hotelPrice + planePrice
  console.log("total Price: ", totalPrice)
}
totalVacationCost()