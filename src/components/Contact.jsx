import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const Contact = ({ language }) => {

  const translations = {
    en: {
      title: "Let's ",
      highlight: "Connect",
      connectText: "Connect",
      message: "I'm always open to discussing product design work or partnership opportunities. Feel free to reach out via any platform above!"
    },
    id: {
      title: "Mari ",
      highlight: "Terhubung",
      connectText: "Hubungi",
      message: "Saya selalu terbuka untuk mendiskusikan pekerjaan desain atau peluang kemitraan. Jangan ragu untuk menghubungi melalui platform di atas!"
    }
  };

  const t = translations[language] || translations.id;

  const contactInfo = [
    { title: 'Email', value: 'insannurul005@gmail.com', link: 'mailto:insannurul005@gmail.com', iconColor: 'text-emerald-400', bgColor: 'bg-emerald-500/20', hoverBorder: 'hover:border-emerald-400', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { title: 'LinkedIn', value: 'nurul-insan', link: 'https://www.linkedin.com/in/nurul-insan', iconColor: 'text-blue-400', bgColor: 'bg-blue-500/20', hoverBorder: 'hover:border-blue-400', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { title: 'WhatsApp', value: '+62 823-8681-0527', link: 'https://wa.me/6282386810527', iconColor: 'text-emerald-400', bgColor: 'bg-emerald-500/20', hoverBorder: 'hover:border-emerald-400', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg> },
    { title: 'Instagram', value: '@nsannn__', link: 'https://www.instagram.com/nsannn__', iconColor: 'text-pink-400', bgColor: 'bg-pink-500/20', hoverBorder: 'hover:border-pink-400', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> }
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } } };

  return (
    <section id="contact" className="pt-32 pb-10 bg-zinc-950 relative overflow-hidden flex flex-col justify-between min-h-[70vh] z-20">
      
      {/* PENTING: SVG Wave Transisi Atas dengan bentuk halus & class Tailwind murni */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          {/* className fill-slate-50 ini memastikan warna menyatu 100% dengan bg-slate-50 Certificate */}
          <path className="fill-slate-50" d="M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,144C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      {/* Background Ornaments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center mt-6">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t.title} <span className="text-emerald-500">{t.highlight}</span></h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Grid Cards - KONTRAS DIPERBAIKI */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
           {contactInfo.map((info) => (
              <motion.a variants={cardVariants} key={info.title} href={info.link} target="_blank" rel="noreferrer"
                 className={`group bg-zinc-800/80 backdrop-blur-md rounded-[2rem] p-8 shadow-xl border border-zinc-700/50 ${info.hoverBorder} transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center`}
              >
                 {/* Icon Background dibuat lebih pekat agar pop-out */}
                 <div className={`w-16 h-16 ${info.bgColor} ${info.iconColor} rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {info.icon}
                 </div>
                 
                 {/* Text dibuat lebih terang */}
                 <h3 className="text-xl font-extrabold text-white mb-2">{info.title}</h3>
                 <p className="text-zinc-300 text-sm font-medium mb-6 break-words w-full px-2">{info.value}</p>
                 
                 {/* Button Connect */}
                 <div className="mt-auto w-full">
                    <span className="text-sm font-bold text-emerald-400 flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 transition-all w-full group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-400 shadow-sm">
                       {t.connectText} <FaChevronRight className="text-sm" />
                    </span>
                 </div>
              </motion.a>
           ))}
        </motion.div>

        {/* Bottom Message - KONTRAS DIPERBAIKI */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-20 text-center max-w-3xl mx-auto">
           <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 border border-zinc-700 shadow-2xl relative">
              <span className="absolute -top-6 -left-2 md:-left-4 text-6xl md:text-7xl text-emerald-500/20 font-serif">"</span>
              <p className="text-zinc-200 text-lg md:text-xl font-medium italic relative z-10 px-4 leading-relaxed">
                 {t.message}
              </p>
              <span className="absolute -bottom-10 -right-2 md:-right-4 text-6xl md:text-7xl text-emerald-500/20 font-serif">"</span>
           </div>
        </motion.div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-24 pt-8 border-t border-zinc-800 text-center relative z-10 w-full">
         <p className="text-zinc-500 text-sm font-medium">© {new Date().getFullYear()} Nurul Insan. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Contact;