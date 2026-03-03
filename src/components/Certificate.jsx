import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaAward } from 'react-icons/fa';

const Certificate = ({ language }) => {
  const [selectedCert, setSelectedCert] = useState(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  const translations = {
    en: {
      title: "Licenses & Certifications",
      subtitle: "MY CREDENTIALS",
      viewCredential: "View Credential",
      close: "Close",
      certificates: [
        { id: 1, name: "Junior Web Programmer", issuer: "BNSP", date: "December 2024", images: ["bnsp1.png", "bnsp2.png"] },
        { id: 2, name: "Junior Web Programmer Training", issuer: "BNSP", date: "December 2024", images: ["bnsp0.png"] },
        { id: 3, name: "UI/UX Design", issuer: "BuildWithAngga", date: "October 2025", images: ["bwa2.png"] },
        { id: 4, name: "Laravel 11", issuer: "BuildWithAngga", date: "October 2025", images: ["bwa1.png"] },
      ]
    },
    id: {
      title: "Lisensi & Sertifikasi",
      subtitle: "KREDENSIAL SAYA",
      viewCredential: "Lihat Kredensial",
      close: "Tutup",
      certificates: [
        { id: 1, name: "Junior Web Programmer", issuer: "BNSP", date: "Desember 2024", images: ["bnsp1.png", "bnsp2.png"] },
        { id: 2, name: "Pelatihan Junior Web Programmer", issuer: "BNSP", date: "Desember 2024", images: ["bnsp0.png"] },
        { id: 3, name: "UI/UX Design", issuer: "BuildWithAngga", date: "Oktober 2025", images: ["bwa2.png"] },
        { id: 4, name: "Laravel 11", issuer: "BuildWithAngga", date: "Oktober 2025", images: ["bwa1.png"] },
      ]
    }
  };

  const currentTranslations = translations[language] || translations.id;
  const certificates = currentTranslations.certificates;

  const openModal = (cert) => {
    setSelectedCert(cert);
    setCurrentImageIndex(0); 
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation(); 
    setCurrentImageIndex((prev) => (prev + 1) % selectedCert.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedCert.images.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <>
      {/* PENTING: bg-slate-50 di sini akan menyambung dengan ombak di Contact.jsx */}
      <section id="certificate" className="pt-20 pb-32 bg-slate-50 relative overflow-hidden text-zinc-900">
        
        {/* Background Accents (Tanpa SVG Ombak di file ini agar tidak tabrakan) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 mt-6">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="flex flex-col items-center mb-16 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wider mb-4 border border-emerald-200 flex items-center gap-2 shadow-sm">
              <FaAward className="text-emerald-500" /> {currentTranslations.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">
              {currentTranslations.title}<span className="text-emerald-500">.</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {certificates.map((cert) => (
              <motion.div variants={cardVariants} key={cert.id} onClick={() => openModal(cert)} className="bg-white rounded-[2rem] border border-zinc-200 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-emerald-900/10 hover:border-emerald-300 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer relative flex flex-col h-full">
                <div className="h-48 md:h-56 overflow-hidden relative border-b border-zinc-100 bg-zinc-50/80 p-6 flex items-center justify-center">
                  <img src={cert.images[0]} alt={cert.name} className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image' }} />
                  <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 backdrop-blur-[1px] transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-emerald-700 px-5 py-2.5 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      {currentTranslations.viewCredential}
                    </span>
                  </div>
                  {cert.images.length > 1 && (
                     <div className="absolute top-4 right-4 bg-zinc-900/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 z-10 shadow-sm border border-white/10">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        1 / {cert.images.length}
                     </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-extrabold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">{cert.name}</h3>
                  <div className="mt-auto">
                    <p className="text-zinc-500 font-semibold text-sm mb-3 bg-zinc-100 inline-block px-3 py-1 rounded-md border border-zinc-200">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-zinc-400 font-medium gap-1.5 pt-3 border-t border-zinc-100"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>{cert.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-xl" onClick={closeModal}>
            <button className="absolute top-4 right-4 md:top-6 md:right-8 text-zinc-400 hover:text-white flex items-center gap-2 bg-zinc-900 border border-white/10 p-2 md:px-4 md:py-2.5 rounded-full z-50 transition-all hover:bg-red-500/20 hover:border-red-500/50" onClick={closeModal}>
               <span className="hidden md:block text-sm font-bold">{currentTranslations.close}</span><FaTimes className="w-5 h-5" />
            </button>
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative max-w-5xl w-full flex flex-col items-center mt-8 md:mt-0" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full flex items-center justify-center group h-[60vh] md:h-[75vh]">
                 {selectedCert.images.length > 1 && (<button onClick={prevImage} className="absolute left-2 md:-left-16 bg-zinc-900/80 border border-white/10 hover:bg-emerald-500 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-10 hover:scale-110 shadow-lg hidden sm:block"><FaChevronLeft className="w-5 h-5" /></button>)}
                 <div className="w-full h-full relative flex justify-center items-center p-2">
                   <AnimatePresence mode="wait">
                     <motion.img key={currentImageIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} src={selectedCert.images[currentImageIndex]} alt={selectedCert.name} className="max-w-full max-h-full object-contain rounded-lg drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"/>
                   </AnimatePresence>
                 </div>
                 {selectedCert.images.length > 1 && (<button onClick={nextImage} className="absolute right-2 md:-right-16 bg-zinc-900/80 border border-white/10 hover:bg-emerald-500 text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all z-10 hover:scale-110 shadow-lg hidden sm:block"><FaChevronRight className="w-5 h-5" /></button>)}
              </div>
              {selectedCert.images.length > 1 && (
                <div className="flex sm:hidden justify-center items-center gap-6 mt-4 mb-2">
                  <button onClick={prevImage} className="bg-zinc-800 p-3 rounded-full text-white border border-zinc-700 active:bg-emerald-500"><FaChevronLeft /></button>
                  <span className="text-zinc-400 font-medium text-sm">{currentImageIndex + 1} / {selectedCert.images.length}</span>
                  <button onClick={nextImage} className="bg-zinc-800 p-3 rounded-full text-white border border-zinc-700 active:bg-emerald-500"><FaChevronRight /></button>
                </div>
              )}
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 w-full max-w-2xl p-5 md:p-6 mt-4 md:mt-8 rounded-3xl text-center shadow-2xl relative">
                 {selectedCert.images.length > 1 && (
                    <div className="flex justify-center gap-2 mb-4">
                       {selectedCert.images.map((_, idx) => (<div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-emerald-500 w-8' : 'bg-zinc-700 w-2'}`} />))}
                    </div>
                 )}
                 <h3 className="font-extrabold text-xl md:text-2xl text-white leading-tight">{selectedCert.name}</h3>
                 <div className="flex items-center justify-center gap-3 text-zinc-400 text-sm md:text-base mt-3 font-medium">
                   <span className="bg-zinc-800 px-3 py-1 rounded-md">{selectedCert.issuer}</span><span>•</span><span className="flex items-center gap-1.5"><FaAward className="text-emerald-500" /> {selectedCert.date}</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificate;