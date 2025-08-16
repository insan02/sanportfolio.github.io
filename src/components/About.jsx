import React, { useState, useEffect } from 'react'
import { FaPhp, FaLaravel, FaDatabase, FaJsSquare, FaMicrosoft } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
  { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" />, color: 'from-indigo-500 to-blue-500' },
  { name: 'Laravel', icon: <FaLaravel className="text-[#FF2D20]" />, color: 'from-red-500 to-rose-500' },
  { name: 'MySQL Database', icon: <FaDatabase className="text-[#4479A1]" />, color: 'from-teal-500 to-cyan-500' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" />, color: 'from-yellow-400 to-amber-500' },
  { name: 'Microsoft Office', icon: <FaMicrosoft className="text-[#F25022]" />, color: 'from-emerald-500 to-green-600' },
];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Judul dengan animasi */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 relative">
              About Me
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards] origin-left"></div>
            </h2>
          </div>
        </div>

        {/* Main Content - 2 Columns with Equal Height */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Kolom Foto */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 h-full flex items-center">
              <div className="flex justify-center items-center gap-4 w-full relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
                
                {/* Foto kiri */}
                <div className="group relative w-56 h-72 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:rotate-1">
                  <img 
                    src="me1.png" 
                    alt="Professional Photo Left"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent group-hover:from-blue-600/60 transition-all duration-500" />
                </div>

                {/* Foto tengah (utama) */}
                <div className="group relative w-64 h-80 overflow-hidden rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-500 z-10">
                  <img 
                    src="me3.png" 
                    alt="Main Professional Photo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 via-transparent to-transparent group-hover:from-indigo-600/60 transition-all duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                </div>

                {/* Foto kanan */}
                <div className="group relative w-56 h-72 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 hover:-rotate-1">
                  <img 
                    src="me2.png" 
                    alt="Professional Photo Right"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent group-hover:from-purple-600/60 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Teks */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center">
              <div className="space-y-6">
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I am a <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fresh Graduate</span> from Andalas University majoring in Information Systems with a great passion for building a career in the information technology field. During my studies, I was actively involved in student organizations as a <span className="font-semibold text-indigo-600">GIS Laboratory Assistant</span>.
                  </p>
                </div>

                <div className="transform hover:translate-x-2 transition-transform duration-300 delay-100">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I also served as <span className="font-semibold text-purple-600">General Secretary of FSI FTI UNAND</span>, balancing organizational responsibilities while maintaining focus on studies, graduating on time with a <span className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">GPA of 3.78</span>.
                  </p>
                </div>

                <div className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I have internship experience at <span className="font-semibold text-blue-600">LLDIKTI Region X Padang</span> as a Programmer, developing SPPD applications. I'm seeking opportunities to contribute further to the IT industry.
                  </p>
                </div>

                {/* Contact CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Let's connect and build something amazing together!
                  </p>
                  <div className="flex gap-4">
                    {/* Contact Me Button */}
                    <button 
                      onClick={scrollToContact}
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {/* Contact Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 mr-2" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Contact Me
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills - Single Row with 6 Columns */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
            <h4 className="font-bold text-gray-800 mb-8 text-2xl flex items-center justify-center">
              <span className="mr-3 text-3xl">🚀</span>
              My Skills
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group relative bg-white p-6 rounded-xl font-semibold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-md hover:shadow-xl flex flex-col items-center justify-center text-center min-h-[120px]`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-3xl mb-3 group-hover:animate-bounce flex items-center justify-center">{skill.icon}</div>
                    <div className={`text-sm transition-all duration-300 leading-tight ${hoveredSkill === skill.name ? 'text-transparent bg-gradient-to-r ' + skill.color + ' bg-clip-text font-bold' : ''}`}>
                      {skill.name}
                    </div>
                  </div>
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}

export default About