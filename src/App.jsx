import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
