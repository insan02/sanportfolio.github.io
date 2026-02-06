import React, { useState, useEffect } from 'react'

const Projects = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const translations = {
    en: {
      title: "Projects",
      keyFeatures: "Key Features",
      technologiesUsed: "Tech Stack",
      screenshots: "Project Gallery",
      viewDetails: "View Details",
      view: "View",
      projects: [
        {
          id: 1,
          title: "Correspondence Information System for BEM-HIMA Andalas University",
          shortTitle: "Correspondence System",
          category: "Academic Project",
          description: "Developed a comprehensive digital solution to optimize correspondence administration management for student organizations at Andalas University. This system addresses critical challenges in manual administrative processes, including document loss and recording inaccuracies.",
          image: "sssurat.png",
          screenshots: ["sssurat1.png", "sssurat2.png", "sssurat3.png"],
          technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML", "CSS"],
          features: [
            "Digital management of incoming/outgoing mail", 
            "Organized digital archive storage", 
            "Role-based access control (RBAC)", 
            "User-friendly dashboard for administrators"
          ]
        },
        {
          id: 2,
          title: "Decision Support System for Eyeglass Frame Selection (SMART Method)",
          shortTitle: "Eyeglass Selection DSS",
          category: "Thesis Project",
          description: "Developed an intelligent decision support system for eyeglass frame selection at Sidi Pingai Eyeglass Store using Profile Matching and SMART methods. This innovative system enhances customer experience by providing personalized product recommendations.",
          image: "ssspk.jpg",
          screenshots: ["ssspk1.jpg", "ssspk2.jpg", "ssspk3.jpg"],
          technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "DSS"],
          features: [
            "Profile Matching Algorithm implementation", 
            "SMART Method for multi-criteria analysis", 
            "Customer preference analysis", 
            "Interactive recommendation interface"
          ]
        },
        {
          id: 3,
          title: "Official Website of Nagari Siguntur",
          shortTitle: "Nagari Siguntur Website",
          category: "Lecturer Dedication",
          description: "Developed the official website for Nagari Siguntur using WordPress to support village administration and enhance community engagement through digital transformation. This platform serves as a centralized information hub for residents and visitors.",
          image: "sssiguntur1.png",
          screenshots: ["sssiguntur1.png", "sssiguntur2.png"],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript", "HTML"],
          features: [
            "Responsive village information portal", 
            "News and announcement system", 
            "Community engagement features", 
            "Administrative document management"
          ]
        },
        {
          id: 4,
          title: "SPPD (Official Travel Order) Web Application",
          shortTitle: "SPPD System",
          category: "Intern Project",
          description: "Developed at LLDIKTI Region X to manage official travel orders using Laravel framework.",
          image: "sslldikti1.png",
          screenshots: ["sslldikti1.png", "sslldikti2.png"],
          technologies: ["PHP", "Laravel", "MySQL", "UI/UX Design"],
          features: [
            "Travel order management workflow",
            "Responsive UI/UX design",
            "System testing and implementation"
          ]
        },
        
      ]
    },
    id: {
      title: "Proyek",
      keyFeatures: "Fitur Utama",
      technologiesUsed: "Teknologi",
      screenshots: "Galeri Proyek",
      viewDetails: "Lihat Detail",
      view: "Lihat",
      projects: [
        {
          id: 1,
          title: "Sistem Informasi Persuratan untuk BEM-HIMA Universitas Andalas",
          shortTitle: "Sistem Persuratan",
          category: "Proyek Akademik",
          description: "Mengembangkan solusi digital komprehensif untuk mengoptimalkan manajemen administrasi persuratan organisasi mahasiswa. Sistem ini mengatasi tantangan kritis dalam proses manual seperti kehilangan dokumen dan ketidakakuratan pencatatan.",
          image: "sssurat.png",
          screenshots: ["sssurat1.png", "sssurat2.png", "sssurat3.png"],
          technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML", "CSS"],
          features: [
            "Manajemen surat masuk & keluar digital", 
            "Penyimpanan arsip terpusat", 
            "Manajemen hak akses pengguna", 
            "Dashboard admin yang intuitif"
          ]
        },
        {
          id: 2,
          title: "Sistem Pendukung Keputusan Pemilihan Frame Kacamata (Metode SMART)",
          shortTitle: "SPK Frame Kacamata",
          category: "Proyek Skripsi",
          description: "Sistem pendukung keputusan cerdas untuk pemilihan frame kacamata menggunakan metode Profile Matching dan SMART. Sistem ini meningkatkan pengalaman pelanggan dengan memberikan rekomendasi produk yang dipersonalisasi berdasarkan preferensi.",
          image: "ssspk.jpg",
          screenshots: ["ssspk1.jpg", "ssspk2.jpg", "ssspk3.jpg"],
          technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "SPK"],
          features: [
            "Implementasi Algoritma Profile Matching", 
            "Analisis multi-kriteria metode SMART", 
            "Analisis preferensi pelanggan", 
            "Antarmuka rekomendasi interaktif"
          ]
        },
        {
          id: 3,
          title: "Website Resmi Nagari Siguntur",
          shortTitle: "Website Nagari Siguntur",
          category: "Pengabdian Dosen",
          description: "Mengembangkan website resmi Nagari Siguntur menggunakan WordPress untuk mendukung administrasi nagari serta meningkatkan keterlibatan masyarakat melalui transformasi digital. Platform ini berfungsi sebagai pusat informasi terpadu bagi warga dan pengunjung.",
          image: "sssiguntur1.png",
          screenshots: ["sssiguntur1.png", "sssiguntur2.png"],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript", "HTML"],
          features: [
            "Portal informasi nagari yang responsif",
            "Sistem berita dan pengumuman",
            "Fitur keterlibatan masyarakat",
            "Manajemen dokumen administrasi"
          ]
        },
        {
          id: 4,
          title: "Aplikasi Web Surat Perintah Perjalanan Dinas (SPPD)",
          shortTitle: "Aplikasi SPPD",
          category: "Proyek Magang",
          description: "Mengembangkan aplikasi berbasis web untuk manajemen surat perintah perjalanan dinas di LLDikti Wilayah X[cite: 25, 27].",
          image: "sslldikti1.png",
          screenshots: ["sslldikti1.png", "sslldikti2.png"],
          technologies: ["PHP", "Laravel", "MySQL", "Desain UI/UX"],
          features: [
            "Mendesain dan membangun rancangan tampilan aplikasi [cite: 28]",
            "Mengembangkan sistem menggunakan framework Laravel [cite: 29]",
            "Melakukan pengujian aplikasi sebelum digunakan [cite: 30]"
          ]
        },
      ]
    }
  }

  const currentTranslations = translations[language]
  const projects = currentTranslations.projects

  const openModal = (project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return (
    <>
      {/* 1. SECTION BACKGROUND: HITAM PEKAT */}
      <section id="project" className="py-24 bg-zinc-950 relative overflow-hidden">
        
        {/* Background Accents (Gradasi Halus di belakang Hitam) */}
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

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header Section (Teks Putih di atas Hitam) */}
          <div className={`flex flex-col items-center md:items-start mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {currentTranslations.title}<span className="text-emerald-500">.</span>
              </h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                // 2. KARTU PROYEK: PUTIH (bg-white) 
                // Memberikan kontras tinggi terhadap section hitam
                className={`group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradasi pada gambar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Badge (Background Putih/Terang) */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-md text-emerald-600 border border-emerald-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                     <button 
                        onClick={() => openModal(project)}
                        className="bg-emerald-500 text-white font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-emerald-600 shadow-xl"
                     >
                        {currentTranslations.view}
                     </button>
                  </div>
                </div>
                
                {/* Card Content (Teks Gelap di atas Kartu Putih) */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    {/* Judul Gelap */}
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-1">
                      {project.shortTitle}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1 line-clamp-1">
                       {project.title}
                    </p>
                  </div>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Badges (Light Theme) */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs font-medium text-zinc-500 bg-zinc-100 border border-zinc-200 px-2 py-1 rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Button (Outline style untuk light card) */}
                    <button
                      onClick={() => openModal(project)}
                      className="w-full py-3 rounded-xl border border-zinc-200 text-zinc-700 font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      {currentTranslations.viewDetails}
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Mode Modal (Tetap Gelap agar fokus ke konten) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl relative">
            
            {/* Sticky Header */}
            <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-start z-20">
              <div className="pr-8">
                <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 bg-zinc-800 text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 rounded-full transition-all duration-200 flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                 
                 {/* Left: Description & Tech */}
                 <div className="lg:col-span-2 space-y-8">
                    <div>
                       <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                          Overview
                       </h4>
                       <p className="text-gray-300 leading-relaxed text-lg">
                          {selectedProject.description}
                       </p>
                    </div>

                    <div>
                       <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                          {currentTranslations.keyFeatures}
                       </h4>
                       <div className="grid sm:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature, index) => (
                             <div key={index} className="flex items-start gap-3 bg-zinc-800/50 p-3 rounded-lg border border-white/5">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className="text-gray-300 text-sm">{feature}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Right: Sidebar Info */}
                 <div className="space-y-6">
                    <div className="bg-zinc-800/50 rounded-xl p-5 border border-white/5">
                       <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                          {currentTranslations.technologiesUsed}
                       </h4>
                       <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                             <span key={index} className="bg-zinc-900 text-gray-300 px-3 py-1.5 rounded-lg text-sm border border-white/10">
                                {tech}
                             </span>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Screenshots Gallery */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-2xl">📸</span>
                  {currentTranslations.screenshots}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <div key={index} className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-800">
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <span className="text-white bg-black/50 backdrop-blur px-3 py-1 rounded-full text-sm border border-white/20">
                            View Fullscreen
                         </span>
                      </div>
                    </div>
                  ))}
                </div>
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
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </>
  )
}

export default Projects