import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongodb database ${conn.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}
export default connectDB;