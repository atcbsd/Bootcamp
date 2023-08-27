// // 🌟 Exercise 1 : Change The Article
// // Instructions
// // Copy the code below, into a structured HTML file:

// // <article>
// //     <h1> Some Facts </h1>
// //     <h2> The Chocolate </h2>
// //     <h3> History of the chocolate </h3>
// //     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
// //     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
// //     <p> After the European discovery of the Americas, chocolate became 
// //     very popular in the wider world, and its demand exploded. </p>
// //     <p> Chocolate has since become a popular food product that millions enjoy every day, 
// //     thanks to its unique, rich, and sweet taste.</p> 
// //     <p> But what effect does eating chocolate have on our health?</p> 
// // </article>


// // Using a DOM property, retrieve the h1 and console.log it.

// // Using DOM methods, remove the last paragraph in the <article> tag.

// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


// const h1 = document.querySelector('h1');
// console.log(h1.textContent);

// const paragraphs = document.querySelectorAll('p');
// const lastParagraph = paragraphs[paragraphs.length - 1];
// lastParagraph.remove();

// const h2 = document.querySelector('h2');
// h2.addEventListener('click', () => {
//     h2.style.backgroundColor = 'red';
// });

// const h3 = document.querySelector('h3');
// h3.addEventListener('click', () => {
//     h3.style.display = 'none';
// });

// const boldBtn = document.querySelector('#bold-btn');
// boldBtn.addEventListener('click', () => {
//     paragraphs.forEach(p => {
//         p.style.fontWeight = 'bold';
//     });
// });

// const getRandomSize = () => Math.floor(Math.random() * 101);

// h1.addEventListener('mouseenter', () => {
//     h1.style.fontSize = `${getRandomSize()}px`;
// });

// paragraphs[1].addEventListener('mouseenter', () => {
//     paragraphs[1].classList.add('fade');
// });

// // 🌟 Exercise 2 : Work With Forms
// // Instructions
// // Retrieve the form and console.log it.

// // Retrieve the inputs by their id and console.log them.

// // Retrieve the inputs by their name attribute and console.log them.

// // When the user submits the form (ie. submit event listener)
// // use event.preventDefault(), why ?
// // get the values of the input tags,
// // make sure that they are not empty,
// // create an li per input value,
// // then append them to a the <ul class="usersAnswer"></ul>, below the form.
// // The output should be :

// // <ul class="usersAnswer">
// //     <li>first name of the user</li>
// //     <li>last name of the user</li>
// // </ul>



// const form = document.querySelector('form');
// console.log(form);

// const firstNameInput = document.querySelector('#fname');
// const lastNameInput = document.querySelector('#lname');
// console.log(firstNameInput, lastNameInput);

// const firstNameInputByName = document.querySelector('input[name="fname"]');
// const lastNameInputByName = document.querySelector('input[name="lname"]');
// console.log(firstNameInputByName, lastNameInputByName);

// const submitButton = document.querySelector('#submit');
// const usersAnswerList = document.querySelector('.usersAnswer');

// form.addEventListener('submit', function(event){
//     event.preventDefault();

//     const firstName = firstNameInput.value.trim();
//     const lastName = lastNameInput.value.trim();

//     if (!firstName || !lastName) {
//     alert('Please enter both first name and last name')
//     return;
//     }

//     const firstNameLi = document.createElement('li');
//     firstNameLi.textContent = firstName;

//     const lastNameLi = document.createElement('li');
//     lastNameLi.textContent = lastName;

//     usersAnswerList.appendChild(firstNameLi);
//     usersAnswerList.appendChild(lastNameLi);

//     firstNameInput.value = '';
//     lastNameInput.value = '';
// });

// // 🌟 Exercise 3 : Transform The Sentence

// // In the JS file:

// // Declare a global variable named allBoldItems.

// // Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// // Create a function called highlight() that changes the color of all the bold text to blue.

// // Create a function called return_normal() that changes the color of all the bold text back to black.

// // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// let allBoldItems;

// function getBold_items() {
//     allBoldItems = document.getElementsByTagName("strong");
// }

// function highlight () {
//     for (let i = 0; i < allBoldItems.length; i++){
//         allBoldItems[i].style.color = "blue";
//     }
// }

// function return_normal() {
//     for (let i = 0; i < allBoldItems.length; i++){
//         allBoldItems[i].style.color = "black";
//     }
// }

// getBold_items();

// document.querySelector("span").addEventListener("mouseover", highlight);
// document.querySelector("span").addEventListener("mouseout", return_normal);

// // 🌟 Exercice 4 : Volume Of A Sphere

// const form = document.querySelector('#MyForm');
// const radiusInput = document.querySelector('#radius');
// const volumeInput = document.querySelector('#volume');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const radius = Number(radiusInput.value);
//     const volume = (4/3) * Math.PI * Math.pow(radius, 3);

//     volumeInput.value = volume.toFixed(2);
// });

// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () =>{
    myButton.style.backgroundColor = "#0FEFC3";
    myButton.style.color = "purple";
    myButton.style.fontSize = "20px";
    myButton.style.top = "0";
    myButton.style.left = "0";
    myButton.style.marginTop = "300px";
    myButton.style.marginLeft = "600px";
    let changeText = document.getElementById('myButton');
    changeText.textContent = 'Hello there!';
});

myButton.addEventListener("mouseover", () =>{
    myButton.style.backgroundColor = "#C89FFC";
    myButton.style.color = "black";
    myButton.style.fontSize = "10px";
    myButton.style.fontFamily = "Arial";
    myButton.style.top = "5";
    myButton.style.left = "5";
});

myButton.addEventListener("mouseout", () =>{
    myButton.style.backgroundColor = "#9AF2A9";
    myButton.style.color = "black";
    myButton.style.fontSize = "30px";
    myButton.style.fontFamily = "Tahoma";
    myButton.style.top = "10";
    myButton.style.left = "10";
});

myButton.addEventListener("dblclick", () =>{
    myButton.style.backgroundColor = "#9C97FF";
    myButton.style.color = "black";
    myButton.style.fontSize = "20px";
    myButton.style.fontFamily = "Avenir";
    myButton.style.marginTop = "0px";
    myButton.style.marginLeft = "0px";
    let changeText = document.getElementById('myButton');
    changeText.textContent = 'Click Me!';
});