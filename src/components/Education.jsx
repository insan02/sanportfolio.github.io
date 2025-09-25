import React, { useState, useEffect } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaTrophy, FaBook, FaStar } from "react-icons/fa"

const Education = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [language, setLanguage] = useState('en') // 'en' for English, 'id' for Indonesian

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const translations = {
    en: {
      title: "Education",
      major: "Major",
      gpa: "GPA",
      educationData: [
        {
          id: 1,
          level: "Senior High School",
          institution: "SMA N 1 Bukittinggi",
          period: "2018 - 2021",
          location: "Bukittinggi, West Sumatra",
          major: "Science",
          icon: <FaBook className="text-blue-500" />,
          color: "from-blue-500 to-cyan-500",
          bgColor: "from-blue-50 to-cyan-50"
        },
        {
          id: 2,
          level: "Bachelor's Degree",
          institution: "Andalas University",
          period: "2021 - 2025",
          location: "Padang, West Sumatra",
          major: "Information Systems",
          gpa: "3.78",
          icon: (<img src="unand.png" alt="Logo Universitas Andalas" className="w-10 h-10 object-contain"/>),
          color: "from-purple-500 to-indigo-500",
          bgColor: "from-purple-50 to-indigo-50"
        }
      ]
    },
    id: {
      title: "Pendidikan",
      major: "Jurusan",
      gpa: "IPK",
      educationData: [
        {
          id: 1,
          level: "Sekolah Menengah Atas",
          institution: "SMA N 1 Bukittinggi",
          period: "2018 - 2021",
          location: "Bukittinggi, Sumatera Barat",
          major: "IPA (Ilmu Pengetahuan Alam)",
          icon: <FaBook className="text-blue-500" />,
          color: "from-blue-500 to-cyan-500",
          bgColor: "from-blue-50 to-cyan-50"
        },
        {
          id: 2,
          level: "Sarjana",
          institution: "Universitas Andalas",
          period: "2021 - 2025",
          location: "Padang, Sumatera Barat",
          major: "Sistem Informasi",
          gpa: "3.78",
          icon: (<img src="unand.png" alt="Logo Universitas Andalas" className="w-10 h-10 object-contain"/>),
          color: "from-purple-500 to-indigo-500",
          bgColor: "from-purple-50 to-indigo-50"
        }
      ]
    }
  }

  const currentTranslations = translations[language]
  const educationData = currentTranslations.educationData

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-300/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
                {currentTranslations.title}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards] origin-left"></div>
              </h2>
              {/* Language Toggle Buttons */}
              <div className="flex bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg overflow-hidden">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-2 font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                    language === 'en'
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                  }`}
                >
                  <span>EN</span>
                </button>
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-2 font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                    language === 'id'
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                  }`}
                >
                  <span>ID</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Kolom kiri - Education Cards */}
            <div className="space-y-8 flex flex-col">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer flex-1 ${
                    activeCard === edu.id ? 'ring-2 ring-purple-400 scale-[1.02]' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'fadeInLeft 0.8s ease-out forwards' : 'none'
                  }}
                  onMouseEnter={() => setActiveCard(edu.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.bgColor} opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 bg-gradient-to-r ${edu.color} rounded-xl text-white text-2xl group-hover:animate-bounce`}>
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                            {edu.level}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center text-gray-600 mb-2">
                          <FaCalendarAlt className="mr-2 text-sm" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </div>
                    </div>

                    {/* Content - Flex grow to fill available space */}
                    <div className="space-y-4 flex-grow">
                      {edu.major && (
                        <div className="flex items-center space-x-2">
                          <FaBook className="text-blue-500" />
                          <span className="font-semibold text-gray-700">{currentTranslations.major}: </span>
                          <span className="text-gray-600">{edu.major}</span>
                        </div>
                      )}
                      
                      {edu.gpa && (
                        <div className="flex items-center space-x-2">
                          <FaStar className="text-yellow-500" />
                          <span className="font-semibold text-gray-700">{currentTranslations.gpa}: </span>
                          <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            {edu.gpa}
                          </span>
                        </div>
                      )}
                      
                      <p className="text-gray-600 leading-relaxed mt-4 group-hover:text-gray-700 transition-colors duration-300">
                        {edu.description}
                      </p>
                    </div>

                    {/* Progress Bar (Visual Enhancement) - Always at bottom */}
                    <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-gradient-to-r ${edu.color} h-2 rounded-full transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`}
                           style={{ animationDelay: `${index * 300}ms` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Kolom kanan - Graduation Photo */}
            <div className={`transform transition-all duration-1000 delay-600 flex ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group flex-1 flex flex-col">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce delay-500 z-10"></div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping z-10"></div>
                <div className="absolute bottom-1/4 -left-8 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce delay-1000 z-10"></div>
                
                <div className="relative w-full flex-1 overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src="me6.jpg" 
                    alt={language === 'en' ? "Graduation Photo - Nurul Insan" : "Foto Wisuda - Nurul Insan"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex flex-col items-center justify-center text-gray-500" style={{display: 'none'}}>
                    <FaGraduationCap className="text-8xl mb-6 text-purple-400" />
                    <p className="text-2xl font-semibold mb-4">
                      {language === 'en' ? 'Graduation Photo' : 'Foto Wisuda'}
                    </p>
                    <p className="text-lg text-center px-4">
                      {language === 'en' 
                        ? "Replace 'me6.jpg' with your actual photo" 
                        : "Ganti 'me6.jpg' dengan foto Anda yang sebenarnya"
                      }
                    </p>
                  </div>
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
                  
                  {/* Floating sparkle effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>

                {/* Enhanced glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

export default Education