// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 0;
const vatRate = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"]

const currentBankAccount = addVat(details);
console.log("currentBankAccount:", currentBankAccount);

function addVat(details) {
    let total = 0;
    details.forEach((detail) => {
        const numExpense = Number(detail);
        const expensewithVat = numExpense * (1 + vatRate);
        total += expensewithVat
    });
    return total;
}; 

// // otra forma de resolverlo más automatizada 
// function addVat(details) {
//     const VAT_RATE = 0.17;
//     return details.reduce((total, current) => (total +=Number(current)* (1 + VAT_RATE)), 0);
// }