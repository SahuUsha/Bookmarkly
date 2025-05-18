

import React from 'react'
import CrossIcon from '../icons/CrossIcon'
import { Button } from './ui/Button'
import { Input } from './ui/Input'

const CreateContentModel = ({open , onClose}) => {
  return (
    <div>
        {
            open && <div className='w-screen h-screen bg-black fixed top-0 left-0 opacity-80 z-50 flex justify-center items-center'> 
                <div className=' flex flex-col justify-center  '>
                    <div className='bg-white opacity-100 p-4 rounded'>

            <div className='flex justify-end '>
                <div onClick={onClose} className='cursor-pointer'>
                <CrossIcon/>

                </div>

            </div>
            <div className='flex flex-col gap-4'>
                <Input placeholder={'Enter the link'} onChange={()=>{}}/>
                <Input placeholder={'Enter the link'} onChange={()=>{}}/>
            </div>
            <div className='flex justify-center m-3'>
                <Button variant='primary' text='Submit' size='md' onClick={()=>{}}/>
            </div>
                    </div>
            
                </div>
            </div>

        }
    
      
    </div>
  )
}

export default CreateContentModel
