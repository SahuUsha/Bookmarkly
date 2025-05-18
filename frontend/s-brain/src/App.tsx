
// import './App.css'

import { Card } from "./components/Card"
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"

function App() {


  return (
    <>
    <div className="p-4">
      <div className="flex justify-end gap-4">

  <Button variant="secondary" startIcon={<ShareIcon size="lg"/>} onClick={()=>{}}  text="Share Brain" size="md"/>
  <Button variant="primary" startIcon={<PlusIcon size="lg"/>} onClick={()=>{}}  text="Add content" size="md"/>
      </div>

  <div className="flex gap-4">
    <Card type="twitter" link="https://x.com/SecDef/status/1923863310039949535" title="Raid 2" />

    <Card type="youtube" link="https://www.youtube.com/watch?v=F9kXx6BZITw&list=RDF9kXx6BZITw&start_radio=1" title="Raid 2" />
  </div>
    </div>
     
    </> 

  )
}

export default App
