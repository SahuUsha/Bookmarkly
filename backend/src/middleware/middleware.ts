import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError";

export const userMiddleWare = (req : Request , res : Response , next : NextFunction)=>{

    const header = req.header("authorization")
    const decoded = jwt.verify(header as string , process.env.JWT_PASSWORD as string)
    if(decoded){
       // @ts-ignore
        req.userId = decoded.id
        next()
    }else{
        throw new ApiError(404 ,"You are not loggin" )
    }



}