import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {


  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/login" element={<Login/>} />
     </Routes>
    </div>
  )
}

export default App
