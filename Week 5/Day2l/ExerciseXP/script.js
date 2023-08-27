// 🌟 Exercise 1 : Users
// Instructions

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// const container = document.getElementById('container');
// console.log('container:', container);

// document.querySelector(".list").children[1].textContent = "Richard";

// const lists = document.querySelectorAll(".list");
// lists.forEach(list => list.firstElementChild.textContent = "Alexis");

// lists[1].children[1].remove();

// lists.forEach(list => list.classList.add("student_list"));
// console.log(lists);

// const firstUl = document.querySelector('ul.list.student_list');
// firstUl.classList.add("university", "attendance");
// console.log(firstUl);

// 🌟 Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// Add the code above, to your HTML file

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// const div = document.querySelector("div")
//   console.log(div?.style)

//   const divBackground = getComputedStyle(div).backgroundColor
//   const users = document.querySelectorAll("li")
//   console.log("users:", users)
  
//   if (divBackground === "rgb(173, 216, 230)") {
//     console.log("this is lightblue!")
//     console.log(`Hello ${users[0].textContent} and ${users[1].textContent} !`)
//   } 

//   🌟 Exercise 3 : Change The Navbar
// Instructions
// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// const navbar = document.getElementById("navBar");
// console.log('navbar:', navbar);

// navbar?.setAttribute("id", "socialNetworkNavigation");

// const li = document.createElement("li");
// console.log("li:", li);

// const logout = document.createTextNode("Logout");
// console.log("logout:", logout);

// li.appendChild(logout);
// console.log("li", li);

// const ul = navbar?.firstElementChild;
// console.log("li", li);
// ul?.appendChild(li);

// const firstLi = ul?.firstElementChild
// const lastLi = ul?.lastElementChild

// console.log("firstLi:", firstLi);
// console.log("lastLi:", lastLi);

// console.log("first li content");
// console.log(firstLi?.textContent);

// console.log("second li content");
// console.log(lastLi?.textContent);


// const textNode = document.createTextNode("Hola mundo!");
// document.body.appendChild(textNode);


// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks = []

const book1 = {
    title: "Dispara yo ya estoy muerto",
    author: "Julia Navarro",
    image: "https://m.media-amazon.com/images/I/41t0Ix598eL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    alreadyRead: false
}

const book2 = {
    title: "Where the crawdads sing",
    author: "Delia Owens",
    image: "https://m.media-amazon.com/images/I/51gH2xzBM2L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    alreadyRead: true
}

allBooks.push(book1, book2);

console.log("allbooks: ", allBooks);

const table = document.createElement("table");
table.innerHTML = `
<thead>
    <tr>
        <th colspan="3">My book list</th>
    </tr>
</thead>
<tbody>
    <tr class="${book1.alreadyRead ? "is-read" : ""}">
        <td>${book1.title} written by ${book1.author}</td>
        <td> <img src="${book1.image}"></td>
        <td>Already read: ${book1.alreadyRead}</td>
    </tr>
    <tr class="${book2.alreadyRead ? "is-read" : ""}">
        <td>${book2.title} written by ${book2.author}</td>
        <td> <img src="${book2.image}"></td>
        <td>Already read: ${book2.alreadyRead}</td>
    </tr>
</tbody>
`

const bookListDiv = document.querySelector(".listBooks");
console.log("bookListDiv:", bookListDiv);
bookListDiv?.appendChild(table);

console.log(table);