const http = require('http');
var express = require("express");
// var cors = require('cors');
var app = express();

// app.use(cors());

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