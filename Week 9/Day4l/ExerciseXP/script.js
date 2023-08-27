// Exercise 1 : Giphy API

// Instructions

// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX 
// request to the Giphy API and console.log the Javascript Object.

// const url = "https:api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";
// const xhr = new XMLHttpRequest();
// xhr.addEventListener("load",logRequest);
// xhr.open("GET",url);
// xhr.send();

// function logRequest(e){
//     const response= JSON.parse(xhr.response);
//     const first= response.data[0];
//     console.log("first",first);
// }



// Exercise 2 : Giphy API

// Instructions

// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

// const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"
// const xhr = new XMLHttpRequest();
// xhr.addEventListener("load",logRequest);
// xhr.open("GET",url);
// xhr.send();

// function logRequest(e){
//     const response= JSON.parse(xhr.response);
//     const first= response.data[0];
//     console.log("first",first);
// }


//REFACTOR
const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const searchTerm="sun";
const raitingn= "g";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const limit = 10;
const offset = 2 ;

const url = `${BASE_URL}?q=${searchTerm}&raiting=${rating}&api_key=${apiKey}&limit${limit}&offset${offset}`;

const xhr = new XMLHttpRequest();
xhr.addEventListener("load",logRequest);
xhr.open("GET",url);
xhr.send();

function logRequest(e){
    const response= JSON.parse(xhr.response);
    console.log("response",response);
}