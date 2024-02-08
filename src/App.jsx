import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Pick from './components/Pick'
import Random from './components/Random'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <Navbar/>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/blue" element={<Blue/>}></Route>
            <Route path="/red" element={<Red/>}></Route>
            <Route path="/random" element={<Random/>}></Route>
            <Route path="/pick" element={<Pick/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
