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