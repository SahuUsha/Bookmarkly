
// import './App.css'

import { Card } from "./components/Card"
import CreateContentModel from "./components/CreateContentModel"
import Sidebar from "./components/Sidebar"

import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"
import { useState } from "react"
import Dashboard from "./pages/dashboard"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import {BrowserRouter , Routes , Route} from 'react-router-dom'


function App() {
  const [modelOpen, setmodelOpen] = useState(false)

  return<BrowserRouter>
  <Routes>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/share/:shareId" element={<Dashboard/>}/>
  </Routes>



  </BrowserRouter>


 
}

export default App
