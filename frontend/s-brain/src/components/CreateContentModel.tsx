

import React, { useRef,useState } from 'react'
import CrossIcon from '../icons/CrossIcon'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { BACKEND_URL } from '../config'
import axios from 'axios'


enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
}

// @ts-ignore
const CreateContentModel = ({open   , onClose}) => {
     const titleRef = useRef<HTMLInputElement>(null);
     const linkRef = useRef<HTMLInputElement>(null);
     const [type, setType] = useState(ContentType.Youtube)


    const handleaddContent=async()=>{

        try {

          const title = titleRef.current?.value;
        const link = linkRef.current?.value;

         const res = await axios.post(`${BACKEND_URL}/api/v1/content`,{title , link ,type},{
            headers :{
            
                    "Authorization" :localStorage.getItem("token")
                
            }
         })
         console.log(res.data)
         if(res){
            alert("Successfully added content")
            onClose()
         }
            
        } catch (error) {
            console.error("Error adding content:", error);
            alert("Error adding content")
        }

    }


  return (
    <div>
        {
            open &&<div>
                 <div className='w-screen h-screen bg-black fixed top-0 left-0 opacity-80 z-50 flex justify-center items-center'> 
                    
            </div>
                 <div className='w-screen h-screen bg-neutral-700 fixed top-0 left-0 opacity-80 z-50 flex justify-center items-center'> 

                <div className=' flex flex-col justify-center w-[35%]  '>
                    <div className='bg-white opacity-100 p-4 rounded'>

            <div className='flex justify-end '>
                <div onClick={onClose} className='cursor-pointer'>
                <CrossIcon/>

                </div>

            </div>
            <div className='flex flex-col gap-4'>
                <Input ref={titleRef} placeholder={'Enter the title'} />
                <Input ref={linkRef} placeholder={'Enter the link'} />
            </div>
            <div>
                <h1>Type</h1>
                <div className='flex gap-1 p-4'>
                <Button text='Youtube' variant={type === ContentType.Youtube ? 'primary' : 'secondary'} size='md' onClick={()=>{setType(ContentType.Youtube)}}/>
                <Button text='Twitter' variant={type === ContentType.Twitter ? 'primary' : 'secondary'} size='md' onClick={()=>{setType(ContentType.Twitter)}}/>
                </div>
            </div>
            <div className='flex justify-center m-3'>
                <Button variant='primary' text='Submit' size='md' onClick={()=>{handleaddContent()}}/>
            </div>
                    </div>
            
                </div>
            </div>
            </div>

        }
    
      
    </div>
  )
}

export default CreateContentModel
