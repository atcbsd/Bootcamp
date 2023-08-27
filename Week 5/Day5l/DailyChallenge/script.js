 // Get the form and the listTasks div
 const form = document.querySelector('form');
 const listTasks = document.querySelector('.listTasks');
 
 // Create an empty array of task objects
 let tasks = [];
 
 // Function to add a new task to the list
 function addTask() {
   // Get the input value
   const newTaskInput = document.querySelector('#newTask');
   const newTaskText = newTaskInput.value.trim();
 
   // Check that the input is not empty
   if (newTaskText === '') {
     return;
   }
   
   // Create a new task object
   const newTask = {
     task_id: tasks.length,
     text: newTaskText,
     done: false,
   };
 
   // Add the new task to the array
   tasks.push(newTask);
 
   // Add the new task to the DOM
   const taskElement = document.createElement('div');
   taskElement.classList.add('task');
   taskElement.setAttribute('data-task-id', newTask.task_id);
   taskElement.innerHTML = `
     <button type="button" class="deleteButton"><i class="fas fa-times"></i></button>
     <input type="checkbox" id="task_${newTask.task_id}">
     <label for="task_${newTask.task_id}">${newTaskText}</label>
   `;
   listTasks.appendChild(taskElement);
 
   // Clear the input field
   newTaskInput.value = '';
 }
 
 // Function to mark a task as done
 function doneTask(event) {
   // Get the task id from the data-task-id attribute
   const taskElement = event.target.closest('.task');
   const taskId = parseInt(taskElement.getAttribute('data-task-id'));
 
   // Find the corresponding task object in the array
   const task = tasks.find(t => t.task_id === taskId);
 
   // Update the task object and the DOM
 const taskLabel = taskElement.querySelector('label');
 if (event.target.checked) {
 task.done = true;
 taskLabel.style.textDecoration = 'line-through';
 taskLabel.style.color = 'red';
 } else {
 task.done = false;
 taskLabel.style.textDecoration = 'none';
 taskLabel.style.color = 'black';
 }
 }
 
 // Function to delete a task
 function deleteTask(event) {
 // Get the task id from the data-task-id attribute
 const taskElement = event.target.closest('.task');
 const taskId = parseInt(taskElement.getAttribute('data-task-id'));
 
 // Remove the corresponding task object from the array
 tasks = tasks.filter(t => t.task_id !== taskId);
 
 // Remove the task from the DOM
 taskElement.remove();
 }
 
 // Add an event listener to the form
 form.addEventListener('submit', event => {
 event.preventDefault();
 addTask();
 });
 
 // Add event listeners to the listTasks div
 listTasks.addEventListener('click', event => {
 if (event.target.matches('input[type="checkbox"]')) {
 doneTask(event);
 }
 if (event.target.matches('.deleteButton')) {
 deleteTask(event);
 }
 });