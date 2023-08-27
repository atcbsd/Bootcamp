// Exercise 1 : Divisible By Three

// Instructions

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i=0  ; i < numbers.length ;  i++  ) {
  


// // Loop through the array above and determine whether or not each number is divisible by three.
// // Each time you loop console.log true or false.



    if(numbers[i] % 3 === 0){
       console.log(true);
    }
    else{
      console.log(false);
    }
}

// Exercise 2 : Attendance

// Instructions

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}


// Given the object above where the key is the student’s name and the value is the country they are from.

// Prompt the student for their name.
let names= prompt ("Whats your name?");

// If the name is in the object, console.log the name of the student and the country they come from. 

if (names in guestList ){
  console.log (`Hi I'm ${names} and I´m from ${guestList[names]}`)
  
}
else {
  console.log ("Hi! I'm a guest.")
}
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// If the name is not in the object, console.log: "Hi! I'm a guest."