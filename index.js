import express, { request } from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from "helmet"
import userRouter from "./route/user.route.js"
import connectDB from "./config/connectDB.js"
//import uploadRouter from "./route/upload.route.js"

const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

const PORT = 8080 || process.env.PORT

app.get("/" , (request,response) =>{
    // server to client
    response.json({
        message : "Server is running " + PORT
    })
})

 app.use("/api/user" , userRouter)
 //app.use("/file",uploadRouter)

connectDB().then(()=>{
    app.listen(PORT , () =>{
        console.log("server is running" , PORT);  
    })    
})

