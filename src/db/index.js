import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "src/constant.js"


const connectDB = async () => {
    try {
    const connectionDB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
    console.log('\n Mongodb connected !! DB HOST : ${connectionDB.connection.host}');
      
    } catch (error) {
        console.log("MONGODB connection error", error  );
        process.exit(1)
        
    }
}

export default connectDB 


