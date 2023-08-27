/* const b = 5;
const largeNumber = require('./main.js');
const sum = largeNumber + b;
console.log(sum);
 */



//Part 2


/* const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  
  const largeNumber = require('./main.js');
  const result = largeNumber * 2;
  
  const htmlResponse = `
    <p>My Module is ${result}</p>
    <h1>Hi there at the frontend</h1>
  `;
  
  res.end(htmlResponse);
});

server.listen(3000, () => {
  console.log("I'm listening");
});
 */

// Part 3

const http = require('http');
const getCurrentDateTime = require('./main.js');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const currentDateTime = getCurrentDateTime();

  const htmlResponse = `
    <p>Fecha y hora actual: ${currentDateTime}</p>
  `;

  res.end(htmlResponse);
});

server.listen(8080, () => {
  console.log("Estoy escuchando en http://localhost:8080/");
});
