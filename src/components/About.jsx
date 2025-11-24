import React, { useState, useEffect } from 'react'
import { FaPhp, FaLaravel, FaDatabase, FaJsSquare, FaMicrosoft } from "react-icons/fa";

const About = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const translations = {
  en: {
    title: "About Me",
    skillsTitle: "Tech Stack",
    connectText: "Let's connect to discuss collaboration opportunities!",
    contactButton: "Get In Touch",
    paragraph1:
      "Fresh graduate of Information Systems Department, Andalas University with bachelor's degree in computers. Has BNSP training and competency certification in Software Development with qualifications as a Junior Web Programmer. Has a great interest in the field of information technology, especially Website Developer and UI UX Design.",
    paragraph2:
      "Has internship experience as a web developer at LLDIKTI Region X Padang with a focus on the advanced development of SPPD (Official Travel Order) applications and also as a WordPress web developer in the service of lecturers in the Information Systems Department of UNAND in developing the Nagari Siguntur website, Koto XI Tarusan, Pesisir Selatan. During college, experienced as a GIS (Geographic Information System) Laboratory Assistant, assisting lecturers in teaching practicums in GIS courses."
  },

  id: {
    title: "Tentang Saya",
    skillsTitle: "Keahlian Teknis",
    connectText: "Mari terhubung untuk mendiskusikan peluang kolaborasi!",
    contactButton: "Hubungi Saya",
    paragraph1:
      "Lulusan baru jurusan Sistem Informasi Universitas Andalas dengan gelar Sarjana Komputer. Memiliki sertifikasi pelatihan dan kompetensi BNSP pada bidang Software Development dengan kualifikasi sebagai Junior Web Programmer. Memiliki minat besar pada bidang teknologi informasi khususnya Website Developer dan Design UI UX.",
    paragraph2:
      "Memiliki pengalaman magang sebagai web developer di LLDIKTI Wilayah X Padang dengan fokus pada pengembangan lanjutan aplikasi SPPD (Surat Perintah Perjalanan Dinas) dan juga sebagai WordPress web developer pada pengabdian dosen Departemen Sistem Informasi UNAND dalam mengembangkan website Nagari Siguntur Kecamatan Koto XI Tarusan Kabupaten Pesisir Selatan. Selama kuliah, berpengalaman sebagai Asisten Laboratorium SIG (Sistem Informasi Geografis) dalam membantu dosen mengajar praktikum pada mata kuliah SIG."
  }
};


  const currentTranslations = translations[language]

  const skills = [
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'Office', icon: <FaMicrosoft />, color: '#F25022' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-emerald-50/80 to-white relative overflow-hidden text-black">
  {/* Background Gradasi Putih dan Hijau Lebih Jelas */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/90 via-emerald-200/50 to-white/70 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/90 via-emerald-100/50 to-white/70 rounded-full blur-[120px]"></div>


      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}> 
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
              {currentTranslations.title}<span className="text-emerald-500">.</span>
            </h2>
            <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="relative group h-full min-h-[350px] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-white to-gray-100 rounded-3xl transform rotate-2 transition-transform group-hover:rotate-3 border border-gray-300"></div>
               <div className="relative z-20 w-full h-full p-4 grid grid-cols-3 gap-3">
                  <div className="h-80 rounded-2xl overflow-hidden shadow-lg"><img src="me1.png" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" /></div>
                  <div className="h-80 rounded-2xl overflow-hidden shadow-lg mt-8"><img src="me3.png" className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700" /></div>
                  <div className="h-80 rounded-2xl overflow-hidden shadow-lg"><img src="me2.png" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" /></div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-6 leading-relaxed text-lg">
              <p className="border-l-4 border-emerald-500 pl-6 py-1 bg-white/80 rounded-r-lg">
                {currentTranslations.paragraph1}
              </p>
              <p className="pl-6 bg-white/80 rounded-lg p-4">{currentTranslations.paragraph2}</p>
            </div>
            <div className="pt-4">
               <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-black rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-emerald-300/50">
                  {currentTranslations.contactButton}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </a>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-black">
            {currentTranslations.skillsTitle} <div className="h-px flex-1 bg-gray-300"></div>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="group bg-white/80 border border-gray-200 p-6 rounded-2xl flex flex-col items-center gap-4 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>{skill.icon}</div>
                <span className="text-sm font-bold text-black group-hover:text-emerald-500">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About