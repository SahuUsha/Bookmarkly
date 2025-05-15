import express from "express";
import { signInController, signUpController } from "./controllers/user.controller";
import connectDB from "./DBconnection/DBconnect";
import dotenv from 'dotenv'
import { userMiddleWare } from "./middleware/middleware";

dotenv.config({
    path : './.env'
})

const app = express();

app.use(express.json())

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error: ",error)
    })
    app.listen(5000, ()=>{
        console.log(`${`server is running at port : 5000`}`)
    })
})

//.d.ts
app.post("/api/v1/signin",signUpController)
app.post("/api/v1/signup",signInController)

app.post("/api/v1/content",userMiddleWare,)

// app.get("/api/v1/content")
// app.delete("/api/v1/content")
// app.post("/api/v1/brain/share")
// app.get("/api/v1/brain/:shareLink")