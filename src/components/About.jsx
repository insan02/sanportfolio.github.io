import React from 'react';
import { motion } from 'framer-motion';
import { FaPhp, FaLaravel, FaJsSquare, FaMicrosoft, FaProjectDiagram } from "react-icons/fa";
import { SiFigma, SiMysql } from "react-icons/si";

const About = ({ language }) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="about" className="pt-10 pb-24 bg-white relative overflow-hidden text-zinc-800">
      
      {/* Background Pattern - Subtle Grid untuk menghilangkan kesan polos */}
      <div className="absolute inset-0 z-0 opacity-[0.3]" style={{ backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      
      {/* Abstract Shapes di pojok */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-[80px] -z-10 opacity-60"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] -z-10 opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10 mt-10">
        
        {/* Header Section dengan Badge tambahan */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-zinc-900">
            {current.title}<span className="text-emerald-500">.</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
          
          {/* Image Gallery */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group p-2 md:p-4">
              {/* Background block color untuk membedakan dari background putih */}
              <div className="absolute inset-0 bg-emerald-50 rounded-[2rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 border border-emerald-100"></div>
              
              <div className="relative z-10 grid grid-cols-3 gap-3 bg-white p-3 md:p-4 rounded-[2rem] border border-zinc-200 shadow-xl">
                <div className="h-40 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
                  <img src="me1.png" alt="Profile 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-40 sm:h-64 md:h-80 rounded-2xl overflow-hidden mt-6 md:mt-12 shadow-sm border border-zinc-100">
                  <img src="me3.png" alt="Profile 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-40 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
                  <img src="me2.png" alt="Profile 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            {/* Box container untuk teks agar tidak polos */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50 relative">
              {/* Decorative pin/dot */}
              <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              
              <div className="space-y-6 leading-relaxed text-lg text-zinc-600 pt-6">
                <p className="border-l-4 border-emerald-500 pl-6 py-2 bg-gradient-to-r from-emerald-50 to-transparent rounded-r-xl text-zinc-700 font-medium">
                  {current.paragraph1}
                </p>
              </div>
            </div>
            
            <div className="pt-2 flex justify-center lg:justify-start pl-2">
              <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="absolute inset-0 bg-emerald-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 transition-colors duration-300">{current.contactButton}</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-28">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 whitespace-nowrap">{current.skillsTitle}</h3>
            <div className="h-[2px] w-full bg-gradient-to-r from-emerald-200 via-cyan-200 to-transparent"></div>
          </div>
          
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
            {skills.map((skill) => (
              <motion.div variants={itemVariants} key={skill.name} className="group bg-white border-2 border-zinc-100 shadow-md p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 relative z-10" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="text-xs font-bold text-zinc-500 group-hover:text-emerald-700 uppercase tracking-widest text-center relative z-10 transition-colors mt-2">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;