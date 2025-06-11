

import React from 'react'
import SidebarItems from './SidebarItems'
import TwitterIcon from '../icons/twitterIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import Logo from '../icons/logo'
import AllIcon from '../icons/AllIcon'

import LogoutIcon from '../icons/logout'
import { useNavigate } from 'react-router-dom'

interface SidebarProps {
  onSelect: (platform: string) => void
}


const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  
  const navigate = useNavigate()
  
  const handleSignInOut = () => {
      try {
        alert("logout")
        localStorage.removeItem("token"); // Better than setting it to an empty string
        navigate("/signin");
      } catch (error) {
        console.error("Error on sign out:", error);
      }
    };

  return (
    <div className='h-screen bg-white border-r border-gray-300 pl-6 w-76 fixed left-0 top-0'>
      <div className='flex text-2xl font-semibold pt-4 items-center'>
        <div className='pr-1 text-[#5046e4]'>
          <Logo />
        </div>
        <span>Bookmarkly</span>
      </div>
      <div className='pt-8 pl-4'>
                <div onClick={() => onSelect('all')} className='cursor-pointer mb-2'>
          <SidebarItems Icon={<AllIcon />} text="All" />
        </div>
        <div onClick={() => onSelect('twitter')} className='cursor-pointer'>
          <SidebarItems Icon={<TwitterIcon height='30' width='30' />} text="Twitter" />
        </div>
        <div onClick={() => onSelect('youtube')} className='cursor-pointer mt-2'>
          <SidebarItems Icon={<YouTubeIcon height='30' width='30' />} text="YouTube" />
        </div>
        <div className='cursor-pointer mt-2'>
          {/* <Button startIcon={<LogoutIcon/>} text='SignOut' variant='secondary' size='md' onClick={()=>{}} /> */}
         <button onClick={()=>handleSignInOut()} className=' px-5 py-2 cursor-pointer font-semibold text-[#4d40ff] flex rounded hover:text-[#6f6def] ' ><LogoutIcon/> <span className='px-2'>SignOut</span></button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar