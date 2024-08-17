const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./database");
const Blog= require("./model/blogModel.js");
const app = express();
app.use(express.json())
connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log("Nodejs has started");
});

app.get("/", (req, res) => {
  res.json("hello");
});
app.post("/blog",async (req,res)=>{
  // const title= req.body.title
  // const description= req.body.description
  // console.log(title,description)
  

  //object destructuring 
  const {title,subtitle, description,image}=req.body
  //create is an orm method to put data in table
  await Blog.create({
    title:title,
    description:description,
    subtitle:subtitle,
    image:image
  })

  res.status(200).json({
    message: "Blog hit successfully"
  })
})



//mongodb+srv://bimo:<password>@cluster0.xotox6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0