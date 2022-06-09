const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/static/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/static/about.html"));
});

module.exports = app;
console.log("Server started at http://localhost:" + port);
