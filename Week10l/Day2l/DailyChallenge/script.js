// // 1rst Daily Challenge
// // Create two functions. Each function should return a promise.
// // The first function called makeAllCaps(), takes an array of words as an argument
// // If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// // else, reject the promise with a reason.
// // The second function called sortWords(), takes an array of words uppercased as an argument
// // If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// // else, reject the promise with a reason.

//  function makeAllCaps(words) {
//     return new Promise ((resolve, reject) => {
//         if (words.every(isString)) {
//             resolve(words.map((word) => word.toUpperCase()))
//         }else {
//             reject("Sorry, all values should be strings")
//         }
//     })
// }

// function sortWords(words) {
//     return new Promise ((resolve, reject) => {
//         if (words.length >= 4){
//             resolve(words.sort())
//         } else {
//             reject("Sorry, array too short")
//         }
//     })
// }

// sortWords(["hello", "world", "hi", "friends"]).then(console.log).catch(console.error)
 
// // CALLBACK FOR EVERY
// function isString(arg) {
//     return typeof arg === "string"
// }

// // Create three functions. The two first functions should return a promise..

// // The first function is named toJs():
// // this function converts the morse json string provided above to a morse javascript object.
// // if the morse javascript object is empty, throw an error (use reject)
// // else return the morse javascript object (use resolve)

// // The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// // This function asks the user for a word or a sentence.
// // if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// // else return an array with the morse translation of the user’s word.
// // if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// // if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// // The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// // this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// // Chain the three functions.

// // FIRST PART 
// const morse = `{
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-"
//   }`

//   function toJs () {
//     return new Promise((resolve, reject) => {
//         if (morse.length === 0){
//             reject("Morse string is empty")
//         } else {
//             const morseObject = JSON.parse(morse)
//             resolve(morseObject)
//         }
//     })
//   }

//   toJs().then((res) => console.log(res)).catch((err) => console.error(err))

// SECOND PART

document.addEventListener("DOMContentLoaded", () => {
    const morse = `{
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-"
    }`;
    
    function toJs() {
        return new Promise((resolve, reject) => {
          if (morse.length === 0) {
            reject("Morse string is empty");
          } else {
            const morseObject = JSON.parse(morse);
            resolve(morseObject);
          }
        });
      }
    
      // toJs(), creates a Promise that checks if the Morse code string is empty. If it is not empty, 
      // it parses the string as JSON and returns the resulting JavaScript object. This function is 
      // necessary to convert the Morse code string into a JavaScript object that can be used to 
      // translate words into Morse code.
    
      function convertWordToMorse(word, morseJS) {
        const letters = word.split(""); // ["h", "i"]
        return letters.map((letter) => morseJS[letter]);
      }
    
      // convertWordToMorse(word, morseJS), takes a word and the JavaScript object created by toJs() as 
      // arguments. It splits the word into an array of letters and maps each letter to its Morse code 
      // equivalent in the JavaScript object. The resulting array of Morse code strings is returned.
    
    
      function isWordOkay(word, possibleLetters) {
        const userLetters = word.split(""); // ["h", "i"]
        return userLetters.every((letter) => possibleLetters.includes(letter));
      }
    
      // isWordOkay(word, possibleLetters), takes a word and an array of possible letters as arguments. 
      // It splits the word into an array of letters and checks that each letter is included in the array 
      // of possible letters. This function is used to check that the user has entered a word that can be 
      // translated into Morse code using the available characters.
    
      // It takes a word and an array of possible letters and returns a boolean value indicating 
      // whether all the letters in the word are included in the possible letters array. It does this by 
      // splitting the word into an array of individual letters, and then using the every method to check 
      // if every letter in the array is included in the possible letters array using the includes method. 
      // This function is used to check if the user input word only contains lowercase letters that have a 
      // corresponding Morse code mapping.
    
    
      function toMorse(morseJS) {
        const word = prompt("Enter a word");
        return new Promise((resolve, reject) => {
          const possibleLetters = Object.keys(morseJS);
          if (!isWordOkay(word, possibleLetters)) {
            reject("Please type lowercase characters");
          } else {
            const result = { word: word, morse: convertWordToMorse(word, morseJS) };
            resolve(result);
          }
        });
      }
    
    
      // toMorse(morseJS), creates a Promise that prompts the user to enter a word. It checks that the word 
      // can be translated into Morse code using the available characters by calling isWordOkay(). 
      // If the word is valid, it calls convertWordToMorse() to convert the word to Morse code and returns 
      // an object containing the original word and its Morse code translation.
    
    
      function joinWords(obj) {
        const word = obj.word;
        console.log("word: ", word);
        const morse = obj.morse;
        console.log("morse: ", morse);
        document.getElementById("word").innerText = word;
        for (const m of morse) {
          const p = document.createElement("p");
          p.innerText = m;
          document.getElementById("morse").appendChild(p);
        }
      }
    
    // joinWords(obj), takes an object containing a word and its Morse code translation as an argument. 
    // It sets the innerText property of the HTML element with id="word" to the original word. It creates 
    // a new p element for each Morse code string in the translation array and sets its innerText property to 
    // the Morse code string. It appends each p element to the HTML element with id="morse".
    
      toJs()
        .then((morseObj) => toMorse(morseObj))
        .then((obj) => joinWords(obj))
        .catch((err) => console.error(err));
    });
    
    // DOMContentLoaded event listener executes toJs(), which returns a Promise. This Promise is chained 
    // with toMorse(), which in turn is chained with joinWords(). If any Promise in the chain is rejected, 
    // the error is logged to the console. If all Promises in the chain are resolved, the user's entered 
    // word and its Morse code translation are displayed in the browser.