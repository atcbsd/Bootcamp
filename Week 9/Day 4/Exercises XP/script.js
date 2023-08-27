/* const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open("GET", url);
xhr.send();

function logRequest(e) {
  const response = JSON.parse(xhr.responseText);
  const first = response.data[0];
  console.log("first", first);
} */


/* exercise 2 */

const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const searchTerm = "sun";
const rating = "g";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const limit = 10;
const offset = 2;
const url = `${BASE_URL}?q=${searchTerm}&rating=${rating}&api_key=${apiKey}&limit=${limit}&offset=${offset}`;

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open("GET", url);
xhr.send();

function logRequest(e) {
  const response = JSON.parse(xhr.responseText);
  console.log("response", response);
}

