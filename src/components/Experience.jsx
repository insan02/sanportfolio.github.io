import React, { useState, useEffect } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedScreenshot, setSelectedScreenshot] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [language, setLanguage] = useState('en') // 'en' for English, 'id' for Indonesian

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const translations = {
    en: {
      title: "Experience",
      duration: "Duration",
      screenshots: "Screenshots",
      screenshotsModal: "Screenshots",
      screenshotOf: "Screenshot {current} of {total}",
      view: "View",
      experiences: [
        {
          id: 1,
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
          screenshots: [
            "sslldikti1.png",
            "sslldikti2.png",
            "sslldikti3.png",
            "sslldikti4.png"
          ],
          companyLogo: "lldikti.png",
          color: "from-blue-500 to-indigo-600"
        }
      ]
    },
    id: {
      title: "Pengalaman Kerja",
      duration: "Durasi",
      screenshots: "Tangkapan Layar",
      screenshotsModal: "Tangkapan Layar",
      screenshotOf: "Tangkapan layar {current} dari {total}",
      view: "Lihat",
      experiences: [
        {
          id: 1,
          position: "Pengembang Website (Magang)",
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
          screenshots: [
            "sslldikti1.png",
            "sslldikti2.png",
            "sslldikti3.png",
            "sslldikti4.png"
          ],
          companyLogo: "lldikti.png",
          color: "from-blue-500 to-indigo-600"
        }
      ]
    }
  }

  const currentTranslations = translations[language]
  const experiences = currentTranslations.experiences

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en')
  }

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
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">


        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4 relative">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
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

          {/* Experience Timeline */}
          <div className="max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Line - Adjusted height */}
                <div className="absolute left-6 top-24 w-1 h-[calc(100%-6rem)] bg-gradient-to-b from-blue-400 to-purple-400 rounded-full hidden lg:block"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-3 top-20 w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg hidden lg:block animate-pulse"></div>

                {/* Experience Card */}
                <div className="lg:ml-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${exp.color} p-6 text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <img 
                              src={exp.companyLogo} 
                              alt={`${exp.company} logo`}
                              className="w-60 h-15 border-2 border-white/30 object-cover"
                            />
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold">{exp.position}</h3>
                            <p className="text-blue-100 font-medium">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-semibold">{exp.duration}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2 lg:justify-end">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">{exp.period}</span>
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">{exp.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Description */}
                    <div className="mb-8">
                      <p className="text-gray-700 text-lg leading-relaxed">{exp.description}</p>
                    </div>

                    <div className="space-y-8">
                      {/* Responsibilities */}
                      <div>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8">
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-xl font-semibold border border-blue-200 hover:scale-110 transition-transform duration-200 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Screenshots Preview */}
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📸</span>
                        {currentTranslations.screenshots}
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {exp.screenshots.map((screenshot, idx) => (
                          <div 
                            key={idx}
                            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => openScreenshots(exp, idx)}
                          >
                            <img
                              src={screenshot}
                              alt={`SPPD App Screenshot ${idx + 1}`}
                              className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                            <div className="absolute bottom-1 left-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                              {currentTranslations.view} {idx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Modal */}
      {selectedScreenshot && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-scale-in shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">{currentTranslations.screenshotsModal}</h3>
                <p className="text-blue-100">{formatScreenshotText(currentTranslations.screenshotOf, currentImageIndex + 1, selectedScreenshot.screenshots.length)}</p>
              </div>
              <button
                onClick={closeScreenshots}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[500px] bg-gray-100 flex items-center justify-center">
                <img
                  src={selectedScreenshot.screenshots[currentImageIndex]}
                  alt={`SPPD App Screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
                
                {/* Navigation Buttons */}
                {selectedScreenshot.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex gap-4 justify-center overflow-x-auto">
                  {selectedScreenshot.screenshots.map((screenshot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        idx === currentImageIndex 
                          ? 'border-blue-500 shadow-lg scale-110' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={screenshot}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        @keyframes scale-x {
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Experience