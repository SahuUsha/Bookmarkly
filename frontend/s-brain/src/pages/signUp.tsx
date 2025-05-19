

import React, {useRef, useState} from 'react'

import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
    

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSignUp=async()=>{
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
      try {
        
        const res = await axios.post(`${BACKEND_URL}/api/v1/signup`,{username , password})
        console.log(res.data)
        if(res){
          alert("Successfully signed up")
          navigate("/signin")
        }
       
      } catch (error) {
        console.error("Error signing up  or user already exist:", error);
        alert("Error signing up or user already exist")
        
      }
      



    }



  return (
    <div className='h-screen w-screen  bg-[#e0dfeb] flex justify-center items-center  '>
      <div className='bg-white p-6 rounded-md border-2 border-[#9d9abe] min-w-50 '>
        <h1 className='flex text-center justify-center font-bold text-[1.3rem] text-[#281f8b] p-3' >SignUp</h1>
        <div className='flex mt-4 flex-col justify-center gap-4'>

        <Input ref={usernameRef} placeholder={"username"} />
        <Input ref={passwordRef} placeholder={"username"} />
        </div>
        <div className='flex justify-center mt-6 m-3 '>

            <Button loading={false} variant='primary' size='md' text='SignUp' onClick={()=>{handleSignUp()} } fullWidth={true}/>
        </div>
        <p className='flex text-center justify-center items-center'>
            Already signUp? <button onClick={()=>{navigate("/signin")}} className='font-bold text-[#281f8b] pl-1'> SignIn</button>
        </p>
      </div>
    </div>
  )
}

export default SignUp
