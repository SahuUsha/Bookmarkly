
import bcrypt from 'bcrypt'

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({

    username: {
        type : String,
        required : true,
        unique : true,
        trim : true,
        index : true

    },
    password : {
        type : String,
        required : true


    }
},{timestamps:true})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password : string){
        console.log("Plain password:", password); // should log the plain-text password from the user input
  console.log("Hashed password:", this.password);

  return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema)