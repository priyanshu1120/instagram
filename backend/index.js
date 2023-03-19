const express = require("express")
const { connect } = require("./config/db")
const { postRoute } = require("./route/post.route")
const { userRoute } = require("./route/user.route")
const app = express()


app.get("/",(req,res)=>{
     res.send({msg:"server run succesfully"})
})

app.use(express.json())
app.use("/user",userRoute)
app.use("/post",postRoute)


app.listen(7500,async(req,res)=>{
      try{
          await connect  
      }catch(err){
         console.log(err)
      }
      console.log( `server run on http://localhost:7500`)
})