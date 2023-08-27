// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// } 

// // #1.1 - run in the console:
// funcOne()

// // #1.2 What will happen if the variable is declared 
// // Prediction: the answer would be 3 
// // Explanation: the answer is 3, we are modifying the value of let. 
// // with const instead of let ?
// // There would be an error, you can't change the value of a constant 

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
// The answer here would be 0, and then 5 

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // Prediction: first it should be 0 and then 5, because we are calling the function first without taking into acount the function two. 
// //
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // the first one would be 0 and then it would be wrong because we can't change the value. 


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// // Prediction: we are apending the variable a into window. And in funcFive the answer would be hello. If you declare the variable above said functions then the value of funcFive would be the value declared earlier and if we call window on the console there would be a variable called a with the value hello. 

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? 
// // Prediction: the answer is going to be test. If we change it to const a = 1 would be ignored and the answer is going to be test because we are calling the variable inside the function. 

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Prediction: the first alert would be 5, the second one would be 2. You are calling one inside the function and then outside. If you change it to a const it would work fine. 