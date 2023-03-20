const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({

    title:{
         type:String,
         required:true
    },
      photo:{
        type:String, 
        default:"no photo"  
    },
    description:{
        type:String,
        required:true
    },
    postedBy :{
        type:ObjectId,
        ref:"user"
    }
})

const postModel = mongoose.model("post",postSchema)

module.exports = {postModel}