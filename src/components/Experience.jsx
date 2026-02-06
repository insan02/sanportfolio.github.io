import React, { useState, useEffect } from 'react'

const Experience = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const translations = {
    en: {
      title: "Experience",
      duration: "Duration",
      experiences: [
        {
          id: 1,
          position: "Full Stack Developer",
          company: "PT Semen Padang",
          duration: "Present",
          period: "Jan 2026 - Now",
          location: "Padang, Indonesia",
          type: "Outsourcing (PT Putri Teratai)",
          description: "Assigned to the Management System Unit to digitize business processes and develop integrated web applications[cite: 8, 9].",
          responsibilities: [
            "Analyze user needs and design business process flows for digitalization [cite: 10]",
            "Design user-friendly interfaces (UI/UX) using Figma before development [cite: 11]",
            "Develop PHP-based web applications integrated with company data needs [cite: 12]"
          ],
          technologies: ["PHP", "Laravel", "MySQL", "Figma", "Business Analysis"],
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
          description: "Developed low-code and web applications within the Management System Unit via PT Putri Teratai[cite: 14, 15].",
          responsibilities: [
            "Developed applications using Microsoft Power Apps and PHP [cite: 16]",
            "Processed and analyzed data using Microsoft Excel [cite: 17]",
            "Collaborated with the team in IT solution implementation [cite: 18]"
          ],
          technologies: ["Power Apps", "PHP", "Excel", "Web Development"],
          companyLogo: "semenpadang.png",
        },
        {
          id: 3,
          position: "Full Stack Developer (Intern)",
          company: "LLDIKTI X Padang",
          duration: "1 Month",
          period: "Jan 2024 - Feb 2024",
          location: "West Sumatra, Indonesia",
          type: "Internship",
          description: "Developed a web application for the SPPD (Official Travel Order) management system[cite: 25, 27].",
          responsibilities: [
            "Designed and built the application interface layout [cite: 28]",
            "Developed the system using PHP and Laravel framework [cite: 29]",
            "Conducted application testing prior to deployment [cite: 30]"
          ],
          technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
          companyLogo: "lldikti.png",
        },
        {
          id: 4,
          position: "WordPress Developer",
          company: "Nagari Siguntur",
          duration: "2 Months",
          period: "Oct 2024 - Nov 2024",
          location: "Pesisir Selatan, West Sumatra, Indonesia",
          type: "Community Service",
          description: "Developed the official website of Nagari Siguntur based on WordPress to support village administration[cite: 19, 21].",
          responsibilities: [
            "Designed and built website layout and page structure [cite: 22]",
            "Implemented systems to support nagari administration and community engagement [cite: 23]",
            "Conducted implementation and testing before deployment [cite: 24]"
          ],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
          companyLogo: "siguntur.png",
        }
      ]
    },
    id: {
      title: "Pengalaman Kerja",
      duration: "Durasi",
      experiences: [
        {
          id: 1,
          position: "Full Stack Developer",
          company: "PT Semen Padang",
          duration: "Sekarang",
          period: "Jan 2026 - Sekarang",
          location: "Padang, Indonesia",
          type: "Full-time (Outsourcing)",
          description: "Ditempatkan di Unit Sistem Manajemen melalui PT Putri Teratai untuk mendorong transformasi digital dan optimalisasi proses bisnis[cite: 8, 9].",
          responsibilities: [
            "Menganalisis kebutuhan pengguna dan merancang alur proses bisnis untuk didigitalisasi [cite: 10]",
            "Mendesain antarmuka (UI/UX) yang user-friendly menggunakan Figma sebelum tahap pengembangan [cite: 11]",
            "Merancang dan mengembangkan aplikasi web berbasis PHP yang terintegrasi dengan kebutuhan data perusahaan [cite: 12]"
          ],
          technologies: ["PHP", "Laravel", "MySQL", "Figma", "Analisis Bisnis"],
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
          description: "Mengembangkan aplikasi low-code dan web pada Unit Sistem Manajemen PT Semen Padang[cite: 14, 15, 16].",
          responsibilities: [
            "Mengembangkan aplikasi menggunakan Microsoft Power Apps dan PHP [cite: 16]",
            "Mengolah dan menganalisis data menggunakan Microsoft Excel [cite: 17]",
            "Berkolaborasi dengan tim dalam implementasi solusi teknologi informasi [cite: 18]"
          ],
          technologies: ["PHP", "Power Apps", "Microsoft Excel"],
          companyLogo: "semenpadang.png",
        },
        {
          id: 3,
          position: "Full Stack Developer (Magang)",
          company: "LLDIKTI X Padang",
          duration: "1 Bulan",
          period: "Jan 2024 - Feb 2024",
          location: "Sumatera Barat, Indonesia",
          type: "Kerja Praktek",
          description: "Mengembangkan aplikasi web sistem manajemen SPPD (Surat Perintah Perjalanan Dinas)[cite: 25, 27].",
          responsibilities: [
            "Mendesain dan membangun rancangan tampilan aplikasi [cite: 28]",
            "Menggunakan bahasa pemrograman PHP dan framework Laravel [cite: 29]",
            "Melakukan pengujian/uji coba aplikasi sebelum digunakan [cite: 30]"
          ],
          technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
          companyLogo: "lldikti.png",
        },
        {
          id: 4,
          position: "WordPress Developer",
          company: "Nagari Siguntur",
          duration: "2 Bulan",
          period: "Okt 2024 - Nov 2024",
          location: "Pesisir Selatan, Sumatera Barat, Indonesia",
          type: "Pengabdian Dosen",
          description: "Mengembangkan website resmi Nagari Siguntur berbasis WordPress untuk mendukung administrasi nagari[cite: 19, 21].",
          responsibilities: [
            "Mendesain dan membangun tampilan serta struktur halaman website [cite: 22]",
            "Menerapkan sistem untuk mendukung administrasi nagari dan keterlibatan masyarakat [cite: 23]",
            "Melakukan implementasi dan uji coba website sebelum digunakan [cite: 24]"
          ],
          technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
          companyLogo: "siguntur.png",
        }
      ]
    }
  }

  const currentTranslations = translations[language]
  const experiences = currentTranslations.experiences

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-emerald-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px]"></div>
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
              {/* Timeline Line & Dot */}
              <div className="absolute left-4 md:left-6 top-20 bottom-0 w-0.5 bg-zinc-200 hidden lg:block"></div>
              <div className="absolute left-2 md:left-4 top-20 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full shadow-md hidden lg:block z-20"></div>

              {/* Experience Card */}
              <div className="lg:ml-20 group relative">
                <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between mb-8">
                    {/* Logo & Info */}
                    <div className="flex items-start gap-5">
                      <div className="bg-white p-2 rounded-xl h-16 w-16 flex items-center justify-center flex-shrink-0 shadow-sm border border-zinc-100 text-black">
                        <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-contain" />
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
                    {/* Badges */}
                    <div className="flex flex-wrap gap-3 lg:items-end lg:flex-col">
                      <div className="flex items-center gap-2 bg-zinc-50 px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm shadow-sm">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {exp.duration}
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-100">{exp.period}</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-zinc-600 text-lg leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Responsibilities & Tech */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-zinc-900 font-bold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Key Responsibilities
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
                    <div>
                      <h4 className="text-zinc-900 font-bold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-zinc-50 text-zinc-600 px-3 py-2 rounded-lg text-sm border border-zinc-200 shadow-sm">{tech}</span>
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
  )
}

export default Experience