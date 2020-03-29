const express = require("express");
const path = require('path');

const stateController = require("./controllers/stateController");
//const factController = require("./controllers/factController");

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({extended: true}));  //support url encoded bodies

//app.set('view engine', 'ejs');


// app.get("/", function(req, res){
//   res.sendFile('stateinfo.html', {root:__dirname});
//
// });

app.get("/getState", stateController.stateSelect);
//app.post("/insertUser", factController.insertUser);

app.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});
