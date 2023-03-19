const express = require("express")
const { postModel } = require("../model/post.model")
const { userModel } = require("../model/user.model")
const { userAuthentication } = require("../Utils/auth.middlewere")
const postRoute = express.Router()

postRoute.get("/all",async(req,res)=>{
       try{
          const data = await postModel.find({}).populate("postedBy","_id name")
          res.status(200).send(data)
       }catch(err){
        console.log(err)
        res.status(500).send({msg:"somthing went wrong in getting post"})
       }
 
})

postRoute.get("/mypost",userAuthentication,async(req,res)=>{
       try{
            const {userID} = req.body
            console.log(userID)
            const postData = await postModel.find({postedBy:userID}).populate("postedBy","_id name")
            res.send(postData)

       }catch(err){
        console.log(err)
        res.status(500).send({msg:"somthing went wrong in getting post"})
       }
})


postRoute.post("/create",userAuthentication,async(req,res)=>{
      const {title,photo,userID} = req.body
      try{
            if(!title){
                res.status(403).send({msg:"title should be mentioned"})
               }else{
                   const user = await userModel.findById({_id:userID})
                   user.password = undefined
                   const post = new postModel({title,photo,postedBy:user})
                   const data =  await post.save()
                   res.status(200).send(data)
            }
      }catch(err){
        console.log(err)
        res.status(500).send({msg:"somthing went wrong in post created"})
      } 
})

module.exports = {postRoute}
