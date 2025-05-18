

import React from 'react'
import SidebarItems from './SidebarItems'
import TwitterIcon from '../icons/twitterIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import Logo from '../icons/logo'

const Sidebar = () => {
  return (
    <div className='h-screen bg-white border-r border-gray-300 pl-6 w-76 fixed left-0 top-0'>
       <div className='flex text-2xl  font-semibold pt-8 items-center'>
        <div className='pr-1 text-[#26207d]'>
        <Logo/>

        </div>
              Brainly
       </div>
      <div className='pt-8 pl-4 '>
      <SidebarItems Icon={<TwitterIcon/>} text={"Twitter"}/>
      <SidebarItems Icon={<YouTubeIcon/>} text={"YouTube"}/>
      </div>
      
  
  

    </div>
  )
}

export default Sidebar
