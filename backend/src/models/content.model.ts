import mongoose, { Schema, Types } from "mongoose";

const ContentTypes = ["youtube","twitter"]

const contentSchema = new Schema({
    link : {
        type : String,
        required : true
    },
    type : {
        type : String,
        enum : ContentTypes,
        required : true
    },
    title :{
        type : String,
        required : true,

    },
    tags : [{
        type : Types.ObjectId,
        ref : 'Tag'

    }],
    userId : {
        type : Types.ObjectId ,
        ref : 'User',
        required : true
    }

},{timestamps : true})

export const Content = mongoose.model("Content" , contentSchema)