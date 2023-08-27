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