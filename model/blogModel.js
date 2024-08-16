const mongoose= require('mongoose')
const Schema= mongoose.Schema
// create schema/table/columns for table
//model home, schema room
const blogSchema= new Schema({
    title:{
        type:String,
        unique:true
    },
    subtitle:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }

})
// blog is table, blogschema column
const Blog =mongoose.model('Blog',blogSchema)
module.exports =Blog

