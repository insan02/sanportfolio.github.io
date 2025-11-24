import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // State bahasa diangkat ke sini agar berlaku global
  const [language, setLanguage] = useState('en')

  // Fungsi toggle bahasa
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en')
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header menerima language & function untuk mengubahnya */}
      <Header language={language} toggleLanguage={toggleLanguage} />
      
      {/* Komponen lain hanya menerima data language */}
      <About language={language} />
      <Education language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  )
}

export default App