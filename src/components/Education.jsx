import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaTrophy, FaBook, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const Education = ({ language }) => {
  const [activeCard, setActiveCard] = useState(null);

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
          icon: (<img src="unand.png" alt="Unand" className="w-full h-full object-contain p-1"/>),
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
          icon: (<img src="unand.png" alt="Unand" className="w-full h-full object-contain p-1"/>),
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
  };

  const currentTranslations = translations[language];
  const educationData = currentTranslations.educationData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
  };

  return (
    <section id="education" className="pt-32 pb-24 bg-[#09090b] relative overflow-hidden">
      
      {/* SVG Wave Atas Halus (Dari About Putih ke Education Hitam) */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none rotate-180">
        <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,96L120,117.3C240,139,480,181,720,186.7C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>

      {/* Background Color Mix */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {currentTranslations.title}<span className="text-emerald-500">.</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Education Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8 relative"
          >
            <div className="hidden md:block absolute left-[3.25rem] top-8 bottom-8 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent opacity-20 z-0"></div>

            {educationData.map((edu, index) => (
              <motion.div variants={cardVariants} key={edu.id} className="group relative z-10" onMouseEnter={() => setActiveCard(edu.id)} onMouseLeave={() => setActiveCard(null)}>
                <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 -z-10`}></div>

                {/* CARD PUTIH SOLID */}
                <div className="bg-white rounded-[1.5rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start border border-zinc-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                  
                  <div className="flex-shrink-0 relative z-20">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${edu.bgIcon} border border-zinc-100 flex items-center justify-center text-3xl ${edu.color} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                      {edu.icon}
                    </div>
                  </div>

                  <div className="flex-grow space-y-4 w-full">
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{edu.level}</h3>
                        <p className={`text-md md:text-lg font-semibold ${edu.color} mt-1`}>{edu.institution}</p>
                      </div>
                      <div className="inline-flex items-center text-xs md:text-sm font-bold text-white bg-zinc-900 px-4 py-2 rounded-full shadow-md group-hover:bg-emerald-500 transition-colors self-start xl:self-auto shrink-0">
                        <FaCalendarAlt className="mr-2" />{edu.period}
                      </div>
                    </div>
                    <div className="flex items-center text-sm md:text-base text-zinc-500 font-medium">
                       <FaMapMarkerAlt className="mr-2 text-emerald-500" />{edu.location}
                    </div>
                    <div className="h-[1px] w-full bg-zinc-100 my-4"></div>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {edu.major && (
                        <div className="flex items-center space-x-2 bg-zinc-50 px-4 py-2.5 rounded-xl border border-zinc-200 group-hover:border-emerald-200 group-hover:bg-emerald-50/50 transition-colors">
                          <FaBook className="text-emerald-500 text-sm md:text-base" />
                          <span className="text-xs md:text-sm text-zinc-700">
                            <span className="text-zinc-400 mr-1 font-semibold">{currentTranslations.major}:</span> <span className="font-bold">{edu.major}</span>
                          </span>
                        </div>
                      )}
                      {edu.gpa && (
                        <div className="flex items-center space-x-2 bg-zinc-50 px-4 py-2.5 rounded-xl border border-zinc-200 group-hover:border-yellow-200 group-hover:bg-yellow-50/50 transition-colors">
                          <FaStar className="text-yellow-500 text-sm md:text-base" />
                          <span className="text-xs md:text-sm text-zinc-700">
                            <span className="text-zinc-400 mr-1 font-semibold">{currentTranslations.gpa}:</span> <span className="font-bold text-zinc-900">{edu.gpa}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Photo */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:col-span-5 flex justify-center mt-12 lg:mt-0">
             <div className="relative w-full max-w-md group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
                <div className="relative h-[350px] sm:h-[400px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                   <img src="me6.jpg" alt="Graduation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 object-top"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent opacity-90"></div>
                   <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs md:text-sm mb-2">
                            <FaGraduationCap className="text-lg" /><span className="tracking-widest font-bold">CLASS OF 2025</span>
                         </div>
                         <p className="text-white font-extrabold text-2xl md:text-3xl leading-tight">Universitas Andalas</p>
                      </div>
                   </div>
                </div>
                <div className="absolute -top-5 -right-5 md:-top-8 md:-right-8 bg-zinc-900 border border-emerald-500/30 p-4 md:p-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-float backdrop-blur-md">
                   <FaTrophy className="text-yellow-400 text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(5deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Education;