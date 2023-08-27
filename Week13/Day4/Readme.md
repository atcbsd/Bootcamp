Exercises XP #1 (Week 13 Day 4)

myserver.js

var http = require('http');


// create a server and send a html response

const server = http.createServer((request, response) => {
    // console.log(request);
    response.setHeader('Content-Type', 'text/html');

     response.write('<h1>This is my first response</h1>');
     response.write('<h1>This is my second response</h2>');
     response.write('<p>This is my third response</p>');

    //response.end('<h3>my first response</h3><p>my first response</p>');
})
server.listen(3000);




Advanced Solution

myserver.js

var http = require('http'); 
var fs = require('fs');
var html = fs.readFileSync('text.html', 'UTF-8');

function send404Response(response){
    response.writeHead(404, {'Content-Type' : 'text/plain'});
    response.write('Error 404 : Page not found!')
    response.end();
}

function onRequest (request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream('./text.html').pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(3000);
console.log('Server is now running on port 3000');




text.html

<!DOCTYPE html>
<html>
<body>
    <p>
        <h1>This is my first response</h1>
        <h2>This is my second response</h2>
        <h3>This my third response</h3>
    </p>
</body>
</html>





Exercise 2 : Http & Json

server.js

var http = require('http');

//create a server:
http.createServer(function (req, res) {

    const user = {
        firstname: 'Jonh',
        lastname: 'Doe'
    }

    var myJSON = JSON.stringify(user);

    res.write(myJSON); //write a response to the client

    res.end(); //end the response

}).listen(8080); //the server object listens on port 8080

//Run Terminal node server.js




Other Solution

server.js

const http = require('http'); 
const server = http.createServer((req, res) => {  
    //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/') { 
        // inform the client that we send JSON response in the header with the appropriate content type.
        res.writeHead(200, 
                      { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(
            { "firtsname":"John", "lastname":"Doe"}));  
        res.end();  
    } else {
         res.end("Another page");  
    }
});
server.listen(8080);
console.log('Node.js web server at port 8080 is running..')

// Command Prompt :
// cd (path to the file)
// node server.js ('Node.js web server at port 8080 is running..')
// Output : {"firtsname":"John","lastname":"Doe"}




Exercise 3 : Express
server.js

var express = require("express");

//var cors = require('cors');

var app = express();

//app.use(cors());


app.get("/", (req, res) => {
    res.send('<h1>This is an HTML tag</h1>');
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Run on Port http://localhost:3000/
// Run Terminal node expresserver.js


package.json

{
  "name": "exer",
  "version": "1.0.0",
  "description": "",
  "main": "expresserver.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}






Other Solution Advanced solution

app.js

var express = require('express');
var path = require('path');
var app = express();

// GET request
// The app responds with "Hello World!"" for requests to the root URL (/) or route. 
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: path.join(_dirname, './files')})
});

app.listen(3000, function() {
    console.log('listening at port 3000');
});

// Commande Prompt
// cd (Path to the file)
// node app.js ('listening at port 3000')
// localhost:3000 Output (This is an HTML tag)



index.html

<!DOCTYPE html>

<html>
    <body>
        <h1> This is an HTML tag </h1> 
    </body>
</html>






Exercises XP #2


Exercise 1 : Express & JSON
index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <script src="script.js"></script>
</body>
</html>



server.js

const http = require('http');
var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors());

app.get("/", (req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

    res.send(user);
    console.log(user);
   });


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Run on Port http://localhost:3000/
//Run Terminal node server.js



script.js

fetch('http://localhost:3000')
.then((response) => {
    //console.log(response);
    response.json().then((data) => {
        console.log('Object:', data);
    });
});


/************************** */

//Other Method

// fetch('http://localhost:3000', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(data => console.log('Object:', data, 'String:'))
//   //.then(string => console.log('String:', JSON.stringify(string)));




/*********************** */

//Other Method

// let request = new Request('http://localhost:3000', {
//     headers: new Headers({
//         'Content-Type': 'text/json' 
//     }),
//     method: 'GET'
// });

// fetch(request).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// });








Exercise 2 : Express & Parameters
server.js

const express = require('express');

const app = express();


app.get('/:id', (req , res) => {

    console.log(req.params);

    // if you want to send a message by status of result
    //res.status(200).send('OK')

    res.send(req.params);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

   //Run on Port http://localhost:3000/1234

   //Run Terminal node server.js

   //OUTPUT: {"id":"1234"}






Exercise 3: Express & Static Files
server.js

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))


app.listen(3000, () => {

    console.log("Server running on port 3000");

   });

   //Run on Port http://localhost:3000

   //Run Terminal node server.js





public/index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>This is a <em>Static</em> HTML file with CSS and JavaScript running on a server</h1>

    <div class="box">
        <span>Here is some JavaScript</span>
        <button onclick="alertme()">Click Me</button>
    </div>



    <script src="script.js"></script>

</body>
</html>




public/script.js

function alertme(){
    alert("Hello From Javascript");
}




public/style.css

h1{
    text-align: center;
    color: red;
    border: 2px dashed blue;
}

.box{
    text-align: center;
}


span{
    font-weight: bold;
    font-size: 30px;
}

button{
    color: blue;
    font-weight: bold;
    font-size: 20px;
}








Daily Challenge: Express
public/index.html

<form action="http://localhost:3000/formData" method="POST" target="_blank">
      E-mail: <input type="email" name="email" value="">
      Message: <input type="text" name="message" value="">
      <input type="submit" name="" value="Submit">
    </form>
server.js

const express = require('express');
const app = express();

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use('/form',express.static(__dirname+'/public'));

app.get('/pic/', function (req, res) {
  res.send('<img src="http://peteryabikov.ru/string-theory/images/kalabi-iloveimg-compressed.gif">');
  console.log('picture');
});

app.post('/formData', function (req, res) {
  console.log(req.body);
    res.send(req.body.email + ' sent you a message: ' + req.body.message);
});

app.get('/aboutMe/:hobby',(req,res)=>{
  console.log(req.params);
  if (typeof req.params.hobby === 'string' || req.params.hobby instanceof String){
  res.send(req.params.hobby);
  }
  else {
    res.sendStatus(404);
  }
})

app.listen(3000, () => {
  console.log('listening port 3000')
});
package.json


{
  "name": "node-server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.7"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1"
  }
}
-->