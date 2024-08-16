const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./database");
const app = express();
app.use(express.json())
connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log("Nodejs has started");
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.post("/blog",(req,res)=>{
  console.log(req.body)
  res.status(200).json({
    message: "Blog hit successfully"
  })
})


//mongodb+srv://bimo:<password>@cluster0.xotox6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0