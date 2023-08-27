const quotes = [
    { id: 0, author: "Woody Allen", quote: "Eighty percent of success is showing up."},
    { id: 2, author: "Rhett Butler", quote: "Frankly, my dear, I don't give a damn."},
    { id: 3, author: "Thomas Edison", quote: "Genius is one percent inspiration and ninety-nine percent perspiration."},
    { id: 4, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."},
    { id: 5, author: "Oprah Winfrey", quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."},
    { id: 6, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing."},
    { id: 7, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."},
    { id: 9, author: "Mother Teresa", quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."},
    { id: 9, author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams."},
    { id: 10, author: "Benjamin Franklin", quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."},
    { id: 11, author: "Anne Frank", quote: "Whoever is happy will make others happy too."},
    { id: 12, author: "Tony Robbins", quote: "The only impossible journey is the one you never begin."},
    { id: 13, author: "Will Rogers", quote: "Don't let yesterday take up too much of today."},
    { id: 14, author: "Lao Tzu", quote: "A journey of a thousand miles begins with a single step."},
    { id: 15, author: "J.M. Power", quote: "If you want to make your dreams come true, the first thing you have to do is wake up."},
];


// DOM elements
const quoteContainer = document.getElementById("quote-container");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const numCharsBtn = document.getElementById("num-chars");
const numCharsNoSpaceBtn = document.getElementById("num-chars-nospace");
const numWordsBtn = document.getElementById("num-words");
const likeBtn = document.getElementById("like");
const addQuoteForm = document.querySelector("form");
const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");
const addQuoteBtn = document.getElementById("add-quote");

// Get random quote
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Display quote
function displayQuote(quote) {
  quoteEl.textContent = quote.quote;
  authorEl.textContent = `- ${quote.author}`;
}

// Number of characters (with spaces)
function getNumChars(str) {
  return str.length;
}

// Number of characters (without spaces)
function getNumCharsNoSpace(str) {
  return str.replace(/\s/g, "").length;
}

// Number of words
function getNumWords(str) {
  return str.split(" ").length;
}

// Add like to quote
function addLike(quote) {
  if (!quote.likes) {
    quote.likes = 1;
  } else {
    quote.likes++;
  }
  likeBtn.textContent = `Like (${quote.likes})`;
}

// Generate a new quote on button click
newQuoteBtn.addEventListener("click", function() {
let quote = getRandomQuote();
// Check if quote is already displayed
while (quoteEl.textContent === quote.quote) {
quote = getRandomQuote();
}
displayQuote(quote);
likeBtn.textContent = `Like (${quote.likes})`;
});

// Add a like to the current quote
likeBtn.addEventListener("click", function() {
const currentQuote = quotes.find(q => q.quote === quoteEl.textContent);
addLike(currentQuote);
});

// Display number of characters (with spaces)
numCharsBtn.addEventListener("click", function() {
const quoteText = quoteEl.textContent;
const numChars = getNumChars(quoteText);
alert(`Number of characters (spaces included): ${numChars}`);
});

// Display number of characters (without spaces)
numCharsNoSpaceBtn.addEventListener("click", function() {
const quoteText = quoteEl.textContent;
const numCharsNoSpace = getNumCharsNoSpace(quoteText);
alert(`Number of characters (spaces not included): ${numCharsNoSpace}`);
});

// Display number of words
numWordsBtn.addEventListener("click", function() {
const quoteText = quoteEl.textContent;
const numWords = getNumWords(quoteText);
alert(`Number of words: ${numWords}`);
});

// Add a new quote
addQuoteForm.addEventListener("submit", function(event) {
event.preventDefault();
addNewQuote();
});

// Add a new quote
function addNewQuote() {
  const newQuote = {
    id: quotes.length,
    author: authorInput.value,
    quote: quoteInput.value
  };
  quotes.push(newQuote);
  displayQuote(newQuote);
}

addQuoteBtn.addEventListener("click", function(event) {
  event.preventDefault();
  addNewQuote();
});

// Filter quotes by author
const filterForm = document.querySelector("form:last-of-type");
const authorFilterInput = document.getElementById("author-filter");
const filterBtn = document.getElementById("filter");

let filteredQuotes = [];

filterForm.addEventListener("submit", function(event) {
event.preventDefault();
const authorFilter = authorFilterInput.value.trim();
if (!authorFilter) {
return;
}
filteredQuotes = quotes.filter(q => q.author === authorFilter);
if (!filteredQuotes.length) {
alert(`No quotes found for author ${authorFilter}`);
return;
}
currentQuoteIndex = 0;
displayQuote(filteredQuotes[currentQuoteIndex]);
});

// Display previous or next quote from filtered quotes
let currentQuoteIndex = 0;

document.getElementById("previous-quote").addEventListener("click", function() {
if (filteredQuotes.length === 0) {
return;
}
currentQuoteIndex--;
if (currentQuoteIndex < 0) {
currentQuoteIndex = filteredQuotes.length - 1;
}
displayQuote(filteredQuotes[currentQuoteIndex]);
});

document.getElementById("next-quote").addEventListener("click", function() {
if (filteredQuotes.length === 0) {
return;
}
currentQuoteIndex++;
if (currentQuoteIndex >= filteredQuotes.length) {
currentQuoteIndex = 0;
}
displayQuote(filteredQuotes[currentQuoteIndex]);
});

// let previousQuote = null;

// function getRandomQuote(){
//     let quote = null;
//     do {
//         quote = quotes[Math.floor(Math.random() * quotes.length)]
//     } while (quote === previousQuote);
    
//     previousQuote = quote;
//     return quote;
// }

// // function getRandomQuote(){
// //     let quote = null;
// //     if (quotes.length > 0) {
// //         const index = Math.floor(Math.random() * quotes.length);
// //         quote = quotes[index];
// //         quotes.splice(index, 1);
// //     }
// //     return quote;
// // }

// function displayQuote(){
//     const quoteContainer = document.getElementById("quote-container");
//     const quote = getRandomQuote();

//     quoteContainer.innerHTML = ` 
//     <div>
//     <h2>${quote.quote}</h2>
//     <p>${quote.author}</p>
//     </div> `;
// }

// const generateBtn = document.getElementById("generate-btn");
// generateBtn.addEventListener("click", displayQuote);

// displayQuote();