import React, { useState, useEffect } from 'react'

const Hero = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleCVDropdown = () => setIsCVDropdownOpen(!isCVDropdownOpen)

  const translations = {
    en: {
      greeting: "Hi, I'm",
      role: "< UI/UX Designer & Web Developer />",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      idFormat: "Indonesia Format",
      enFormat: "English Format",
      nav: { home: "Home", about: "About", education: "Education", experience: "Experience", project: "Project", contact: "Contact" }
    },
    id: {
      greeting: "Halo, saya",
      role: "< UI/UX Designer & Web Developer />", 
      viewProjects: "Lihat Proyek",
      downloadCV: "Unduh CV",
      contactMe: "Hubungi Saya",
      idFormat: "Format Indonesia",
      enFormat: "Format Inggris",
      nav: { home: "Beranda", about: "Tentang", education: "Pendidikan", experience: "Pengalaman", project: "Proyek", certificate: "Sertifikat", contact: "Kontak" }
    }
  }

  const t = translations[language]
  const navItems = ['Home', 'About', 'Education', 'Experience', 'Project', 'Certificate', 'Contact']

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

  return (
    <section id="home" className="bg-zinc-950 text-white min-h-screen relative overflow-hidden selection:bg-emerald-500 selection:text-white flex flex-col justify-center">

      {/* Background Accents (Sama seperti sebelumnya) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-zinc-950 to-cyan-900/20"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/40 via-teal-500/30 to-cyan-500/20 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/35 via-blue-500/25 to-emerald-500/15 rounded-full blur-[130px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 mix-blend-soft-light"></div>
      </div>

      {/* NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-white/10 py-3 shadow-lg' : 'bg-transparent border-transparent py-4 md:py-6'}`}>
        <nav className="container mx-auto px-6 relative z-50">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl md:text-2xl font-extrabold tracking-tighter group cursor-pointer z-50">
              <span className="text-white group-hover:text-emerald-400 transition-colors">Port</span>
              <span className="text-emerald-500">folio</span>
              <span className="text-emerald-400 animate-pulse">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map(item => {
                const sectionId = item.toLowerCase()
                return (
                  <a key={item} href={`#${sectionId}`} className={`text-xs font-bold uppercase tracking-widest py-2 relative group ${activeSection === sectionId ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}>
                    {t.nav[sectionId] || item}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 origin-left transition-transform duration-300 ${activeSection === sectionId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </a>
                )
              })}
              <button onClick={toggleLanguage} className="ml-4 px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-emerald-500 hover:text-white transition-all duration-300 text-xs font-bold">
                {language === 'en' ? 'EN' : 'ID'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4 z-50">
              <button onClick={toggleLanguage} className="text-xs font-bold border border-white/20 px-2 py-1 rounded bg-zinc-800">
                {language === 'en' ? 'EN' : 'ID'}
              </button>
              <button onClick={toggleMenu} className="text-white hover:text-emerald-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
              </button>
            </div>
          </div>
        </nav>

        {/* === PERBAIKAN: Menu Mobile Full Screen === */}
        <div className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col space-y-6 text-center w-full px-6">
            {navItems.map(item => {
              const sectionId = item.toLowerCase()
              return (
                <a key={item} href={`#${sectionId}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-emerald-400 transition-colors">
                  {t.nav[sectionId] || item}
                </a>
              )
            })}
          </div>
        </div>
      </header>

      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 text-center relative z-10 pt-28 md:pt-0"> 
        <div className="max-w-5xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-6 relative group inline-block">
            <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto"> {/* Responsif ukuran foto */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-emerald-500/40 animate-spin-slow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-zinc-900 bg-zinc-800 z-10">
                <img src="me1.png" alt="Profile" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* === PERBAIKAN: text-4xl di HP, text-7xl di Desktop === */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {t.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 block sm:inline">Nurul Insan</span>
            </h1>

            <div className="relative inline-block group mt-2">
              <div className="relative px-4 md:px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="text-sm sm:text-lg md:text-2xl font-light text-gray-300">
                  <span className="typing-effect font-mono text-emerald-400">{t.role}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 items-center w-full">
            <a href="#project" className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105">
              {t.viewProjects}
            </a>
            
            <div className="relative cv-dropdown w-full sm:w-auto">
              <button onClick={toggleCVDropdown} className="w-full px-8 py-3.5 bg-transparent text-white font-bold rounded-full border border-white/20 transition-all flex justify-center items-center gap-2">
                {t.downloadCV}
                <svg className={`w-4 h-4 transition-transform duration-300 ${isCVDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isCVDropdownOpen && (
                <div className="absolute top-full mt-2 w-full sm:w-60 left-0 sm:left-1/2 sm:-translate-x-1/2 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                  <a href="/CV ind_Nurul Insan.pdf" download className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-500/10 text-gray-300">
                    <span className="text-xs font-bold text-emerald-400">ID</span> <span className="text-sm">{t.idFormat}</span>
                  </a>
                  <a href="/CV eng_Nurul Insan.pdf" download className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-500/10 text-gray-300">
                    <span className="text-xs font-bold text-blue-400">EN</span> <span className="text-sm">{t.enFormat}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #10b981 } }
        .typing-effect { display: inline-block; overflow: hidden; border-right: 2px solid #10b981; white-space: nowrap; animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </section>
  )
}

export default Hero