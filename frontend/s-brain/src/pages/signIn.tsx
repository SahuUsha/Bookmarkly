

import React, {useRef, useState} from 'react'

import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { BACKEND_URL } from '../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SignIn= () => {
    const navigate = useNavigate()
 
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


     const handleSignIn=async()=>{
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
      try {
        
        const res = await axios.post(`${BACKEND_URL}/api/v1/signin`,{username , password})
        console.log(res.data)
        if(res){
          // alert("Successfully signed in")
          const jwtToken  = res.data.data
          console.log("jwtToken : ", jwtToken)
          localStorage.setItem("token", jwtToken)
          navigate("/dashboard")

        }
       
      } catch (error) {
        console.error("Error signing in  or passord or user Id are not valid", error);
        alert("Error signing in or or passord or user Id are not valid")
        
      }
      
    }

  return (
    <div className='h-screen w-screen  bg-[#e0dfeb] flex justify-center items-center  '>
      <div className='bg-white p-6 rounded-md border-2 border-[#9d9abe] min-w-50 '>
        <h1 className='flex text-center justify-center font-bold text-[1.3rem] text-[#281f8b] p-3' >SignIn</h1>
        <div className='flex mt-4 flex-col justify-center gap-4'>

        <Input ref={usernameRef} placeholder={"username"} />
        <Input ref={passwordRef} placeholder={"username"} />
        </div>
        <div className='flex justify-center mt-6 m-3 '>

            <Button loading={false} variant='primary' size='md' text='SignIn' onClick={()=>{handleSignIn()} } fullWidth={true}/>
        </div>
        <p className='flex text-center justify-center items-center'>
            Not SignUp? <button onClick={()=>{navigate("/signup")}} className='font-bold text-[#281f8b] pl-1'> SignUp</button>
        </p>
      </div>
    </div>
  )
}

export default SignIn
