
// import './App.css'








import Dashboard from "./pages/dashboard"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute"


function App() {
  

  return<BrowserRouter>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    }/>
   
    <Route path="/share/:shareId" element={<Dashboard/>}/>
  </Routes>



  </BrowserRouter>


 
}

export default App
