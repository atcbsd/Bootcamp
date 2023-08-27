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