import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const translations = {
    en: {
      title: "Projects",
      keyFeatures: "Key Features",
      technologiesUsed: "Tech Stack",
      screenshots: "Project Gallery",
      viewDetails: "View Details",
      view: "View Project",
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
        }
      ]
    },
    id: {
      title: "Proyek",
      keyFeatures: "Fitur Utama",
      technologiesUsed: "Teknologi",
      screenshots: "Galeri Proyek",
      viewDetails: "Lihat Detail",
      view: "Lihat Proyek",
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
          description: "Mengembangkan aplikasi berbasis web untuk manajemen surat perintah perjalanan dinas di LLDikti Wilayah X.",
          image: "sslldikti1.png",
          screenshots: ["sslldikti1.png", "sslldikti2.png"],
          technologies: ["PHP", "Laravel", "MySQL", "Desain UI/UX"],
          features: [
            "Mendesain dan membangun rancangan tampilan aplikasi",
            "Mengembangkan sistem menggunakan framework Laravel",
            "Melakukan pengujian aplikasi sebelum digunakan"
          ]
        },
      ]
    }
  };

  const currentTranslations = translations[language];
  const projects = currentTranslations.projects;

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
  };

  return (
    <>
      <section id="project" className="pt-32 pb-32 bg-[#09090b] relative overflow-hidden">
        
        {/* OMBAK ATAS HALUS (Menghubungkan Experience ke Projects) */}
        <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#f8fafc" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
        
        {/* Background Grid Interaktif & Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#09090b]"></div>
          <div 
            className="absolute inset-0 opacity-40" 
            style={{ 
              backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', 
              backgroundSize: '50px 50px' 
            }}
          ></div>
          
          <motion.div animate={{ x: [-30, 30, -30], y: [-30, 30, -30] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] left-[15%] w-[400px] h-[400px] bg-emerald-500/30 rounded-full blur-[100px]" />
          <motion.div animate={{ x: [30, -30, 30], y: [30, -30, 30] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 mt-10">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start mb-16 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {currentTranslations.title}<span className="text-emerald-500">.</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div 
                variants={cardVariants}
                key={project.id} 
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-500 border border-zinc-200"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden bg-zinc-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                     <button 
                        onClick={() => openModal(project)}
                        className="bg-emerald-500 text-white font-bold py-2.5 px-6 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center gap-2"
                     >
                        {currentTranslations.view}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                     </button>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-extrabold text-zinc-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-1">
                      {project.shortTitle}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold text-emerald-600/80 mt-1 line-clamp-1">
                       {project.title}
                    </p>
                  </div>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[11px] md:text-xs font-bold text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[11px] md:text-xs font-bold text-zinc-500 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => openModal(project)}
                      className="w-full py-3 rounded-xl border-2 border-zinc-100 text-zinc-700 font-bold hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      {currentTranslations.viewDetails}
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* OMBAK BAWAH HALUS (Menghubungkan Projects ke Certificate) */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg className="relative block w-full h-[70px] md:h-[130px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#f8fafc" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* MODAL: LIGHT THEME POP-OUT */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-6"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-zinc-200 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar-light"
            >
              
              {/* Sticky Header Modal Terang */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-xl border-b border-zinc-100 p-6 md:p-8 flex justify-between items-start z-20">
                <div className="pr-8">
                  <span className="inline-block bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2.5 bg-zinc-100 text-zinc-500 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-200 flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                   
                   <div className="lg:col-span-2 space-y-8">
                      <div>
                         <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                            Overview
                         </h4>
                         <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                            {selectedProject.description}
                         </p>
                      </div>

                      <div>
                         <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                            {currentTranslations.keyFeatures}
                         </h4>
                         <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                            {selectedProject.features.map((feature, index) => (
                               <div key={index} className="flex items-start gap-3 bg-zinc-50 p-4 rounded-xl border border-zinc-200 hover:border-emerald-300 transition-colors">
                                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                  <span className="text-zinc-700 text-sm md:text-base font-medium">{feature}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                         <h4 className="text-zinc-900 font-bold mb-4 flex items-center gap-2 text-lg">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                            {currentTranslations.technologiesUsed}
                         </h4>
                         <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech, index) => (
                               <span key={index} className="bg-white text-zinc-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-zinc-200 shadow-sm">
                                  {tech}
                               </span>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-200">
                  <h4 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                    <span className="text-2xl">📸</span>
                    {currentTranslations.screenshots}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div key={index} className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm">
                        <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        
        .custom-scrollbar-light::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar-light::-webkit-scrollbar-track {
          background: #f4f4f5;
          border-radius: 10px;
        }
        .custom-scrollbar-light::-webkit-scrollbar-thumb {
          background: #d4d4d8;
          border-radius: 10px;
        }
        .custom-scrollbar-light::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}</style>
    </>
  );
};

export default Projects;