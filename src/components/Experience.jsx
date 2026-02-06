import React, { useState, useEffect } from 'react'

// 1. Terima 'language' dari props (Hapus state lokal)
const Experience = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedScreenshot, setSelectedScreenshot] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const translations = {
    en: {
      title: "Experience",
      duration: "Duration",
      screenshots: "Project Screenshots",
      screenshotsModal: "Gallery View",
      screenshotOf: "Image {current} of {total}",
      view: "View",
      experiences: [
        {
          id: 1,
          position: "Full Stack Developer",
          company: "PT Semen Padang",
          duration: "Present",
          period: "Jan 2026 - Now",
          location: "Padang, Indonesia",
          type: "Outsourcing (PT Putri Teratai)",
          description: "Working in the Management System Unit to digitize business processes and develop integrated web applications.",
          responsibilities: [
            "Analyze user needs and design business process flows for digitalization",
            "Design user-friendly interfaces (UI/UX) using Figma before development",
            "Develop PHP-based web applications integrated with company data needs"
          ],
          technologies: ["PHP", "Laravel", "MySQL", "Figma", "Business Analysis"],
          companyLogo: "semenpadang.png"
        },
        {
          id: 2,
          position: "Programmer (Intern Kemnaker)",
          company: "PT Semen Padang",
          duration: "3 Months",
          period: "Oct 2025 - Dec 2025",
          location: "Padang, Indonesia",
          type: "Kemnaker Internship",
          description: "Developed low-code and web applications within the Management System Unit.",
          responsibilities: [
            "Developed low-code applications using Microsoft Power Apps and PHP",
            "Processed and analyzed data using Microsoft Excel",
            "Collaborated with the team in IT solution implementation"
          ],
          technologies: ["Power Apps", "PHP", "Excel", "Web Development"],
          companyLogo: "semenpadang.png"
        },
        {
          id: 3,
          position: "Website Developer (Intern)",
          company: "LLDIKTI X Padang",
          duration: "1 Month",
          period: "2024",
          location: "West Sumatra, Indonesia",
          type: "Internship",
          description: "Developed a comprehensive web application for SPPD (Official Travel Order) management system that streamlines the process of creating, approving, and tracking official travel requests within the institution.",
          responsibilities: [
            "Designed and developed an advanced SPPD web application",
            "Designed and created a responsive user interface (UI/UX)",
            "Conducted testing on the developed application",
            "Collaborated with team members in system requirements analysis"
          ],
          technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
          companyLogo: "lldikti.png",
        },
        {
          id: 4,
          position: "WordPress Developer (Lecturer Dedication)",
          company: "Nagari Siguntur Pesisir Selatan",
          duration: "2 Months",
          period: "Oct 2024 - Nov 2024",
          location: "Pesisir Selatan, West Sumatra, Indonesia",
          type: "Lecturer Dedication",
          description: "Developed the official website of Nagari Siguntur based on WordPress to support village administration and enhance community engagement through digital transformation.",
          responsibilities: [
            "Developed the official website of Nagari Siguntur based on WordPress",
            "Designed and built website layout and page structure",
            "Implemented systems to support nagari administration and community engagement",
            "Conducted implementation and testing of the website before deployment"
          ],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript", "HTML"],
          companyLogo: "siguntur.png",
        }
      ]
    },
    id: {
      title: "Pengalaman Kerja",
      duration: "Durasi",
      screenshots: "Tangkapan Layar",
      screenshotsModal: "Galeri Proyek",
      screenshotOf: "Gambar {current} dari {total}",
      view: "Lihat",
      experiences: [
        {
        id: 1,
        position: "Full Stack Developer",
        company: "PT Semen Padang",
        duration: "Sekarang",
        period: "Jan 2026 - Sekarang",
        location: "Padang, Indonesia",
        type: "Full-time (Outsourcing)",
        description: "Ditempatkan di Unit Sistem Manajemen melalui PT Putri Teratai untuk mendorong transformasi digital dan optimalisasi proses bisnis.",
        responsibilities: [
          "Menganalisis kebutuhan pengguna dan merancang alur proses bisnis untuk didigitalisasi",
          "Mendesain antarmuka (UI/UX) yang user-friendly menggunakan Figma sebelum tahap pengembangan ",
          "Merancang dan mengembangkan aplikasi web berbasis PHP yang terintegrasi dengan kebutuhan data perusahaan"
        ],
        technologies: ["PHP", "Laravel", "MySQL", "Figma", "Analisis Bisnis"],
        companyLogo: "semenpadang.png",
      },
      {
        id: 2,
        position: "Programmer (Magang Kemnaker)",
        company: "PT Semen Padang",
        duration: "3 Bulan",
        period: "Okt 2025 - Des 2025",
        location: "Padang, Indonesia",
        type: "Magang",
        description: "Mengikuti program Magang Kemnaker di Unit Sistem Manajemen PT Semen Padang.",
        responsibilities: [
          "Mempelajari dan mengembangkan aplikasi low-code menggunakan Microsoft Power Apps dan PHP",
          "Mengolah dan menganalisis data menggunakan Microsoft Excel",
          "Berkolaborasi dengan tim dalam implementasi solusi teknologi informasi"
        ],
        technologies: ["PHP", "Power Apps", "Microsoft Excel"],
        companyLogo: "semenpadang.png",
      },
        {
          id: 3,
          position: "Full Stack Developer (Magang)",
          company: "LLDIKTI X Padang",
          duration: "1 Bulan",
          period: "2024",
          location: "Sumatera Barat, Indonesia",
          type: "Magang",
          description: "Mengembangkan aplikasi web komprehensif untuk sistem manajemen SPPD (Surat Perintah Perjalanan Dinas) yang merampingkan proses pembuatan, persetujuan, dan pelacakan permintaan perjalanan dinas dalam institusi.",
          responsibilities: [
            "Merancang dan mengembangkan aplikasi web SPPD lanjutan",
            "Merancang dan membuat antarmuka pengguna yang responsif (UI/UX)",
            "Melakukan pengujian pada aplikasi yang dikembangkan",
            "Berkolaborasi dengan anggota tim dalam analisis kebutuhan sistem"
          ],
          technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
          companyLogo: "lldikti.png",
        },
        {
          id: 4,
          position: "WordPress Developer (Pengabdian Dosen)",
          company: "Nagari Siguntur Pesisir Selatan",
          duration: "2 Bulan",
          period: "Okt 2024 - Nov 2024",
          location: "Pesisir Selatan, Sumatera Barat, Indonesia",
          type: "Pengabdian Dosen",
          description: "Mengembangkan website resmi Nagari Siguntur berbasis WordPress untuk mendukung administrasi nagari dan meningkatkan keterlibatan masyarakat melalui transformasi digital.",
          responsibilities: [
            "Mengembangkan website resmi Nagari Siguntur berbasis WordPress",
            "Mendesain dan membangun tampilan serta struktur halaman website",
            "Menerapkan sistem untuk mendukung administrasi nagari dan keterlibatan masyarakat",
            "Melakukan implementasi dan uji coba website sebelum digunakan"
          ],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript", "HTML"],
          companyLogo: "siguntur.png",
        }
      ]
    }
  }

  const currentTranslations = translations[language]
  const experiences = currentTranslations.experiences

  const openScreenshots = (experience, index = 0) => {
    setSelectedScreenshot(experience)
    setCurrentImageIndex(index)
  }

  const closeScreenshots = () => {
    setSelectedScreenshot(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedScreenshot.screenshots.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedScreenshot.screenshots.length - 1 : prev - 1
    )
  }

  const formatScreenshotText = (template, current, total) => {
    return template.replace('{current}', current).replace('{total}', total)
  }

  return (
    <>
      {/* 2. Background Terang (White) */}
      {/* Background dengan Gradasi Lebih Kaya */}
      <section id="experience" className="py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-white relative overflow-hidden">

        {/* Kombinasi Gradasi Warna Dinamis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Emerald Gradient Blob */}
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-emerald-200/40 via-emerald-100/30 to-transparent rounded-full blur-[120px]"></div>
          {/* Blue Gradient Blob */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-200/40 via-blue-100/30 to-transparent rounded-full blur-[120px]"></div>
          {/* Teal Accent */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-[100px]"></div>
          {/* Purple Accent */}
          <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className={`flex flex-col items-start mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
              {currentTranslations.title}<span className="text-emerald-500">.</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-6 top-20 bottom-0 w-0.5 bg-zinc-200 hidden lg:block"></div>
                
                {/* Timeline Dot (Emerald) */}
                <div className="absolute left-2 md:left-4 top-20 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full shadow-md hidden lg:block z-20"></div>

                {/* Experience Card */}
                <div className="lg:ml-20 group relative">
                  
                  {/* 4. Kartu Putih dengan Gradasi Halus & Shadow */}
                  <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.15)] hover:border-emerald-200 hover:-translate-y-1">
                    
                    {/* Card Header (Gradient Background Ringan) */}
                    <div className="p-6 md:p-8 bg-gradient-to-r from-zinc-50 to-white border-b border-zinc-100">
                      <div className="flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between">
                        
                        {/* Logo & Title */}
                        <div className="flex items-start gap-5">
                          <div className="bg-white p-2 rounded-xl h-16 w-16 flex items-center justify-center flex-shrink-0 shadow-sm border border-zinc-100">
                             <img 
                                src={exp.companyLogo} 
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain"
                              />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-1 group-hover:text-emerald-600 transition-colors">{exp.position}</h3>
                            <p className="text-lg text-emerald-600 font-medium">{exp.company}</p>
                            <div className="flex items-center gap-2 text-sm text-zinc-500 mt-1">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                               {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        {/* Metadata Badges */}
                        <div className="flex flex-wrap gap-3 lg:justify-end lg:flex-col lg:items-end lg:gap-2">
                           <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm shadow-sm">
                              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>{exp.duration}</span>
                           </div>
                           <div className="flex gap-2">
                              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">{exp.period}</span>
                              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">{exp.type}</span>
                           </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 md:p-8">
                      {/* Description */}
                      <div className="mb-8">
                        <p className="text-zinc-600 text-lg leading-relaxed">{exp.description}</p>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-zinc-900 font-bold mb-4 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                             Key Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-zinc-600 text-sm">
                                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                           <h4 className="text-zinc-900 font-bold mb-4 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                             Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="bg-white hover:bg-emerald-50 hover:text-emerald-700 text-zinc-600 px-3 py-2 rounded-lg text-sm border border-zinc-200 hover:border-emerald-200 transition-all duration-300 cursor-default shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Screenshots Preview */}
                      <div className="mt-8 pt-8 border-t border-zinc-100">
                        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="text-lg">📸</span> {currentTranslations.screenshots}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {exp.screenshots.map((screenshot, idx) => (
                            <div 
                              key={idx}
                              className="group/img relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 cursor-pointer shadow-sm hover:shadow-md transition-all"
                              onClick={() => openScreenshots(exp, idx)}
                            >
                              <img
                                src={screenshot}
                                alt={`Screenshot ${idx + 1}`}
                                className="w-full h-24 object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500"
                              />
                              <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0">
                                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                                   <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Gallery (Tetap Gelap untuk Fokus Maksimal) */}
      {selectedScreenshot && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-scale-in">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-zinc-900">
              <div>
                 <h3 className="text-lg font-bold text-white">{selectedScreenshot.position}</h3>
                 <p className="text-sm text-gray-400">{formatScreenshotText(currentTranslations.screenshotOf, currentImageIndex + 1, selectedScreenshot.screenshots.length)}</p>
              </div>
              <button
                onClick={closeScreenshots}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Image Area */}
            <div className="flex-1 relative bg-black flex items-center justify-center p-4 min-h-[400px]">
              <img
                src={selectedScreenshot.screenshots[currentImageIndex]}
                alt="Full View"
                className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Navigation Arrows */}
              {selectedScreenshot.screenshots.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 p-3 rounded-full bg-zinc-800/50 text-white hover:bg-emerald-500 hover:text-white backdrop-blur-sm border border-white/10 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={nextImage} className="absolute right-4 p-3 rounded-full bg-zinc-800/50 text-white hover:bg-emerald-500 hover:text-white backdrop-blur-sm border border-white/10 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails Footer */}
            <div className="p-4 bg-zinc-900 border-t border-white/10 overflow-x-auto">
              <div className="flex justify-center gap-3 min-w-max">
                {selectedScreenshot.screenshots.map((screenshot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      idx === currentImageIndex 
                        ? 'border-emerald-500 opacity-100 ring-2 ring-emerald-500/20' 
                        : 'border-transparent opacity-50 hover:opacity-80 hover:border-gray-500'
                    }`}
                  >
                    <img src={screenshot} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
    </>
  )
}

export default Experience