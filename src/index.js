import dotenv from "dotenv"


import { connect, Mongoose } from "mongoose";
import { DB_NAME } from "./constant"
import { connectDB } from "./db/index.js";
import { application } from "express";

dotenv.config({
 path: './env'

})


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000,() => {
        console.log("server is running");
        
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!,err");
    
})


