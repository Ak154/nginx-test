import express from "express";
import dotenv from "dotenv"
dotenv.config();
import "./config/dbConfig.mjs"
import userRoutes from "./routes/userRoutes.mjs"
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/user", userRoutes)

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server is running on port number ${port}`)
})