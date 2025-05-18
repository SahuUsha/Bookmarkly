
// import './App.css'

import { Card } from "./components/Card"
import CreateContentModel from "./components/CreateContentModel"
import Sidebar from "./components/Sidebar"

import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"
import { useState } from "react"
import Dashboard from "./pages/dashboard"


function App() {
  const [modelOpen, setmodelOpen] = useState(false)


  return (
   <Dashboard/> 

  )
}

export default App
