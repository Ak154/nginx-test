import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

const connect = mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection

connection.on("connected", ()=>{
    console.log("DB Connected")
})

connection.on("Error", (error)=>{
    console.log("Error in db connection", error)
})

export default mongoose;