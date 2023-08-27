
// The box element is selected using document.getElementById('box').
let box = document.getElementById('box');

// An event listener is added to the box element for the mousedown event.
box.addEventListener('mousedown', function(e) {

 // When the mousedown event is triggered, the default behavior is prevented using e.preventDefault().
 e.preventDefault();

//  The shiftX and shiftY variables are set to the difference between the clientX/clientY
// coordinates of the mouse click and the left/top coordinates of the box element relative to the viewport, respectively. This is done to ensure that the mouse cursor stays in the same position relative to the box element when it is dragged.

let shiftX = e.clientX - box.getBoundingClientRect().left;
let shiftY = e.clientY - box.getBoundingClientRect().top;

// The moveAt() function is called with the pageX and pageY coordinates of the mouse click, which are passed to the function by the mousedown event. 
moveAt(e.pageX, e.pageY);

// The moveAt() function sets the left and top CSS properties of the box element to the difference between the pageX/pageY coordinates of the mouse click and the shiftX/shiftY variables, respectively. This is done to move the box element to the position of the mouse cursor.
 function moveAt(pageX, pageY) {
   box.style.left = pageX - shiftX + 'px';
   box.style.top = pageY - shiftY + 'px';
 }

//  The onMouseMove() function is called when the mousemove event is triggered on the document.
// It calls moveAt() with the pageX and pageY coordinates of the mouse pointer. This ensures that the box element follows the mouse cursor when it is dragged. 
function onMouseMove(e) {
   moveAt(e.pageX, e.pageY);
 }

//  The onmouseup event is attached to the box element. When the box element is released, the mousemove event listener is removed using document.removeEventListener('mousemove', onMouseMove), and the onmouseup event is set to null to prevent further mouseup events from being triggered.
document.addEventListener('mousemove', onMouseMove); 
box.onmouseup = function() {
   document.removeEventListener('mousemove', onMouseMove);
   box.onmouseup = null;
  
   if (isInside(box, target)) {
     alert('Dropped in target!');
   }
 };
});

// The isInside() function is called with the box and target elements as arguments. It checks whether the box element is completely inside the target element by comparing their respective left, right, top, and bottom coordinates using the getBoundingClientRect() method. If the box element is inside the target element, an alert is triggered.
function isInside(box, target) {
 let boxRect = box.getBoundingClientRect();
 let targetRect = target.getBoundingClientRect();

 return boxRect.left > targetRect.left &&
        boxRect.right < targetRect.right &&
        boxRect.top > targetRect.top &&
        boxRect.bottom < targetRect.bottom;
}