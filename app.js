const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./database");
const Blog= require("./model/blogModel.js");

const { storage,multer } = require("./middleware/multerConfig.js");
const upload =multer({storage:storage})
storage
const app = express();
app.use(express.json())
connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log("Nodejs has started");
});

app.get("/", (req, res) => {
  res.json("hello");
});
app.post("/blog",upload.single('image') ,async (req,res)=>{
  // const title= req.body.title
  // const description= req.body.description
  // console.log(title,description)
  

  //object destructuring 
  const {title,subtitle, description}=req.body;
  const filename = req.file.filename;
  if(!title || !description || !subtitle){
    return res.status(400).json({
      message:"Plese provide title,description,subtitle,image "
    })
  }
  //create is an orm method to put data in table
  await Blog.create({
    title:title,
    description:description,
    subtitle:subtitle,
    image: filename
   
  })
 

  res.status(200).json({
    message: "Blog api hit successfully"
  })
})

app.use(express.static('./Storage'))//path from where we can see only images from url


// fetch all blog
app.get("/blog",async(req,res)=>{
  const blogs= await Blog.find()  // returns array
  res.status(200).json({
    message:"Blogs fetched successfully",
    data:blogs
  })
})

//fetch single blog
app.get("/blog/:id", async(req,res)=>{
  const id= req.params.id;
  const blog= await Blog.findById(id)//object
  if(!blog){
    return res.status(400).json({
      message:"no data found"
    })
  }

    res.status(200).json({
      message:"Fetched successfully",
      data:blog
    })

})

//delete the blog
app.delete("/blog/:id",async(req,res)=>{
    const id= req.params.id;  
   await Blog.findByIdAndDelete(id)
  res.status(200).json({
    message:"Blog deleted successlully"
  })
})


//

//mongodb+srv://bimo:<password>@cluster0.xotox6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0