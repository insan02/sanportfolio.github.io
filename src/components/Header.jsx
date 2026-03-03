import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCVDropdown = () => setIsCVDropdownOpen(!isCVDropdownOpen);

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
  };

  const t = translations[language];
  const navItems = ['Home', 'About', 'Education', 'Experience', 'Project', 'Certificate', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="bg-[#09090b] text-white min-h-screen relative flex flex-col justify-center selection:bg-emerald-500 selection:text-white">
      {/* SECTION GELAP - HERO */}

      {/* Background Accents (Glow dan Pola Gelap) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#09090b]"></div>
        <div 
          className="absolute inset-0 opacity-40" 
          style={{ 
            backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }}
        ></div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-emerald-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg' : 'bg-transparent border-transparent py-4 md:py-6'}`}>
        <nav className="container mx-auto px-6 relative z-50">
          <div className="flex justify-between items-center">
            <motion.a initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} href="#home" className="text-xl md:text-2xl font-extrabold tracking-tighter group cursor-pointer z-50">
              <span className="text-white group-hover:text-emerald-400 transition-colors">Port</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">folio</span>
              <span className="text-emerald-500 animate-pulse">.</span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const sectionId = item.toLowerCase();
                return (
                  <motion.a initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={item} href={`#${sectionId}`} className={`text-xs font-bold uppercase tracking-widest py-2 relative group ${activeSection === sectionId ? 'text-emerald-400' : 'text-gray-400 hover:text-white transition-colors'}`}>
                    {t.nav[sectionId] || item}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 origin-left transition-transform duration-300 ${activeSection === sectionId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </motion.a>
                );
              })}
              <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} onClick={toggleLanguage} className="ml-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 transition-all duration-300 text-xs font-bold text-white shadow-sm">
                {language === 'en' ? 'EN' : 'ID'}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4 z-50">
              <button onClick={toggleLanguage} className="text-xs font-bold border border-white/10 text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 transition-colors">
                {language === 'en' ? 'EN' : 'ID'}
              </button>
              <button onClick={toggleMenu} className="text-white hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Full Screen */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-100%" }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center lg:hidden">
              <div className="flex flex-col space-y-8 text-center w-full px-6">
                {navItems.map((item, index) => {
                  const sectionId = item.toLowerCase();
                  return (
                    <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={item} href={`#${sectionId}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400 transition-all">
                      {t.nav[sectionId] || item}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 text-center relative z-30 pt-36 pb-32 md:pt-40 md:pb-24"> 
        <div className="max-w-5xl mx-auto">
          
          {/* Profile Picture */}
          <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="mb-8 relative group inline-block">
            <div className="relative w-36 h-36 md:w-52 md:h-52 mx-auto">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-lg rotate-12 opacity-30 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-cyan-500 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-emerald-500/30 animate-[spin_15s_linear_infinite]"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-zinc-800 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-shadow duration-500 bg-zinc-900 z-10">
                <img src="me1.png" alt="Profile" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {t.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 block sm:inline">Nurul Insan</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="relative inline-block group">
              <div className="relative px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-300">
                <p className="text-sm sm:text-lg md:text-xl font-medium text-zinc-300 transform skew-x-6 group-hover:skew-x-0 transition-transform duration-300">
                  <span className="typing-effect font-mono text-emerald-400">{t.role}</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center mt-12 items-center w-full">
            <a href="#project" className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-bold rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40">
              {t.viewProjects}
            </a>
            
            <div className="relative cv-dropdown w-full sm:w-auto z-50">
              <button onClick={toggleCVDropdown} className="w-full px-8 py-3.5 bg-transparent text-white font-bold rounded-full border border-white/20 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all flex justify-center items-center gap-2 group relative z-10">
                {t.downloadCV}
                <svg className={`w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-transform duration-300 group-hover:translate-y-1 ${isCVDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <AnimatePresence>
                {isCVDropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full mt-3 w-full sm:w-60 left-0 sm:left-1/2 sm:-translate-x-1/2 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2 z-[100]">
                    <a href="/CV ind_Nurul Insan.pdf" download className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-500/20 text-zinc-300 hover:text-white transition-colors">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">ID</span> 
                      <span className="text-sm font-medium">{t.idFormat}</span>
                    </a>
                    <a href="/CV eng_Nurul Insan.pdf" download className="flex items-center gap-3 px-5 py-3 hover:bg-blue-500/20 text-zinc-300 hover:text-white transition-colors">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">EN</span> 
                      <span className="text-sm font-medium">{t.enFormat}</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SVG Wave Bawah Halus (Warna Putih menuju About) */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[130px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <style>{`
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #34d399 } }
        .typing-effect { display: inline-block; overflow: hidden; border-right: 2px solid #34d399; white-space: nowrap; animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite; }
      `}</style>
    </section>
  )
}

export default Hero;