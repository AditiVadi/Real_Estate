import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Profile from './pages/Profile'
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Sign-In' element={<Signin/>}/>
    <Route path='/Sign-Out' element={<Signout/>}/>
    <Route path='/Profile' element={<Profile/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
