import React, { useState, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Correspondence Information System for BEM-HIMA Andalas University",
      shortTitle: "Correspondence Information System",
      category: "Academic Project",
      description: "Developed a comprehensive digital solution to optimize correspondence administration management for student organizations at Andalas University as part of the Framework-Based Programming course project. This system addresses critical challenges in manual administrative processes, including document loss, recording inaccuracies, and information delivery delays.",
      image: "/sssurat.png",
      screenshots: [
        "/sssurat1.png",
        "/sssurat2.png",
        "/sssurat3.png"
      ],
      technologies: ["PHP", "Laravel", "MySql", "Bootstrap", "HTML", "CSS"],
      features: [
        "Digital management of incoming and outgoing correspondence", 
        "Organized digital archive storage", 
        "Use php laravel for backend and bootstrap for frontend", 
        "User-friendly interface for BEM and HIMA administrators"
      ]
    },
    {
      id: 2,
      title: "Final Project in College: Development of a Decision Support System for Eyeglass Frame Selection Recommendations Using Profile Matching and Simple Multi Attribute Rating Technique (SMART) Methods at Sidi Pingai Eyeglass Store Bukittinggi",
      shortTitle: "Eyeglass Frame Selection DSS",
      category: "Thesis Project",
      description: "Successfully developed an intelligent decision support system for eyeglass frame selection at Sidi Pingai Eyeglass Store, Bukittinggi, as part of my final project (thesis). This innovative system enhances customer experience and optimizes product recommendations.",
      image: "/ssspk.jpg",
      screenshots: [
        "/ssspk1.jpg",
        "/ssspk2.jpg",
        "/ssspk3.jpg"
      ],
      technologies: ["PHP", "Laravel", "MySql", "Bootstrap", "HTML", "CSS", "Javascript"],
      features: ["Profile Matching Algorithm - Analyzes customer facial characteristics and preferences", 
        "SMART (Simple Multi Attribute Rating Technique) - Multi-criteria decision analysis", 
        "Decision Support System (DSS) architecture", 
        "Use php laravel for backend and javascript for frontend"]
    },
    {
      id: 3,
      title: "Rent Car",
      shortTitle: "Car Rental System",
      category: "Web Application",
      description: "Comprehensive car rental application featuring dual interfaces for administrators and customers. This full-stack web application streamlines vehicle rental operations with advanced booking management and fleet administration capabilities.",
      image: "/ssrent.png",
      screenshots: [
        "/ssrent1.png",
        "/ssrent2.png",
        "/ssrent3.png"
      ],
      technologies: ["PHP", "Laravel", "MySql", "Bootstrap", "HTML", "CSS", "Javascript"],
      features: ["Fleet Management - Add, edit, and remove vehicles with detailed specifications",
        "Booking Management - View, approve, reject, and modify customer reservations", 
        "Online Booking System - Real-time availability checking and instant reservations", 
        "Booking History - Complete rental history with invoice downloads"
      ]
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section id="project" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 relative">
                Projects
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards] origin-left"></div>
              </h2>
            </div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} flex flex-col h-[600px]`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Enhanced Image Section */}
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-sm font-medium mb-2">✨ Key Features</div>
                      <div className="flex flex-wrap justify-center gap-1 px-4">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                            {feature.split(' - ')[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content Section with Consistent Layout */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title Section with Better Handling */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-snug line-clamp-2 h-14 flex items-start">
                      {project.shortTitle}
                    </h3>
                    {project.title !== project.shortTitle && (
                      <p className="text-xs text-gray-500 mt-1 opacity-70 line-clamp-2 h-8">
                        {project.title.length > 80 ? `${project.title.substring(0, 80)}...` : project.title}
                      </p>
                    )}
                  </div>
                  
                  {/* Description with Fixed Height */}
                  <div className="mb-4 h-20">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description.length > 200 
                        ? `${project.description.substring(0, 200)}...`
                        : project.description
                      }
                    </p>
                  </div>
                  
                  {/* Technology Stack with Fixed Height */}
                  <div className="mb-6 h-16 flex items-start">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enhanced View Button - Consistent Position */}
                  <div className="mt-auto">
                    <button
                      onClick={() => openModal(project)}
                      className="w-full group-btn relative bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden h-12 flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 transition-transform group-btn-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </span>
                      
                      {/* Button Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-btn-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      
                      {/* Sparkle Effect */}
                      <div className="absolute inset-0 opacity-0 group-btn-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                        <div className="absolute bottom-1 left-2 w-1 h-1 bg-white rounded-full animate-ping delay-200"></div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-tl-full transition-all duration-500 ${hoveredProject === project.id ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-6 flex justify-between items-start rounded-t-2xl z-10">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 group flex-shrink-0"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Description */}
              <div className="mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-xl font-semibold border border-blue-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots Grid */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-2xl">📸</span>
                  Screenshots
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <img
                        src={screenshot}
                        alt={`${selectedProject.title} Screenshot ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        View {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .group-btn:hover .group-btn-hover\:rotate-12 {
          transform: rotate(12deg);
        }

        .group-btn:hover .group-btn-hover\:scale-x-100 {
          transform: scaleX(1);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}

export default Projects