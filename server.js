require('dotenv').config();
const express = require("express");
const path = require('path');
const session = require('express-session');


const stateController = require("./controllers/stateController");
const factController = require("./controllers/factController");

const PORT = process.env.PORT || 5000;

var app = express();
app.use(session({
  secret: 'a',
  resave:false,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true}));  //support url encoded bodies

//app.set('view engine', 'ejs');



app.get("/getState", stateController.stateSelect);
app.get("/getFact", factController.getFacts);
app.post("/insertData", factController.insertData);
app.post("/deleteFact", factController.deleteFact);
app.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});
