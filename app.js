const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Nodejs has started");
});

app.get("/", (req, res) => {
  res.json("hello");
});
