import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      {/* Floating Animated Background Blobs */}
      <div className="floating-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar theme={theme} setTheme={setTheme} />
      <main className="main-content">
        <Home />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App