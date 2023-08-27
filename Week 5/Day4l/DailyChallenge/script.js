// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

 
const story = document.getElementById("story");
const shuffleButton = document.getElementById("lib-button");

const stories = [
"Once upon a time, there was a {{adjective}} {{noun}} named {{person}} who loved to {{verb}} in {{place}}.",
"The {{noun}} was {{adjective}} and it belonged to {{person}} who always wanted to {{verb}} it at {{place}}.",
"There was a {{adjective}} {{noun}} who always wanted to visit {{place}} and {{person}} helped them {{verb}} there."
];


shuffleButton.addEventListener("click", () => {
  event.preventDefault();
  const randomIndex = Math.floor(Math.random() * stories.length);
  const chosenStory = stories[randomIndex];
  
  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  const formattedStory = chosenStory
    .replace("{{noun}}", noun)
    .replace("{{adjective}}", adjective)
    .replace("{{person}}", person)
    .replace("{{verb}}", verb)
    .replace("{{place}}", place);

  if (!noun || !adjective || !person || !verb || !place) {
  alert("Please fill in all the values.");
  return;
  } else story.textContent = formattedStory;
  })