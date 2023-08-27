const express = require('express');
const app = express();
const path = require('path');

// Set up middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Shopping list array to store items
let shoppingList = [];

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

  
// Handle form submission and save item to the shopping list
app.post('/addItem', (req, res) => {
  const { item, amount } = req.body;
  shoppingList.push({ item, amount });
  res.redirect('/list');
});

// Display the shopping list items
app.get('/list', (req, res) => {
  let listItems = '';
  for (const item of shoppingList) {
    listItems += `<li>${item.amount} ${item.item}</li>`;
  }
  res.send(`
    <h1>Shopping List Items</h1>
    <ul>${listItems}</ul>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});