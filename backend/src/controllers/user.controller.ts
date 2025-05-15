import {Request , Response , NextFunction} from 'express'
import { ApiError } from '../utils/ApiError'
import { User } from '../models/user.model'
import ApiResponse from '../utils/apiresponse'
import jwt from "jsonwebtoken"


const JWT_PASSWORD = "!23456"

const signUpController = async(req  : Request, res: Response ,next: NextFunction)=>{

    const {username , password} = req.body
    
    try {
        if(
            [username,password].some((field)=> field?.trim()==="")
    
        ){
            throw new ApiError(400, "All field are required")
        }

        const existedUser  = await User.findOne({
            username: username
        })

        if(existedUser){
            throw new ApiError(409 , "User already exist")
        }

        const user = await User.create(
            {
                username : username,
                password
            }
        )
        const createdUser = await User.findById(user._id).select("-password")

        if(!createdUser){
            throw new ApiError(500 , "some this wrong to creating user")
        }
        
       res.status(201).json(
        new ApiResponse(200, createdUser , "User Signup successfully")
      )
    } catch (error) {
        
         throw new ApiError(500, "Error on creating user")
    }

}



const signInController = async(req : Request , res : Response)=>{
    const {username , password  } = req.body
    try {
          if(
            [username,password].some((field)=> field?.trim()==="")
    
        ){
            throw new ApiError(400, "All field are required")
        }
        
        const user = await User.findOne({
            username : username
        })

        if(!user){
            throw new ApiError(404 , "user is not found")
        }

        const token = jwt.sign({
            id : user._id
        },JWT_PASSWORD)

        // const isPasswordValid = await user.isPasswordCorrect(password)

        // if(!isPasswordValid){
        //     throw new ApiError(401 , "Password is incorrect")
        // }

        res.status(200).json(
            new ApiResponse(200, token , "signin successfully")
            
        )

    } catch (error) {
        throw new ApiError(500 , "Error on signing")
    }
    
}



export {signUpController,
    signInController,
}