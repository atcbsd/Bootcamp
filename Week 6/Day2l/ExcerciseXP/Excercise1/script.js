// 🌟 Exercise 1: Timer
// Instructions

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// Part I
setTimeout(function(){
    alert("Hello World");
}, 2000);

// Part II
// setTimeout(() => {
//     let container = document.getElementById("container");
//     let newParagraph = document.createElement("p");
//     newParagraph.innerText= "Hello World";
//     container.appendChild(newParagraph);
// }, 2000);

// Part III

let intervalId = setInterval(()=> {
    let container = document.getElementById("container");
    let newParagraph = document.createElement("p");
    newParagraph.innerText= "Hello World";
    container.appendChild(newParagraph);

    if (container.childElementCount === 5){
        clearInterval(intervalId);
        container.remove();
    }
}, 2000);

document.getElementById("clear").addEventListener("click", function(){
    clearInterval(intervalId);
    container.remove();
});