// This code sets up a basic server using the Express framework. // Here's a breakdown of what each part does:

// const express = require('express'); imports the Express framework, // allowing us to create an instance of the Express application.

// const app = express(); creates an instance of the Express application, which // represents our server.

// const path = require('path'); imports the path module, which provides utilities for // working with file and directory paths.

// app.use(express.urlencoded({ extended: true })); sets up middleware to parse the // request body. It enables parsing of URL-encoded data sent in the request body // and makes it accessible in req.body.

// let shoppingList = []; initializes an empty array called shoppingList to store items.

// app.get('/', (req, res) => { ... }); defines a route handler for the root URL ("/"). // When a client makes a GET request to the root URL, the server responds by sending the // index.html file located in the same directory as the script.

// app.post('/addItem', (req, res) => { ... }); // defines a route handler for the "/addItem" URL path. This handler is triggered when a // client makes a POST request to "/addItem". It extracts the item and amount data from // the request body and adds it as an object to the shoppingList array. Then it // redirects the client to the "/list" URL.

// app.get('/list', (req, res) => { ... }); defines a route handler for the "/list" URL // path. When a client makes a GET request to "/list", this handler generates an HTML // response dynamically based on the items in the shoppingList array. It iterates over // the items and generates a list of

elements displaying the item and its amount. // The response is sent back to the client with the generated HTML.
// app.listen(3000, () => { ... }); starts the server and listens for incoming requests // on port 3000. Once the server is running, it logs a message to the console indicating // that the server is running and accessible at http://localhost:3000.

// Overall, this code sets up a simple server that serves an HTML file, allows the // client to submit a form to add items to a shopping list, and displays the shopping // list items when requested.