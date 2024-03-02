import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
     
    </>
  )
}

export default App
