import { ShareIcon } from "../icons/shareIcon"

interface CardProps{
    title: string;
    link: string;
    type: "twitter" | "youtube" ;
}


export const Card=({title, link, type}: CardProps)=>{
    return(
        <div>

        <div className="bg-white shadow-md rounded-lg border-neutral-200 border-2 p-8 outline-slate-200 max-w-72 min-h-48 min-w-72 ">
     
   
       <div className="flex justify-between">
        <div className="flex items-center text-md">
                    <div className="pr-2 text-gray-500">
            <ShareIcon size="md"/>
            </div>

          {title}
        </div>
        <div className="flex items-center">
            <div className="pr-2 text-gray-500">
                <a href={link} target="blank" >
                    <ShareIcon size="md"/>
                    </a>  
            </div>
            <div  className="pr-2 text-gray-500">
            <ShareIcon size="md"/>
            </div>
          
        </div>
      
        </div>
        <div className="pt-4" >


            {type==="youtube" && <iframe className="w-full" width="570" height="200" src={link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {type ==="twitter" && 
<blockquote className="twitter-tweet">
  <a href={link.replace("x.com" ,"twitter.com")}></a>
  {/* <a href="https://twitter.com/username/status/807811447862468608"></a> */}

</blockquote>}
     

        
        </div>
        </div>
        </div>
        

        
    )

}