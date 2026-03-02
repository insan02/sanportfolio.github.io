import React, { useState, useEffect } from 'react';
import { FaPhp, FaLaravel, FaJsSquare, FaMicrosoft, FaProjectDiagram } from "react-icons/fa";
import { SiFigma, SiMysql } from "react-icons/si";

const About = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const translations = {
    en: {
      title: "About Me",
      skillsTitle: "Tech Stack & Expertise",
      contactButton: "Get In Touch",
      paragraph1: "A recent Information Systems graduate from Andalas University with professional experience as a Full Stack Developer at PT Semen Padang. As a BNSP-certified Junior Web Programmer, I specialize in developing web applications using PHP (Laravel), managing MySQL databases, and designing user interfaces (UI/UX) with Figma. I possess a proven ability to translate complex business requirements into targeted digital solutions through comprehensive process analysis and user-centric design.",
    },
    id: {
      title: "Tentang Saya",
      skillsTitle: "Keahlian & Teknologi",
      contactButton: "Hubungi Saya",
      paragraph1: "Lulusan baru Sistem Informasi dari Universitas Andalas dengan pengalaman profesional sebagai Full Stack Developer di PT Semen Padang. Memiliki sertifikasi BNSP Junior Web Programmer dan keahlian mendalam dalam pengembangan aplikasi web berbasis PHP (Laravel), pengelolaan database MySQL, serta perancangan UI/UX menggunakan Figma. Terbukti mampu mentransformasikan kebutuhan bisnis menjadi solusi digital yang tepat sasaran melalui analisis proses bisnis dan perancangan antarmuka yang user-friendly.",
    }
  };

  const current = translations[language] || translations.id;

  const skills = [
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'System Modeling', icon: <FaProjectDiagram />, color: '#10B981' },
    { name: 'UI/UX Design', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'MS Office', icon: <FaMicrosoft />, color: '#F25022' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-emerald-50/80 to-white relative overflow-hidden text-black">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-transparent rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-100/40 to-transparent rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {current.title}<span className="text-emerald-500">.</span>
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Image Gallery */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group p-4">
              <div className="absolute inset-0 bg-gray-200/50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-gray-200"></div>
              <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-3 bg-white p-2 md:p-3 rounded-2xl shadow-xl">
                <div className="h-40 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img src="me1.png" alt="Profile 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-40 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-md mt-4 md:mt-8">
                  <img src="me3.png" alt="Profile 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-40 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img src="me2.png" alt="Profile 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-6 leading-relaxed text-lg text-gray-800">
              <p className="border-l-4 border-emerald-500 pl-6 py-2 bg-white/60 rounded-r-2xl shadow-sm italic md:not-italic">
                {current.paragraph1}
              </p>
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-1">
                {current.contactButton}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold whitespace-nowrap">{current.skillsTitle}</h3>
            <div className="h-px w-full bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="group bg-white border border-gray-100 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-600 group-hover:text-emerald-600 uppercase tracking-widest text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;