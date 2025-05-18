

import React, {useState} from 'react'

import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

const SignUp = () => {
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
  return (
    <div className='h-screen w-screen  bg-[#e0dfeb] flex justify-center items-center  '>
      <div className='bg-white p-6 rounded-md border-2 border-[#9d9abe] min-w-50 '>
        <h1 className='flex text-center justify-center font-bold text-[1.3rem] text-[#281f8b] p-3' >SignUp</h1>
        <div className='flex mt-4 flex-col justify-center gap-4'>

        <Input placeholder={"username"} />
        <Input placeholder={"username"} />
        </div>
        <div className='flex justify-center mt-6 m-3 '>

            <Button loading={false} variant='primary' size='md' text='SignUp' onClick={()=>{} } fullWidth={true}/>
        </div>
        <p className='flex text-center justify-center items-center'>
            Already signUp? <span className='font-bold text-[#281f8b] pl-1'> SignIn</span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
