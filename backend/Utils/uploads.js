const multer = require("multer")
const {GridFsStorage}  =  require("multer-gridfs-storage")


require('dotenv').config()

const storage = new GridFsStorage({
     url : process.env.MONGOURL,
     file:(req,file)=>{
        
      const fileType = ["image/jpg","image/png","image/jpeg"]
   
       if(fileType.indexOf(file.memeType === -1 )){
          return`${Date.now()}-blog-${file.originalname}`;
       }
        return {
            bucketName :"photos",
            fileName :`${Date.now()}-blog-${file.originalname}`
        }
        
     }

})

module.exports = multer({storage})