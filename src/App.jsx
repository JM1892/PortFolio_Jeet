import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Project' element={<Project/>} />
        <Route path='/Footer' element={<Footer/>} />
      </Routes>
    </BrowserRouter>

    <div className='App'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </>
    
  )
}


export default App
