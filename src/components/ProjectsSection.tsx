import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Metro Rail Infrastructure",
      description: "Complete metro rail construction including tunneling, station development, and electrical systems for urban transportation networks.",
      image: IMAGES.PROJECTS.INFRASTRUCTURE_2,
    },
    {
      title: "Smart City Development",
      description: "Integrated smart city solutions with IoT infrastructure, sustainable buildings, and modern urban planning for future-ready communities.",
      image: IMAGES.PROJECTS.COMMERCIAL_1,
    },
    {
      title: "Highway Construction",
      description: "Multi-lane highway construction with advanced drainage systems, safety barriers, and sustainable road materials for long-lasting infrastructure.",
      image: IMAGES.GALLERY.CONSTRUCTION_5,
    },
    {
      title: "Residential Complex",
      description: "Modern residential towers with eco-friendly design, smart home integration, and community amenities for comfortable urban living.",
      image: IMAGES.PROJECTS.RESIDENTIAL_1,
    },
    {
      title: "Industrial Manufacturing Plant",
      description: "State-of-the-art manufacturing facility with automated systems, sustainable energy solutions, and optimized workflow design for maximum efficiency.",
      image: IMAGES.PROJECTS.RESIDENTIAL_2,
    },
    {
      title: "Bridge Engineering",
      description: "Cable-stayed bridge construction with advanced engineering solutions, seismic resistance, and aesthetic architectural design.",
      image: IMAGES.PROJECTS.INFRASTRUCTURE_1,
    },
    {
      title: "Airport Terminal Expansion",
      description: "Modern airport terminal with passenger-centric design, advanced security systems, and sustainable construction practices for enhanced travel experience.",
      image: IMAGES.GALLERY.CONSTRUCTION_6
    },
    {
      title: "Residential Complex",
      description: "Modern residential towers with eco-friendly design, smart home integration, and community amenities for comfortable urban living.",
      image: IMAGES.GALLERY.CONSTRUCTION_7
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1769bc] mb-4 text-left leading-tight">Projects</h2>
        </div>
        
        {/* First Row - 3 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3 mb-2">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 via-[#1769bc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">{project.title}</h3>
                  <p className="text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row - 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-3">
          {projects.slice(3, 7).map((project, index) => (
            <div key={index + 3} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 via-[#1769bc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">{project.title}</h3>
                  <p className="text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;