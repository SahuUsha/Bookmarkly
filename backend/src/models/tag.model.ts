import mongoose, { Schema } from "mongoose";

const tagSchema = new Schema({
    title : {
        type : String ,
        required : true,
        unique : true

    }
},{timestamps : true})

export const Tag = mongoose.model('Tag' , tagSchema)