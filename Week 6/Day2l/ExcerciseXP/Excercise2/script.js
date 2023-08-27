// 🌟 Exercise 2 : Move The Box
// Instructions
// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// function myMove () {
//     let elem = document.getElementById("animate");
//     let container = document.getElementById("container");
//     let pos = 0;
//     let id = setInterval(frame, 5);

//     function frame(){
//         if (pos === container.offsetWidth - elem.offsetWidth){
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.left = pos + 'px';
//         }
//     }
// }

//AQUÍ ESTAMOS MOVIENDO DE POSICIÓN EN DIAGONAL. 

// function myMove () {
//     let elem = document.getElementById("animate");
//     let container = document.getElementById("container");
//     let posX = 0;
//     let posY = 0;
//     let id = setInterval(frame, 5);

//     function frame(){
//         if (posX === container.offsetWidth - elem.offsetWidth && posY === container.offsetWidth - elem.offsetWidth){
//             clearInterval(id);
//         } else {
//             if (posX < container.offsetWidth - elem.offsetWidth){
//                 posX++;
//             }
//             if (posY < container.offsetWidth - elem.offsetWidth){
//                 posY++;
//             }
//             elem.style.left = posX + 'px';
//             elem.style.top = posY + 'px';
//         }
//     }
// }

// function myMove () {
//     let elem = document.getElementById("animate");
//     let container = document.getElementById("container");
//     let posX = Math.floor(Math.random() * (container.offsetWidth - elem.offsetWidth));
//     let posY = Math.floor(Math.random() * (container.offsetWidth - elem.offsetWidth));
//     let dx = (Math.random() - 0.5) *2;
//     let dy = (Math.random() - 0.5) *2;
//     let isRunning = true;

//     function frame(){
//         if (posX <= 0 || posX >= container.offsetWidth - elem.offsetWidth){
//             dx = -dx;
//         } 
//         if (posY <= 0 || posY >= container.offsetWidth - elem.offsetWidth){
//             dy = -dy;
//         }

//        posX += dx;
//        posY += dy;
//        elem.style.left = posX + 'px';
//        elem.style.top = posY + 'px';
//        if (!isRunning) {
//         clearInterval(intervalId);
//        }
        
//     }
//        let intervalId = setInterval(frame, 2);
//        let stopButton = document.getElementById("stop");
//        stopButton.addEventListener("click", function(){
//         isRunning= false;
//        })
//     };



let intervalID;
setTimeout(function(){
    document.getElementById("screen").style.display = "block";
 }, 5000);
 
function myMove() {
  let elem = document.getElementById("animate");
  let container = document.getElementById("container");
  let posX = Math.floor(Math.random() * (container.offsetWidth - elem.offsetWidth));
  let posY = Math.floor(Math.random() * (container.offsetHeight - elem.offsetHeight));
  let dx = (Math.random() - 0.5) * 2; // Random horizontal direction
  let dy = (Math.random() - 0.5) * 2; // Random vertical direction

  function frame() {
    if (posX <= 0 || posX >= container.offsetWidth - elem.offsetWidth) {
      dx = -dx; // Reverse horizontal direction if box hits container boundary
      elem.style.backgroundColor = getRandomColor();
    }
    if (posY <= 0 || posY >= container.offsetHeight - elem.offsetHeight) {
      dy = -dy; // Reverse vertical direction if box hits container boundary
      elem.style.backgroundColor = getRandomColor();
    }
    posX += dx;
    posY += dy;
    elem.style.left = posX + 'px';
    elem.style.top = posY + 'px';
  }
  intervalID = setInterval(frame, 1);
}

function stopMove() {
  clearInterval(intervalID);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'; 
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
  }   