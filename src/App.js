import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
// components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App
