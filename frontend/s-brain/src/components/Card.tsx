import axios from "axios";
import { DeleteIcon } from "../icons/DeleteIcon";
import GotoIcon from "../icons/GotoIcon";

import TwitterIcon from "../icons/twitterIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import { BACKEND_URL } from "../config";

interface CardProps{
    title: string;
    link: string;
    type: "twitter" | "youtube" ;
    // id : string;
    userId : any;
    id : any

}


export const Card=({title, link, id,type , userId}: CardProps)=>{


 
       const handleDelete = async(contentId : any)=>{
         console.log("contentId", contentId)


        try {
           const response = await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        data: { contentId },
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },


      });

      if(response){
        console.log("response", response.data);
      }
            
        } catch (error) {
            console.error("Error deleting content:", error);
            alert("Error deleting content");
            
        }

       }



    return(
        <div>

        <div className="bg-white shadow-md rounded-lg border-neutral-200 border-2 p-8 outline-slate-200 max-w-72 min-h-48 min-w-72 ">
     
   
       <div className="flex justify-between">
        <div className="flex items-center text-md font-semibold">
                    <div className="pr-2 text-gray-500">
                        {
                            type === "youtube" ? <YouTubeIcon height="22" width="22"/> : <TwitterIcon  height="21" width="21"/>    
                        }
            {/* <ShareIcon size="md"/> */}
            </div>

          {title}
        </div>
        <div className="flex items-center">
            <div className="pr-2 text-gray-500">
                <a href={link} target="blank" >
                    <GotoIcon size="md"/>
                    </a>  
            </div>
            <button onClick={()=>{handleDelete(id)}}  className="pr-2 text-gray-500">
            <DeleteIcon size="md"/>
            </button>
          
        </div>
      
        </div>
        <div className="pt-4" >


            {type==="youtube" && <iframe className="w-full" width="570" height="200" src={link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {type ==="twitter" && 
<blockquote className="twitter-tweet">
  <a href={link.replace("x.com" ,"twitter.com")}></a>
  {/* <a href="https://twitter.com/username/status/807811447862468608"></a> */}

</blockquote>}
<div className="pt-4">
    <p className="text-neutral-600">Added by <span className="font-semibold text-[1.1rem]">{userId.username}</span></p>
</div>

        
        </div>
        </div>
        </div>
        

        
    )

}