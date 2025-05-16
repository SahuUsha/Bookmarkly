import { NextFunction, Request, Response } from "express"
import { ApiError } from "../utils/ApiError"
import { Link } from "../models/link.model"
import ApiResponse from "../utils/apiresponse"
import { random } from "../utils/random"
import { Content } from "../models/content.model"
import { User } from "../models/user.model"


const ShareLink = async(req : Request,res: Response,next:   NextFunction )=>{
    const share = req.body.share
   try {
    console.log("share link", share)
     if(!share){
        await Link.deleteOne(
            {
                // @ts-ignore
            userId : req.userId
        }
        )
         throw new ApiError(400, " share link is required")
     }

     const existingLink = await Link.findOne({
        // @ts-ignore
        userId : req.userId

     })
     if(existingLink){
        res.status(300).json(
            new ApiResponse(300 ,{ hash:  existingLink.hash }, "link is already exist" )
        )
        return;
     }
 

     const hash = random(10);
     const sharelink = await Link.create({
         hash : hash,
         // @ts-ignore
          userId : req.userId
     })
  
     console.log("share link content", sharelink)
     if(!sharelink){
         throw new ApiError(500, " error on creating share link")
     }          
     res.status(200).json(
         new ApiResponse(200, sharelink , "/share/" +hash+": share link created successfully")
     )
   } catch (error) {
        throw new ApiError(500, "error on creating share link")
   }
}

const GetShareLink = async(req: Request , res: Response , next: NextFunction)=>{
      const hash = req.params.shareLink;

try {
          const link = await Link.findOne({
            hash 
                  
          })
          if(!link){
            throw new ApiError(404 , "Link is required")
          }
          const content = await Content.find({
            userId : link.userId
          })
   
          console.log( "link : ", link)
          console.log("userId : ",link.userId)

          const user = await User.findOne({
           _id : link.userId
          })

          if(!user){
            throw new ApiError(404, "user not found on shering link")
          }

            if(!content){
                throw new ApiError(404, "content not found on shering link")
            } 

            res.status(200).json(
                new ApiResponse(200, {username : user.username , content : content},"user found"),
            )
} catch (error) {
    new ApiError(500,{error}+": error on getting share link")
}
}

export {ShareLink, GetShareLink}