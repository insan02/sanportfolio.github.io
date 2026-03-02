import React, { useState, useEffect } from 'react';

const Certificate = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const translations = {
    en: {
      title: "Licenses & Certifications",
      viewCredential: "View Credential",
      close: "Close",
      certificates: [
        {
          id: 1,
          name: "Junior Web Programmer",
          issuer: "BNSP",
          date: "December 2024",
          images: ["bnsp1.png", "bnsp2.png"], 
        },
        {
          id: 2,
          name: "Junior Web Programmer Training",
          issuer: "BNSP",
          date: "December 2024",
          images: ["bnsp0.png"],
        },
        {
          id: 3,
          name: "UI/UX Design",
          issuer: "BuildWithAngga",
          date: "October 2025",
          images: ["bwa2.png"],
        },
        {
          id: 4,
          name: "Laravel 11",
          issuer: "BuildWithAngga",
          date: "October 2025",
          images: ["bwa1.png"],
        },
      ]
    },
    id: {
      title: "Lisensi & Sertifikasi",
      viewCredential: "Lihat Kredensial",
      close: "Tutup",
      certificates: [
        {
          id: 1,
          name: "Junior Web Programmer",
          issuer: "BNSP",
          date: "Desember 2024",
          images: ["bnsp1.png", "bnsp2.png"], 
        },
        {
          id: 2,
          name: "Pelatihan Junior Web Programmer",
          issuer: "BNSP",
          date: "Desember 2024",
          images: ["bnsp0.png"],
        },
        {
          id: 3,
          name: "UI/UX Design",
          issuer: "BuildWithAngga",
          date: "Oktober 2025",
          images: ["bwa2.png"],
        },
        {
          id: 4,
          name: "Laravel 11",
          issuer: "BuildWithAngga",
          date: "Oktober 2025",
          images: ["bwa1.png"],
        },
      ]
    }
  };

  const currentTranslations = translations[language] || translations.id;
  const certificates = currentTranslations.certificates;

  const openModal = (cert) => {
    setSelectedCert(cert);
    setCurrentImageIndex(0); 
  };

  const nextImage = (e) => {
    e.stopPropagation(); 
    setCurrentImageIndex((prev) => (prev + 1) % selectedCert.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedCert.images.length - 1 : prev - 1));
  };

  return (
    <section id="certificate" className="py-24 bg-zinc-50 relative overflow-hidden text-black">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className={`flex flex-col items-center mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
            {currentTranslations.title}<span className="text-emerald-500">.</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mt-4"></div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              className={`bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} group cursor-pointer relative`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => openModal(cert)}
            >
              {/* === BAGIAN YANG DIUBAH: object-contain dan padding === */}
              <div className="h-56 overflow-hidden relative border-b border-zinc-100 bg-zinc-100/50 p-4 flex items-center justify-center">
                <img 
                  src={cert.images[0]} 
                  alt={cert.name} 
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image' }}
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-emerald-700 px-4 py-2 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                    {currentTranslations.viewCredential}
                  </span>
                </div>
                
                {/* Indikator Jika Foto Lebih dari 1 */}
                {cert.images.length > 1 && (
                   <div className="absolute top-3 right-3 bg-zinc-900/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 z-10">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                      {cert.images.length}
                   </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-zinc-600 font-medium">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-zinc-500 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/95 backdrop-blur-md transition-opacity" onClick={() => setSelectedCert(null)}>
          
          {/* === PERBAIKAN: Tombol Close dipindah ke dalam viewport agar aman di HP === */}
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-8 text-white hover:text-emerald-400 flex items-center gap-2 bg-black/40 p-2 md:px-4 md:py-2 rounded-full z-50 transition-all"
            onClick={() => setSelectedCert(null)}
          >
             <span className="hidden md:block">{currentTranslations.close}</span> 
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center mt-8 md:mt-0" onClick={(e) => e.stopPropagation()}>
            
            {/* Container Gambar */}
            <div className="relative w-full flex items-center justify-center group h-[60vh] md:h-[75vh]">
               {/* === PERBAIKAN: Tombol panah dibuat masuk ke dalam frame di HP, keluar frame di Desktop === */}
               {selectedCert.images.length > 1 && (
                 <button onClick={prevImage} className="absolute left-2 md:-left-12 bg-black/50 hover:bg-emerald-500 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all z-10">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                 </button>
               )}

               <img 
                 key={currentImageIndex} 
                 src={selectedCert.images[currentImageIndex]} 
                 alt={selectedCert.name} 
                 className="w-full h-full object-contain animate-[fadeIn_0.3s_ease-in-out]"
               />

               {selectedCert.images.length > 1 && (
                 <button onClick={nextImage} className="absolute right-2 md:-right-12 bg-black/50 hover:bg-emerald-500 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all z-10">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                 </button>
               )}
            </div>

            {/* Dots & Info */}
            <div className="bg-white w-full max-w-lg p-4 md:p-5 mt-6 rounded-2xl text-center shadow-2xl relative">
               {selectedCert.images.length > 1 && (
                  <div className="flex justify-center gap-2 -mt-8 mb-4">
                     {selectedCert.images.map((_, idx) => (
                        <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-emerald-500 w-6' : 'bg-gray-400/50 w-2'}`} />
                     ))}
                  </div>
               )}
               <h3 className="font-bold text-lg md:text-xl text-zinc-900">{selectedCert.name}</h3>
               <p className="text-zinc-500 text-xs md:text-sm mt-1">{selectedCert.issuer} • {selectedCert.date}</p>
            </div>

          </div>
        </div>
      )}
      <style jsx>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }`}</style>
    </section>
  );
};

export default Certificate;