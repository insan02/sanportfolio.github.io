import React, { useState, useEffect } from 'react'

const Hero = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleCVDropdown = () => setIsCVDropdownOpen(!isCVDropdownOpen)

  // --- TERJEMAHAN ---
  const translations = {
    en: {
      greeting: "Hi, I'm",
      role: "< UI/UX Designer & Web Developer />",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      idFormat: "Indonesia Format",
      enFormat: "English Format",
      nav: {
        home: "Home",
        about: "About",
        education: "Education",
        experience: "Experience",
        project: "Project",
        contact: "Contact"
      }
    },
    id: {
      greeting: "Halo, saya",
      role: "< UI/UX Designer & Web Developer />", // Istilah teknis biasanya tetap Inggris atau disesuaikan
      viewProjects: "Lihat Proyek",
      downloadCV: "Unduh CV",
      contactMe: "Hubungi Saya",
      idFormat: "Format Indonesia",
      enFormat: "Format Inggris",
      nav: {
        home: "Beranda",
        about: "Tentang",
        education: "Pendidikan",
        experience: "Pengalaman",
        project: "Proyek",
        contact: "Kontak"
      }
    }
  }

  const t = translations[language]
  const navItems = ['Home', 'About', 'Education', 'Experience', 'Project', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navItems.map(item => item.toLowerCase())
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCVDropdownOpen && !event.target.closest('.cv-dropdown')) {
        setIsCVDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isCVDropdownOpen])

  return (
    <section id="home" className="bg-zinc-950 text-white min-h-screen relative overflow-hidden selection:bg-emerald-500 selection:text-white">

      {/* === BACKGROUND ACCENTS === */}
      {/* === BACKGROUND ACCENTS === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Strong Gradient Base Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-zinc-950 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/25 via-transparent to-emerald-900/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-900/20 via-transparent to-purple-900/15"></div>
        
        {/* Large Animated Gradient Orbs - More Visible */}
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/40 via-teal-500/30 to-cyan-500/20 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/35 via-blue-500/25 to-emerald-500/15 rounded-full blur-[130px] animate-pulse delay-700"></div>
        <div className="absolute -bottom-[10%] right-[20%] w-[600px] h-[600px] bg-gradient-to-tl from-emerald-400/30 via-teal-500/25 to-cyan-400/20 rounded-full blur-[110px] animate-pulse delay-1000"></div>
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-emerald-500/10 rounded-full blur-[110px] animate-pulse delay-500"></div>
        <div className="absolute bottom-[30%] right-[40%] w-[450px] h-[450px] bg-gradient-to-tl from-teal-500/25 via-cyan-500/20 to-transparent rounded-full blur-[100px] animate-pulse delay-300"></div>
        
        {/* Radial Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-soft-light"></div>
      </div>

      {/* === NAVBAR === */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-zinc-950/80 backdrop-blur-md border-white/10 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="text-2xl font-extrabold tracking-tighter group cursor-pointer z-50">
              <span className="text-white group-hover:text-emerald-400 transition-colors">Port</span>
              <span className="text-emerald-500">folio</span>
              <span className="text-emerald-400 animate-pulse">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => {
                const sectionId = item.toLowerCase()
                const isActive = activeSection === sectionId
                const menuLabel = t.nav[sectionId] || item 

                return (
                  <a 
                    key={item} 
                    href={`#${sectionId}`} 
                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}
                  >
                    {menuLabel}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </a>
                )
              })}

              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage} 
                className="ml-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-300 text-xs font-bold text-gray-300"
              >
                {language === 'en' ? 'EN' : 'ID'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4 z-50">
              <button onClick={toggleLanguage} className="text-xs font-bold text-white border border-white/20 px-2 py-1 rounded bg-white/5">
                {language === 'en' ? 'EN' : 'ID'}
              </button>
              <button onClick={toggleMenu} className="text-white hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className={`absolute top-0 left-0 w-full bg-zinc-900 border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} md:hidden`}>
            <div className="flex flex-col pt-24 pb-6 px-6 space-y-4">
              {navItems.map(item => {
                 const sectionId = item.toLowerCase()
                 const menuLabel = t.nav[sectionId] || item
                 return (
                  <a 
                    key={item} 
                    href={`#${sectionId}`} 
                    className="text-lg font-medium text-gray-300 hover:text-emerald-400 hover:pl-2 transition-all duration-300" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menuLabel}
                  </a>
                 )
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* === HERO CONTENT === */}
      <div className="container mx-auto px-6 text-center flex items-center justify-center min-h-screen pt-40 md:pt-32 pb-32 relative z-10"> {/* <-- pt-40 untuk dorong ke bawah */}
        <div className="max-w-5xl mx-auto">
          
          {/* Profile Picture */}
          <div className="mb-6 relative group inline-block"> {/* <-- mb-6 untuk kurangi jarak ke bawah */}
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute -inset-3 rounded-full border border-dashed border-emerald-500/40 animate-spin-slow"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50 blur-md group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-zinc-900 bg-zinc-800 z-10">
                <img 
                  src="me1.png" 
                  alt="Nurul Insan Profile" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center z-20">
                 <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse border border-emerald-400"></div>
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              {t.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 animate-gradient">Nurul Insan</span>
            </h1>

            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="text-lg md:text-2xl font-light text-gray-300">
                  <span className="typing-effect font-mono text-emerald-400">{t.role}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-16 items-center">
            {/* Button 1: Projects */}
            <a 
              href="#project" 
              className="relative overflow-hidden group px-8 py-4 bg-emerald-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-shimmer skew-x-12"></div>
              <span className="relative flex items-center justify-center gap-2">
                {t.viewProjects}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </a>

            {/* Button 2: CV */}
            <div className="relative cv-dropdown w-full sm:w-auto">
              <button 
                onClick={toggleCVDropdown} 
                className={`w-full px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/20 transition-all duration-300 hover:bg-white/5 hover:border-white/50 flex items-center justify-center gap-2 ${isCVDropdownOpen ? 'bg-white/10 border-white/50' : ''}`}
              >
                {t.downloadCV}
                <svg className={`w-4 h-4 transition-transform duration-300 ${isCVDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              {isCVDropdownOpen && (
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-zinc-900/95 border border-white/10 rounded-2xl shadow-2xl py-2 w-60 backdrop-blur-xl animate-slide-up z-50 overflow-hidden">
                  <a href="/CV ind_Nurul Insan.pdf" download className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-300 transition-colors group">
                    <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-[10px] font-bold text-white group-hover:bg-emerald-500 transition-colors">ID</span>
                    <span className="text-sm font-medium">{t.idFormat}</span>
                  </a>
                  <div className="h-px bg-white/5 mx-4"></div>
                  <a href="/CV eng_Nurul Insan.pdf" download className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-300 transition-colors group">
                    <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-[10px] font-bold text-white group-hover:bg-blue-500 transition-colors">EN</span>
                    <span className="text-sm font-medium">{t.enFormat}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Button 3: Contact */}
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              {t.contactMe}
            </a>
          </div>
        </div>
      </div>

      {/* === CSS === */}
      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 100% { transform: translateX(200%); } }
        @keyframes slide-up { from { opacity: 0; transform: translate(-50%, 10px); } to { opacity: 1; transform: translate(-50%, 0); } }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #10b981 } }
        
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-shimmer { animation: shimmer 1.5s infinite; }
        .animate-slide-up { animation: slide-up 0.2s ease-out forwards; }
        .typing-effect {
          display: inline-block; overflow: hidden; border-right: 2px solid #10b981; white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </section>
  )
}

export default Hero