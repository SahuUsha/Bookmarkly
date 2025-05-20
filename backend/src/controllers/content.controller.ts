import { NextFunction, Request, Response } from "express";
import { Content } from "../models/content.model";
import ApiResponse from "../utils/apiresponse";
import { ApiError } from "../utils/ApiError";


const contentController = async(req: Request , res: Response, next: NextFunction)=>{
     const link = req.body.link;
     const type = req.body.type;
     const title = req.body.title



     try {
        const content = await Content.create({
           link,
           type,
           title,
           // @ts-ignore
            userId  : req.userId,
           tags : []
        })
   
       res.status(200).json(
           new ApiResponse(200, "content added successfully")
        )
     } catch (error) {
        console.error("Error creating content:", error);
        throw new ApiError(500, "error on creating the content")
        
     }
}

const getContent = async(req : Request , res : Response , next : NextFunction)=>{

    // @ts-ignore
    const userId = req.userId
    const content =await Content.find({
        userId : userId
    }).populate("userId","username")

    if(!content) {
       throw new ApiError(404 , "No content of user")
    }

    res.status(200).json(
        new ApiResponse(200 , content , "Content get successfully")
    )
}

const deleteContent = async(req : Request , res : Response ,next : NextFunction)=>{
    const contentId = req.body.contentId;
    

    try {
        
      const deleteContent =   await Content.deleteMany({
            _id: contentId,
            // @ts-ignore
            userId : req.userId
        })

        console.log("delete content", deleteContent)
        
        if(!deleteContent){
            throw new ApiError(404 , "No content of user")
        }
 
        res.status(200).json(
            new ApiResponse(200, deleteContent , "content deleted successfully")
        )
    } catch (error) {
        throw new ApiError(500, "error on deleting the content")
    }
   

}

export{
    contentController,
    getContent,
    deleteContent


}