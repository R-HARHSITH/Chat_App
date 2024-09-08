import { useState } from 'react'
import Login from './pages/login/login'
import  Signup from './pages/signup/signup'
import Home from './pages/home/home'
import { Navigate, Route,Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import './App.css'
import { useAuthContext } from './context/authcontext'

function App() {
 const {authUser,setAuthUser}=useAuthContext();

  return (
    <div className=' p-4 h-screen flex sm:h-[450px] md:h-[757px] justify-center items-center'>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={authUser?<Home />:<Navigate to={"/login"} />}></Route>
        <Route path='/login' element={authUser?<Navigate to='/' />:<Login />}></Route>
        <Route path='/signup' element={authUser?<Navigate to='/' />:<Signup />}></Route>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
