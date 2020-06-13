const express = require("express");
const path = require("path");
const waiting = require("./Develope/js/waitlist")
const reservation = require("./Develope/js/reservation")
const app = express();

const PORT = 3000;

// app.get("/", function(req, res) {//when it gets a request to / path 
//     res.send("Welcome to the Star Wars Page!");//text
//   });

  app.get("/waiting", function(req, res) {
    res.json(waiting);//json data
  });
  

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname,  "viewReservation.html"));

});

app.get("/createReservation", function (req, res) {
    res.sendFile(path.join(__dirname,  "createReservation.html"));

});

app.listen(PORT, function () {
    console.log('Listening at PORT 3000');
  });