import React, { useState, useEffect } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaTrophy, FaBook, FaStar, FaMapMarkerAlt } from "react-icons/fa"

const Education = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

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
          level: "Bachelor's Degree",
          institution: "Andalas University",
          period: "2021 - 2025",
          location: "Padang, West Sumatra",
          major: "Information Systems",
          gpa: "3.78",
          icon: (<img src="unand.png" alt="Unand" className="w-full h-full object-contain"/>),
          // Warna teks disesuaikan agar kontras di atas putih
          color: "text-emerald-600",
          bgIcon: "bg-emerald-50",
          border: "border-emerald-500",
          shadow: "shadow-emerald-500/20"
        },
        {
          id: 2,
          level: "Senior High School",
          institution: "SMA N 1 Bukittinggi",
          period: "2018 - 2021",
          location: "Bukittinggi, West Sumatra",
          major: "Science (IPA)",
          icon: <FaBook className="w-6 h-6" />,
          color: "text-blue-600",
          bgIcon: "bg-blue-50",
          border: "border-blue-500",
          shadow: "shadow-blue-500/20"
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
          level: "Sarjana (S1)",
          institution: "Universitas Andalas",
          period: "2021 - 2025",
          location: "Padang, Sumatera Barat",
          major: "Sistem Informasi",
          gpa: "3.78",
          icon: (<img src="unand.png" alt="Unand" className="w-full h-full object-contain"/>),
          color: "text-emerald-600",
          bgIcon: "bg-emerald-50",
          border: "border-emerald-500",
          shadow: "shadow-emerald-500/20"
        },
        {
          id: 2,
          level: "Sekolah Menengah Atas",
          institution: "SMA N 1 Bukittinggi",
          period: "2018 - 2021",
          location: "Bukittinggi, Sumatera Barat",
          major: "IPA (Ilmu Pengetahuan Alam)",
          icon: <FaBook className="w-6 h-6" />,
          color: "text-blue-600",
          bgIcon: "bg-blue-50",
          border: "border-blue-500",
          shadow: "shadow-blue-500/20"
        }
      ]
    }
  }

  const currentTranslations = translations[language]
  const educationData = currentTranslations.educationData

  return (
    // 1. Background Utama: Hitam Pekat
    <section id="education" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* 2. Background Color Mix (Campuran Warna Menarik) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blob Utama (Emerald) */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        {/* Gradient Blob Sekunder (Cyan/Blue) */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>
        {/* Aksen Tengah (Ungu/Violet) untuk kedalaman */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]"></div>
        
        {/* Noise Texture overlay agar terlihat pro */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section (Teks Putih di Background Hitam) */}
        <div className={`flex flex-col items-start mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {currentTranslations.title}<span className="text-emerald-400">.</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Education Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                // 3. CARD PUTIH SOLID (bg-white)
                // Memberikan kontras tinggi terhadap background hitam
                className={`group relative bg-white rounded-2xl p-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] shadow-lg`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: isVisible ? 'slideRight 0.8s ease-out forwards' : 'none',
                  opacity: 0 
                }}
                onMouseEnter={() => setActiveCard(edu.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Border Gradient Halus saat Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>

                <div className="relative z-10 bg-white rounded-xl p-6 md:p-8 h-full flex flex-col md:flex-row gap-6 items-start border border-gray-100">
                  
                  {/* Icon Box */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 rounded-2xl ${edu.bgIcon} border border-zinc-100 flex items-center justify-center text-2xl ${edu.color} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                      {edu.icon}
                    </div>
                    
                    {/* Timeline Line (Garis Penghubung) */}
                    {index !== educationData.length - 1 && (
                       <div className="hidden md:block w-0.5 h-24 bg-gradient-to-b from-gray-200 to-transparent mx-auto mt-4"></div>
                    )}
                  </div>

                  {/* Content (Teks Gelap di Card Putih) */}
                  <div className="flex-grow space-y-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                          {edu.level}
                        </h3>
                        <p className={`text-lg font-medium ${edu.color} mt-1`}>
                          {edu.institution}
                        </p>
                      </div>
                      {/* Badge Tahun */}
                      <div className="flex items-center text-xs font-bold text-white bg-zinc-900 px-4 py-1.5 rounded-full shadow-md group-hover:bg-emerald-500 transition-colors">
                        <FaCalendarAlt className="mr-2" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-zinc-500">
                       <FaMapMarkerAlt className="mr-2 text-zinc-400" />
                       {edu.location}
                    </div>
                    
                    {/* Divider */}
                    <div className="h-px w-full bg-gray-100 my-4"></div>

                    <div className="flex flex-wrap gap-4">
                      {edu.major && (
                        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 group-hover:border-emerald-200 transition-colors">
                          <FaBook className="text-emerald-500 text-sm" />
                          <span className="text-sm text-zinc-600">
                            <span className="text-zinc-400 mr-1 font-semibold">{currentTranslations.major}:</span> 
                            {edu.major}
                          </span>
                        </div>
                      )}
                      
                      {edu.gpa && (
                        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 group-hover:border-yellow-200 transition-colors">
                          <FaStar className="text-yellow-500 text-sm" />
                          <span className="text-sm text-zinc-600">
                            <span className="text-zinc-400 mr-1 font-semibold">{currentTranslations.gpa}:</span> 
                            <span className="font-bold text-zinc-900">{edu.gpa}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Photo */}
          <div className={`lg:col-span-5 flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
             <div className="relative w-full max-w-md group">
                {/* Frame Glow Effect untuk Foto */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-purple-600 rounded-2xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                
                {/* Photo Container - Tetap Gelap agar menyatu dengan background tapi punya border tegas */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-sm">
                   <img 
                      src="me6.jpg" 
                      alt="Graduation" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                   />
                   
                   {/* Overlay Info */}
                   <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm mb-2">
                            <FaGraduationCap />
                            <span className="tracking-wider">CLASS OF 2025</span>
                         </div>
                         <p className="text-white font-bold text-2xl leading-tight">Universitas Andalas</p>
                         <p className="text-gray-400 text-sm mt-1">Padang, Indonesia</p>
                      </div>
                   </div>
                </div>

                {/* Floating Badges (Dark Mode style to match photo frame) */}
                <div className="absolute -top-6 -right-6 bg-zinc-900 border border-emerald-500/50 p-4 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-float">
                   <FaTrophy className="text-yellow-400 text-2xl" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-zinc-900 border border-cyan-500/50 p-4 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-float-delayed">
                   <FaStar className="text-emerald-400 text-2xl" />
                </div>
             </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default Education