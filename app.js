// Environment config
require("dotenv").config();
const { WEB_PORT, MONGODB_URI } = process.env;

// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const chalk = require("chalk");
const bodyParser = require("body-parser");

const resourcesDir = "resources";

// App setup
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "resources")));

// Database connection
mongoose.connect(MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true 
});

const fragsController = require("./controllers/frags");


// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/frags", fragsController.list);

app.get("/create-frag", (req, res) => {
  res.render("create-frag");
});
app.post("/create-frag", fragsController.createfrag);

app.get("/edit-frag", (req, res) => {
  res.render("edit-frag");
});
app.post("/updatefrag", fragsController.updatefrag);

app.post("/delete/:identifier", fragsController.delete);

app.listen(WEB_PORT, () => {
  console.log("App listening at http://localhost:${PORT}");
});