import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Certificates/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App