const express = require("express");
const app = express();

app.use("/main", express.static(__dirname + "/src/App.js"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(1337, () => {
  console.log("The server is up and running!");
})