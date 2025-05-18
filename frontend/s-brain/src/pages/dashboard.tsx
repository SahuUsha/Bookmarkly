
// import './App.css'

import { Card } from "../components/Card"
import CreateContentModel from "../components/CreateContentModel"
import Sidebar from "../components/Sidebar"

import { Button } from "../components/ui/Button"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { useState } from "react"


function Dashboard() {
  const [modelOpen, setmodelOpen] = useState(false)


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

  <div className="flex gap-4">
    <Card type="twitter" link="https://x.com/SecDef/status/1923863310039949535" title="Raid 2" />

    <Card type="youtube" link="https://www.youtube.com/watch?v=F9kXx6BZITw&list=RDF9kXx6BZITw&start_radio=1" title="Raid 2" />
  </div>
    </div>
     
    </div> 

  )
}

export default Dashboard
