import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: string) => {
    switch (service) {
      case 'wireline':
        navigate('/wireline-construction');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'wireless':
        navigate('/wireless-construction');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'locating':
        navigate('/locating-and-sue');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'engineering':
        navigate('/engineering');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'fulfillment':
        navigate('/fulfillment');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'maintenance':
        navigate('/maintenance-and-amc');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'project-management':
        navigate('/project-management');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1769bc] mb-4 text-left leading-tight px-8 sm:px-12 lg:px-20 xl:px-28">Services</h2>

        {/* First Row - 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 px-8 sm:px-12 lg:px-20 xl:px-28">
          {/* Wireline Construction */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleServiceClick('wireline')}>
            <img
              src={'images/gallery/jkc10.jpg'}
              alt="Wireline Construction"
              className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Wireline Construction</h3>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireline Construction</h3>
                <p className="text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">We build and maintain wireline infrastructure with skilled crews and advanced equipment, delivering reliable aerial and underground construction across every region we serve.</p>
              </div>
            </div>
          </div>

          {/* Wireless Construction */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleServiceClick('wireless')}>
            <img
              src={'/images/gallery/jkc18.png'}
              alt="Wireless Construction"
              className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Wireless Construction</h3>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Wireless Construction</h3>
                <p className="text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">From tower erections to antenna installations, JKC delivers end-to-end wireless infrastructure solutions — building the networks that keep communities connected across every region.</p>
              </div>
            </div>
          </div>

          {/* Locating */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleServiceClick('locating')}>
            <img
              src={'/images/gallery/jkc19.png'}
              alt="Locating"
              className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Locating</h3>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Locating</h3>
                <p className="text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our locating services provide the skilled workforce necessary to ensure all underground utilities are identified before work begins.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 4 Services */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-8 sm:px-12 lg:px-20 xl:px-28">
          {/* Engineering */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleServiceClick('engineering')}>
            <img
              src={'images/gallery/jkc20.png'}
              alt="Engineering"
              className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Engineering</h3>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Engineering</h3>
                <p className="text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our integrated engineering teams combine geospatial expertise with innovative design tools to plan, survey, and deliver reliable infrastructure solutions from concept to completion.</p>
              </div>
            </div>
          </div>

          {/* Fulfillment */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleServiceClick('fulfillment')}>
            <img
              src={'images/gallery/jkc21.png'}
              alt="Fulfillment"
              className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Fulfillment</h3>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Fulfillment</h3>
                <p className="text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">We deliver seamless fulfillment services, from on-site installations to last-mile connectivity, ensuring every project is completed on time, to specification, and with the highest standard of quality.</p>
              </div>
            </div>
          </div>

          {/* Maintenance & Restoration */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleServiceClick('maintenance')}>
            <img
              src={'images/gallery/jkc22.png'}
              alt="Maintenance & Restoration"
              className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Maintenance & Restoration</h3>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Maintenance & Restoration</h3>
                <p className="text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">JKC provides ongoing maintenance and service for telecommunication networks across the country, as well as emergency restoration services when required.</p>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl" onClick={() => handleServiceClick('project-management')}>
            <img
              src={'images/gallery/jkc23.jpeg'}
              alt="Project Management"
              className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Project Management</h3>
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 sm:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Project Management</h3>
                <p className="text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Expert project management services ensuring successful delivery of complex telecommunications and infrastructure projects on time and within budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
