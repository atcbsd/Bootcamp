In JavaScript, specifically in the context of web development using frameworks like Express.js, routes refer to the endpoints or URLs that your application listens for and responds to. Express routes determine how your application handles incoming requests and sends back responses.

Express routes are defined using the Express.js framework, which is a minimal and flexible web application framework for Node.js. Here's an example of how you can define routes in Express:



const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for a specific path
app.get('/about', (req, res) => {
  res.send('About page');
});

// Define a route with a dynamic parameter
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


In the example above, we create an Express application and define three routes using the app.get() method. The first route listens for requests to the homepage ("/") and sends back the response "Hello, World!". 
The second route listens for requests to the "/about" path and sends back the response "About page". 
The third route uses a dynamic parameter ":id" to match any path that starts with "/users/" followed by 
an ID. The ID is extracted from the request parameters (req.params.id) and included in the response.

These route definitions specify what code should be executed when a request is made to a particular URL 
or endpoint. You can define routes for different HTTP methods such as GET, POST, PUT, DELETE, etc. and handle them accordingly. The Express router provides a way to organize your routes into separate modules 
or files for better code organization.

Express routes are a fundamental part of building web applications with Express.js, allowing you to define the behavior of your application based on the requested URL paths and parameters.















Simple JavaScript exercise using Express:

Exercise: Building a Simple Express Server

Directions:

Install Node.js and npm (Node Package Manager) on your computer if you haven't already.
Create a new directory for your project and navigate to it in your terminal.
Initialize a new Node.js project by running the command: npm init -y. This will create a package.json file.
Install Express by running the command: npm install express.
Create a new file called server.js in your project directory.
Open server.js in a code editor and add the following code:

const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


Save the file and go back to your terminal.
Start the server by running the command: node server.js.
Open your web browser and navigate to http://localhost:3000.
You should see the message "Hello, world!" displayed in your browser.
Congratulations! You have successfully created a simple Express server.




Task:
Modify the code to add a new route that displays a different message when accessing a different URL. 
For example, when accessing http://localhost:3000/about, the server should respond with 
"This is the About page."

Hints:

Use app.get('/about', ...) to define a new route for the "/about" URL.
Use res.send('...') inside the route handler function to send a response to the client.
Extensions:

Add more routes for different URLs and display different messages for each one.
Customize the server response by sending HTML or rendering templates.
Explore Express middleware and use it in your server.
Feel free to experiment and explore further with Express! Good luck with the exercise.




SOLUTION: 

Change the content in server.js

const express = require('express');
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



After making these changes, save the file and restart the server by running 
node server.js in your terminal.

Now, when you access http://localhost:3000/about in your browser, you should see the message 
"This is the About page." And when you access http://localhost:3000, you will see "Hello, world!" 
as before.








Exercise 3: create a server using Express.js, define routes, and serve specific HTML pages based on those routes.

Exercise: Create a Server with Express.js and Serve HTML Pages

Set up a new Express.js project by creating a directory and navigating into it in your terminal:

mkdir express-server-exercise
cd express-server-exercise
Initialize a new Node.js project and install the required dependencies:

npm init -y
npm install express


Create a new file called server.js and open it in a code editor. Add the following code to set up a basic Express server and define routes:


const express = require('express');
const app = express();
const path = require('path');

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Define a route for the contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Define a route for the root URL
app.get('*', (req, res) => {
  res.redirect('/');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


Create a new directory called public in your project directory. Inside the public directory, create three HTML files: index.html, about.html, and contact.html. Feel free to customize the content of each HTML file.
Start the server by running the following command in your terminal:


node server.js
Open your web browser and visit http://localhost:3000 to see the content of the index.html file. Similarly, you can visit http://localhost:3000/about and http://localhost:3000/contact to see the respective HTML pages.


Solution:

Here's a possible solution for the exercise:

express-server-exercise
├── public 
│   ├── index.html
│   ├── about.html
│   └── contact.html
└── server.js


index.html:

<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
</head>
<body>
  <h1>Welcome to the Homepage</h1>
</body>
</html>



about.html:

<!DOCTYPE html>
<html>
<head>
  <title>About</title>
</head>
<body>
  <h1>About Us</h1>
  <p>This is the about page.</p>
</body>
</html>


contact.html:

<!DOCTYPE html>
<html>
<head>
  <title>Contact</title>
</head>
<body>
  <h1>Contact Us</h1>
  <p>Feel free to reach out to us.</p>
</body>
</html>


By following the exercise and using the provided solution, you should be able to create a basic Express server and serve different HTML pages based on the defined routes.









Using the same exercise we will add information to the server.js in order for it to serve the html pages.
We will use the built-in res.sendFile() method to serve static HTML files and manually inject dynamic 
data into those files.


Set up a new Express.js project by creating a directory and navigating into it in your terminal:

mkdir express-server-exercise
cd express-server-exercise
Initialize a new Node.js project and install the required dependencies:

npm init -y
npm install express

Create a new file called server.js and open it in a code editor. Replace the previous code with the following updated code:

const express = require('express');
const app = express();
const path = require('path');

// Define a route for the homepage
app.get('/', (req, res) => {
  const data = {
    title: 'Home',
    message: 'Welcome to the Homepage!'
  };
  res.sendFile(path.join(__dirname, 'public', 'index.html'), {
    data: JSON.stringify(data)
  });
});

// Define a route for the about page
app.get('/about', (req, res) => {
  const data = {
    title: 'About',
    message: 'This is the about page.'
  };
  res.sendFile(path.join(__dirname, 'public', 'about.html'), {
    data: JSON.stringify(data)
  });
});

// Define a route for the contact page
app.get('/contact', (req, res) => {
  const data = {
    title: 'Contact',
    message: 'Feel free to reach out to us.'
  };
  res.sendFile(path.join(__dirname, 'public', 'contact.html'), {
    data: JSON.stringify(data)
  });
});

// Define a route for the root URL
app.get('*', (req, res) => {
  res.redirect('/');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


Create a new directory called public in your project directory. Inside the public directory, create three HTML files: index.html, about.html, and contact.html. These files will be served as static files.
Update the content of each HTML file (index.html, about.html, and contact.html) to include placeholders for the dynamic data. For example, you can use placeholders like {{title}} and {{message}}. Here's an example of how index.html might look:

<!DOCTYPE html>
<html>
<head>
  <title>{{title}}</title>
</head>
<body>
  <h1>{{message}}</h1>
</body>
</html>

Repeat the same structure for the about.html and contact.html files.

Start the server by running the following command in your terminal:

node server.js

Open your web browser and visit http://localhost:3000 to see the updated content of the index.html file with the injected dynamic data. Similarly, you can visit http://localhost:3000/about and http://localhost:3000/contact to see the respective HTML pages with the injected dynamic data.
In this version, we use the res.sendFile() method to serve the static HTML files. 






Instead of using the built-in res.sendFile() method to serve static HTML files and manually inject dynamic data into those files we can use EJS. Let's modify the server code to pass dynamic data to the HTML pages when they are served. We'll use the EJS templating engine to accomplish this.

Exercise: Create a Server with Express.js, Serve HTML Pages, and Send Data

Set up a new Express.js project by creating a directory and navigating into it in your terminal:

mkdir express-server-exercise
cd express-server-exercise
Initialize a new Node.js project and install the required dependencies:

npm init -y
npm install express ejs

Create a new file called server.js and open it in a code editor. Replace the previous code with the following updated code:


const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route for the homepage (including root URL)
app.get('/', (req, res) => {
  const data = {
    title: 'Home',
    message: 'Welcome to the Homepage!'
  };
  res.render('index', data);
});

// Define a route for the about page
app.get('/about', (req, res) => {
  const data = {
    title: 'About',
    message: 'This is the about page.'
  };
  res.render('about', data);
});

// Define a route for the contact page
app.get('/contact', (req, res) => {
  const data = {
    title: 'Contact',
    message: 'Feel free to reach out to us.'
  };
  res.render('contact', data);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


Create a new directory called views in your project directory. Inside the views directory, create three EJS files: index.ejs, about.ejs, and contact.ejs. These files will be used as templates to render the dynamic data.

Update the content of each EJS file (index.ejs, about.ejs, and contact.ejs) to include the dynamic data using EJS tags. Here's an example of how index.ejs might look:

<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>

Repeat the same structure for the about.ejs and contact.ejs files.
Start the server by running the following command in your terminal:

node server.js

Open your web browser and visit http://localhost:3000 to see the updated content of the index.html file. Similarly, you can visit http://localhost:3000/about and http://localhost:3000/contact to see the respective HTML pages with the dynamic data.

In this updated exercise, we've introduced the EJS templating engine and modified the server code to use it. The server now renders the EJS templates (index.ejs, about.ejs, and contact.ejs) and passes dynamic data to them. The data includes a title and message, which are defined for each route and rendered.





Finally modify the index.html or index.ejs file to include links to different pages or routes within your application, you can use anchor tags (<a> tags) with appropriate href attributes. Here's how you can do it:

Modify index.html:

<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
</head>
<body>
  <h1>Welcome to the Homepage!</h1>
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</body>
</html>


Modify index.ejs:

<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= message %></h1>
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</body>
</html>


In both cases, we have added an unordered list (<ul>) containing list items (<li>) with anchor tags (<a>) pointing to different routes. The href attribute of each anchor tag specifies the corresponding route. Clicking on these links will navigate to the specified routes within your application.

Make sure you have defined the routes for /about and /contact in your Express server code to handle these requests accordingly.

With these modifications, visiting the root URL (http://localhost:3000/ or http://localhost:3000) will display the homepage with clickable links to the "About" and "Contact" pages. Clicking on those links will take you directly to the respective routes without needing to change the localhost URL in the browser manually.





//KNEX: https://www.youtube.com/watch?v=GYmIacvv4Bk