// Imports
const express = require("express");
const app = express();
const http = require('http');
const port = 3000;


// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public'));
app.use('/js', express.static(__dirname + 'public/js'));


app.get('', (req, res) => {
  res.render('index');
});









// Listen on port
app.listen(port, function () {
  console.log("Server is running on localhost3000");
});