import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleCVDropdown = () => setIsCVDropdownOpen(!isCVDropdownOpen)

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
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
    <section id="home" className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white min-h-screen relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-yellow-300/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300/10 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      {/* Header dengan warna berubah saat scroll */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white text-gray-900 shadow-lg'
            : 'bg-white/10 backdrop-blur-md text-white border-b border-white/20'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 font-medium transition-colors duration-300`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 font-medium transition-colors duration-300`}
              >
                About
              </a>
              <a
                href="#education"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 font-medium transition-colors duration-300`}
              >
                Education
              </a>
              <a
                href="#experience"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 font-medium transition-colors duration-300`}
              >
                Experience
              </a>
              <a
                href="#project"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 font-medium transition-colors duration-300`}
              >
                Project
              </a>
              <a
                href="#contact"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 font-medium transition-colors duration-300`}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden mt-3 pb-3 border-t ${isScrolled ? 'border-gray-200 bg-white' : 'border-white/20 bg-black/20 backdrop-blur-sm'} rounded-lg`}>
              <a
                href="#home"
                className={`block py-2 px-4 font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className={`block py-2 px-4 font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#education"
                className={`block py-2 px-4 font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
              <a
                href="#experience"
                className={`block py-2 px-4 font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#project"
                className={`block py-2 px-4 font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </a>
              <a
                href="#contact"
                className={`block py-2 px-4 font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Content - dengan padding top untuk header dan bottom untuk dropdown */}
      <div className="container mx-auto px-6 text-center flex items-center justify-center min-h-screen pt-20 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Enhanced Profile Photo Section */}
          <div className="mb-12 relative">            
            {/* Main photo container with enhanced effects */}
            <div className="relative w-48 h-48 mx-auto group">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-300/20 via-pink-300/20 to-blue-300/20 animate-spin-slow"></div>
              
              {/* Middle ring with dots */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-white/30 animate-reverse-spin">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-pink-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-300 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 via-pink-300/40 to-purple-300/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse-slow"></div>
              
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-4 border-white/40 overflow-hidden transform group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:shadow-yellow-300/25">
                
                {/* Photo */}
                <img 
                  src="me1.png"
                  alt="Nurul Insan Profile" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-110 contrast-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Sparkle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Floating elements around photo */}
              <div className="absolute -top-6 -right-6 w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full animate-float shadow-lg"></div>
              <div className="absolute -bottom-4 -left-6 w-4 h-4 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full animate-float-delayed shadow-lg"></div>
              <div className="absolute top-1/3 -right-8 w-3 h-3 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 -left-8 w-5 h-5 bg-gradient-to-br from-green-300 to-green-400 rounded-full animate-float-slow shadow-lg"></div>
            </div>
          </div>

          {/* Enhanced Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent animate-pulse">Nurul Insan</span>
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl mb-8 font-light text-white/90">
                <span className="typing-effect">Website Developer</span>
              </p>
            </div>
          </div>
          
          {/* Enhanced Button Section with CV Dropdown */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 relative">
            <a 
              href="#project" 
              className="group border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">My Project</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            
            {/* CV Download Dropdown */}
            <div className="relative cv-dropdown">
              <button 
                onClick={toggleCVDropdown}
                className="group border-2 border-yellow-400/60 text-yellow-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <svg className="w-5 h-5 relative z-10 group-hover:text-blue-800 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10 group-hover:text-blue-800 transition-colors duration-300">Download CV</span>
                <svg className={`w-4 h-4 relative z-10 group-hover:text-blue-800 transition-all duration-300 ${isCVDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              {/* Dropdown Menu - Positioned to prevent overflow */}
              {isCVDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl py-2 w-56 z-50">
                  <a 
                    href="/CV ind_Nurul Insan.pdf" 
                    download="CV ind_Nurul Insan.pdf"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 hover:text-blue-600"
                    onClick={() => setIsCVDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">ID</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">Bahasa Indonesia</div>
                      <div className="text-xs text-gray-500 truncate">CV_ind_Nurul Insan.pdf</div>
                    </div>
                  </a>
                  
                  <div className="mx-4 my-1 h-px bg-gray-200"></div>
                  
                  <a 
                    href="/CV eng_Nurul Insan.pdf" 
                    download="CV eng_Nurul Insan.pdf"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 hover:text-blue-600"
                    onClick={() => setIsCVDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">EN</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">English Version</div>
                      <div className="text-xs text-gray-500 truncate">CV_eng_Nurul Insan.pdf</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            
            <a 
              href="#contact" 
              className="group border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">Contact Me</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS untuk efek tambahan */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 17ch }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: white }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .typing-effect {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid white;
          white-space: nowrap;
          width: 0;
          animation: typing 3s steps(17, end) forwards,
                    blink-caret 0.75s step-end infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero