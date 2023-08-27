// EXERCISE 1

// const largeNumber = 356 
// export {largeNumber}

// const largeNumber = 356 
// module.exports = {largeNumber}

// EXERCISE 2

// const largeNumber = 356

// function getCurrentDate(){
//     const now = newDate()
//     console.log("now", now)
//     return now
// }

// module.exports = {getCurrentDate}

// EXERCISE 3

function getCurrentDate() {
    const now = new Date();
    console.log("now:", now);
    return now;
  }
  
  module.exports = { getCurrentDate };