import dotenv from "dotenv"


import { connect, Mongoose } from "mongoose";
import { DB_NAME } from "./constant"
import { connectDB } from "./db/index.js";

dotenv.config({
 path: './env'

})


connectDB()


