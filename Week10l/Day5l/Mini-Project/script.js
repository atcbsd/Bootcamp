 // Retrieve button element from the DOM
 const getCharacterBtn = document.querySelector('#get-character-btn');
      
 // Add event listener to button to trigger AJAX request
 getCharacterBtn.addEventListener('click', getCharacter);

 // Function to get character data from API
 function getCharacter() {
   // Disable button to prevent multiple requests
   getCharacterBtn.disabled = true;

   // Create loading message element
   const loadingMessage = document.createElement('div');
   loadingMessage.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

   // Append loading message to character-info
   const characterInfo = document.querySelector('#character-info');
   characterInfo.appendChild(loadingMessage);

   // Send AJAX request to API
   const apiUrl = 'https://www.swapi.tech/api/people/';
   const randomNumber = Math.floor(Math.random() * 83) + 1; // Get random number between 1 and 83
   const characterUrl = apiUrl + randomNumber;

   fetch(characterUrl)
     .then(response => response.json())
     .then(data => {
       // Extract relevant information from data
       const characterName = data.result.properties.name;
       const characterHeight = data.result.properties.height;
       const characterGender = data.result.properties.gender;
       const characterBirthYear = data.result.properties.birth_year;
       const characterHomeWorldUrl = data.result.properties.homeworld;

       // Send AJAX request to character's home world
       return fetch(characterHomeWorldUrl)
         .then(response => response.json())
         .then(data => {
           // Extract relevant information from data
           const characterHomeWorld = data.result.properties.name;

           // Create new HTML elements to display character information
           const nameElement = document.createElement('p');
           nameElement.textContent = `Name: ${characterName}`;

           const heightElement = document.createElement('p');
           heightElement.textContent = `Height: ${characterHeight} cm`;

           const genderElement = document.createElement('p');
           genderElement.textContent = `Gender: ${characterGender}`;

           const birthYearElement = document.createElement('p');
           birthYearElement.textContent = `Birth Year: ${characterBirthYear}`;

           const homeWorldElement = document.createElement('p');
           homeWorldElement.textContent = `Home World: ${characterHomeWorld}`;

           // Remove previous character information and append new elements to the DOM
           characterInfo.innerHTML = '';
           characterInfo.appendChild(nameElement);
           characterInfo.appendChild(heightElement);
           characterInfo.appendChild(genderElement);
           characterInfo.appendChild(birthYearElement);
           characterInfo.appendChild(homeWorldElement);

           // Enable button after successful request
           getCharacterBtn.disabled = false;
         });
     })
     .catch(error => {
       // Display error message if AJAX request fails
       characterInfo.removeChild(loadingMessage);
       characterInfo.innerHTML = `Error: ${error.message}`;
     });
 }