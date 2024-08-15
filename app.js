const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./database");
const app = express();
connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log("Nodejs has started");
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/about", (req, res) => {
  res.json({
    message: "this is about page",
  });
});

//mongodb+srv://bimo:<password>@cluster0.xotox6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0