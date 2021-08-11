const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.name / 15);

  res.send("Your age in dog age is " + age);
});
app.listen(port);
