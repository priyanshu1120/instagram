const express = require("express")
const { userModel } = require("../model/user.model.js")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
require('dotenv').config()
const userRoute = express.Router()


userRoute.post("/signup", async (req, res) => {
    const { email, name, password } = req.body
    try {
        const emailExit = await userModel.find({ email: email })
   
        if (emailExit.length > 0) {
            res.status(402).send("user already exits with this  email try with another... ")
        } else {
            if (!email || !password || !name) {
                res.status(400).send({ msg: "all fields are required" })
            } else {
                bcrypt.hash(password, 12, async (err, hash) => {
                    const userData = new userModel({ name, email, password: hash })
                    const data = userData.save()
                    res.status(200).send({ msg: "user register successfully" })
                })
            }

        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: "someting went wrong in signup request" })
    }
})

userRoute.post("/login",async(req,res)=>{
   const {email,password} = req.body
   try{
    const user = await userModel.find({ email: email })
    if (user.length < 1) {
        res.status(402).send("authentication failed user does not exits try to signup please...")
    } else{
           bcrypt.compare(password,user[0].password,(err,result)=>{
                 if(result){
                     const token =  jwt.sign({userID :user[0]._id},`${process.env.KEY}`)
                      res.status(201).send({msg:"Login successfully",data:user,token:token})
                 }else{
                      res.status(403).send({msg:"authentication failed due to password does not match"})
                 }
           })
    }

   }catch(err){

      res.status.send({msg: "someting went wrong in login request"})
   }    
})

module.exports = { userRoute }