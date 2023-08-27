// Exercise 1:
// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

// Remove Banana from the array.
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
console.log(fruits);
// en splice, el 0 indica la posición en la que se empieza y el 1 indica la cantidad de elementos para eliminar.

// Sort the array in alphabetical order.
const fruits1 = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits1.sort();
console.log(fruits1);

// Add “Kiwi” to the end of the array.
const fruits2 = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits2.push("Kiwi");
console.log(fruits2);

// Remove “Apples” from the array. Don’t use the same method as in part 1
const fruits3 = ["Banana", "Apples", "Oranges", "Blueberries"];
delete fruits3[1];
console.log(fruits3);

// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
const fruits4 = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits4.sort();
fruits4.reverse();
console.log(fruits4);

// COMPLETE

const fruits5 = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits5.shift();
fruits5.sort();
fruits5.push("Kiwi");
fruits5.splice(0,1);
fruits5.reverse();
console.log(fruits5);

// Exercise 2: 
// Using this array :
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])