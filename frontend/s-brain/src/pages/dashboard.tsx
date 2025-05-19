
// import './App.css'

import axios from "axios"
import { Card } from "../components/Card"
import CreateContentModel from "../components/CreateContentModel"
import Sidebar from "../components/Sidebar"

import { Button } from "../components/ui/Button"
import UseContent from "../hook/useContent"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { useState } from "react"
import { BACKEND_URL } from "../config"


function Dashboard() {
  const [modelOpen, setmodelOpen] = useState(false)

  const [contents,refresh] = UseContent()

  

const handleSahreUrl=async()=>{
  try {
    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
      share : true
    })
    const shareUrl = `https://localhost:5173/share/${response.data.hash}`
    alert(`Share this url ${shareUrl}`)
    
  } catch (error) {
    console.error("Error sharing url:", error);
    alert("Error sharing url")
    
  }
}
   


  return (
    <div className="">
      <div>
    <Sidebar/>
      </div>
    <div className="p-4 ml-76 bg-slate-50 min-h-screen border-2 border-gray-300">
      <CreateContentModel open={modelOpen} onClose={()=>{setmodelOpen(false)}}/>

      <div className="flex justify-end gap-4">

  <Button variant="secondary" startIcon={<ShareIcon size="lg"/>} onClick={()=>{}}  text="Share Brain" size="md"/>
  <Button variant="primary" startIcon={<PlusIcon size="lg"/>} onClick={()=>{setmodelOpen(true)}}  text="Add content" size="md"/>
      </div>

  <div className="flex  flex-wrap gap-4">
    {contents.map(({type, link, title})=>
    <Card key={title} type={type} link={link} title={title} />)}
    {/* <Card type="twitter" link="https://x.com/SecDef/status/1923863310039949535" title="Raid 2" />

    <Card type="youtube" link="https://www.youtube.com/watch?v=F9kXx6BZITw&list=RDF9kXx6BZITw&start_radio=1" title="Raid 2" /> */}
  </div>
    </div>
     
    </div> 

  )
}

export default Dashboard
