import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaBuilding, FaCheckCircle, FaCode } from 'react-icons/fa';

const Experience = ({ language }) => {
  const [activeCard, setActiveCard] = useState(null);

  const translations = {
    en: {
      title: "Experience",
      duration: "Duration",
      responsibilitiesLabel: "Key Responsibilities",
      technologiesLabel: "Technologies",
      experiences: [
        {
          id: 1,
          position: "Full Stack Developer",
          company: "PT Semen Padang",
          duration: "Present",
          period: "Jan 2026 - Now",
          location: "Padang, Indonesia",
          type: "Contract",
          responsibilities: [
            "Analyzing user needs, designing business process flows for digitization, and ensuring that the solutions developed are on target.",
            "Designing user-friendly interfaces (UI/UX) using Figma prior to the development stage.",
            "Designing and developing a PHP-based web application integrated with the company's data requirements."
          ],
          technologies: ["Figma", "UI/UX", "PHP", "Laravel", "MySQL", "Business Analysis"],
          companyLogo: "semenpadang.png",
        },
        {
          id: 2,
          position: "Programmer (Intern)",
          company: "PT Semen Padang",
          duration: "3 Months",
          period: "Oct 2025 - Dec 2025",
          location: "Padang, Indonesia",
          type: "Kemnaker Internship",
          responsibilities: [
            "Analyzing user requirements and designing business process flows for digitization, ensuring that the solutions developed are on target.",
            "Designing user-friendly interfaces (UI/UX) using Figma prior to the development stage.",
            "Designing and developing PHP-based web applications integrated with company data requirements.",
            "Processing and analyzing data using Microsoft Excel."
          ],
          technologies: ["Figma", "UI/UX", "PHP", "Laravel", "MySQL", "Excel"],
          companyLogo: "semenpadang.png",
        },
        {
          id: 3,
          position: "WordPress Developer",
          company: "Nagari Siguntur",
          duration: "2 Months",
          period: "Oct 2024 - Nov 2024",
          location: "Pesisir Selatan, West Sumatra",
          type: "Lecturer Dedication",
          responsibilities: [
            "Developed the official website of Nagari Siguntur based on WordPress.",
            "Designed and built website layout and page structure.",
            "Implemented systems to support nagari administration and community engagement.",
            "Conducted implementation and testing of the website before deployment."
          ],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
          companyLogo: "siguntur.png",
        },
        {
          id: 4,
          position: "Full Stack Developer (Intern)",
          company: "LLDIKTI X Padang",
          duration: "1 Month",
          period: "Jan 2024 - Feb 2024",
          location: "West Sumatra, Indonesia",
          type: "Internship",
          responsibilities: [
            "Developed SPPD (Official Travel Order) web application.",
            "Designed and built application display layouts.",
            "Used PHP programming language and Laravel framework.",
            "Performed application testing."
          ],
          technologies: ["Figma", "UI/UX", "PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
          companyLogo: "lldikti.png",
        }
      ]
    },
    id: {
      title: "Pengalaman Kerja",
      duration: "Durasi",
      responsibilitiesLabel: "Tanggung Jawab Utama",
      technologiesLabel: "Teknologi",
      experiences: [
        {
          id: 1,
          position: "Full Stack Developer",
          company: "PT Semen Padang",
          duration: "Sekarang",
          period: "Jan 2026 - Sekarang",
          location: "Padang, Indonesia",
          type: "Kontrak",
          responsibilities: [
            "Menganalisis kebutuhan pengguna, merancang alur proses bisnis untuk didigitalisasi, dan memastikan solusi yang dibangun tepat sasaran.",
            "Mendesain antarmuka (UI/UX) yang user-friendly menggunakan Figma sebelum tahap pengembangan.",
            "Merancang dan mengembangkan aplikasi web berbasis PHP yang terintegrasi dengan kebutuhan data perusahaan."
          ],
          technologies: ["Figma", "UI/UX", "PHP", "Laravel", "MySQL", "Analisis Bisnis"],
          companyLogo: "semenpadang.png",
        },
        {
          id: 2,
          position: "Programmer (Magang)",
          company: "PT Semen Padang",
          duration: "3 Bulan",
          period: "Okt 2025 - Des 2025",
          location: "Padang, Indonesia",
          type: "Magang Kemnaker",
          responsibilities: [
            "Menganalisis kebutuhan pengguna (user requirements) dan merancang alur proses bisnis untuk didigitalisasi, memastikan solusi yang dibangun tepat sasaran.",
            "Mendesain antarmuka (UI/UX) yang user-friendly menggunakan Figma sebelum tahap pengembangan.",
            "Merancang dan mengembangkan aplikasi web berbasis PHP yang terintegrasi dengan kebutuhan data perusahaan.",
            "Melakukan pengolahan dan analisis data menggunakan Microsoft Excel."
          ],
          technologies: ["Figma", "UI/UX", "PHP", "Laravel", "MySQL", "Excel"],
          companyLogo: "semenpadang.png",
        },
        {
          id: 3,
          position: "WordPress Developer",
          company: "Nagari Siguntur",
          duration: "2 Bulan",
          period: "Okt 2024 - Nov 2024",
          location: "Pesisir Selatan, Sumatera Barat",
          type: "Pengabdian Dosen",
          responsibilities: [
            "Mengembangkan website resmi Nagari Siguntur berbasis WordPress.",
            "Mendesain dan membangun tampilan serta struktur halaman website.",
            "Menerapkan sistem untuk mendukung administrasi nagari dan keterlibatan masyarakat.",
            "Melakukan implementasi dan uji coba website sebelum digunakan."
          ],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
          companyLogo: "siguntur.png",
        },
        {
          id: 4,
          position: "Full Stack Developer (Magang)",
          company: "LLDIKTI X Padang",
          duration: "1 Bulan",
          period: "Jan 2024 - Feb 2024",
          location: "Sumatera Barat, Indonesia",
          type: "Magang",
          responsibilities: [
            "Mengembangkan aplikasi web SPPD (Surat Perintah Perjalanan Dinas).",
            "Mendesain dan membangun rancangan tampilan aplikasi.",
            "Menggunakan bahasa pemrograman PHP dan framework laravel.",
            "Melakukan pengujian/uji coba aplikasi sebelum digunakan."
          ],
          technologies: ["Figma", "UI/UX", "PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
          companyLogo: "lldikti.png",
        }
      ]
    }
  };

  const currentTranslations = translations[language];
  const experiences = currentTranslations.experiences;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="experience" className="pt-32 pb-24 bg-[#f8fafc] relative overflow-hidden">
      
      {/* SVG Wave Atas Halus (Dari Education Hitam ke Experience Putih) */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none rotate-180">
        <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#09090b" d="M0,96L120,117.3C240,139,480,181,720,186.7C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-0 w-[700px] h-[700px] bg-emerald-100/60 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
            {currentTranslations.title}<span className="text-emerald-500">.</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto relative">
          
          <div className="absolute left-[1.3rem] md:left-10 top-4 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-300 to-transparent rounded-full hidden sm:block opacity-30"></div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {experiences.map((exp, index) => (
              <motion.div variants={itemVariants} key={exp.id} className="relative mb-12 md:mb-16 group" onMouseEnter={() => setActiveCard(exp.id)} onMouseLeave={() => setActiveCard(null)}>
                
                <div className={`absolute left-[0.8rem] md:left-[2.1rem] top-8 w-5 h-5 rounded-full border-4 border-white shadow-md hidden sm:block z-20 transition-all duration-500 ${activeCard === exp.id ? 'bg-emerald-500 scale-150 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-emerald-300'}`}></div>

                <div className="sm:ml-12 md:ml-24 relative">
                  <div className="bg-white rounded-[2rem] border border-zinc-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/5 hover:border-emerald-200 p-6 md:p-8 lg:p-10 z-10 relative">
                    
                    <div className="flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between mb-8">
                      <div className="flex flex-col sm:flex-row items-start gap-5">
                        
                        <div className="bg-white p-2 rounded-2xl h-16 w-16 md:h-20 md:w-20 flex items-center justify-center flex-shrink-0 shadow-sm border border-zinc-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                          <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-contain p-1" />
                        </div>
                        
                        <div>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-1 group-hover:text-emerald-600 transition-colors">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-lg text-emerald-600 font-bold mb-2"><FaBuilding className="text-sm" /> {exp.company}</div>
                          <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium"><FaMapMarkerAlt className="text-emerald-500" />{exp.location}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end shrink-0">
                        <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full text-white text-xs font-bold shadow-sm"><FaBriefcase className="text-emerald-400" />{exp.duration}</div>
                        <div className="flex gap-2 mt-1">
                          <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-100">{exp.period}</span>
                          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {exp.description && (
                      <div className="mb-6 bg-zinc-50 p-4 rounded-xl border border-zinc-100 text-zinc-700 text-sm md:text-base font-medium">{exp.description}</div>
                    )}

                    <div className="w-full h-px bg-zinc-100 my-6"></div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                      
                      <div>
                        <h4 className="text-zinc-900 font-bold mb-4 flex items-center gap-2 text-lg"><span className="p-1.5 rounded-md bg-emerald-100 text-emerald-600"><FaCheckCircle className="w-4 h-4" /></span> {currentTranslations.responsibilitiesLabel}</h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-zinc-600 text-sm md:text-base"><span className="text-emerald-500 mt-1 flex-shrink-0">•</span><span className="leading-relaxed">{resp}</span></li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-zinc-900 font-bold mb-4 flex items-center gap-2 text-lg"><span className="p-1.5 rounded-md bg-blue-100 text-blue-600"><FaCode className="w-4 h-4" /></span> {currentTranslations.technologiesLabel}</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-white text-zinc-600 px-3 py-1.5 rounded-lg text-sm font-medium border border-zinc-200 shadow-sm hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-default">{tech}</span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;