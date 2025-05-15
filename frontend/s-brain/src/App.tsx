
// import './App.css'

import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"

function App() {


  return (
    <>
  <Button variant="primary" startIcon={<ShareIcon size="lg"/>} onClick={()=>{}}  text="share" size="md"/>
  <Button variant="secondary" startIcon={<PlusIcon size="lg"/>} onClick={()=>{}}  text="Add content" size="md"/>

    
     
    </> 
  )
}

export default App
