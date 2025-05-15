import express from "express";
import { signInController, signUpController } from "./controllers/user.controller";
import connectDB from "./DBconnection/DBconnect";
import dotenv from 'dotenv'
import { userMiddleWare } from "./middleware/middleware";
import { contentController } from "./controllers/content.controller";

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
app.post("/api/v1/signup",signUpController)
app.post("/api/v1/signin",signInController)

app.post("/api/v1/content",userMiddleWare,contentController)

// app.get("/api/v1/content")
// app.delete("/api/v1/content")
// app.post("/api/v1/brain/share")
// app.get("/api/v1/brain/:shareLink")