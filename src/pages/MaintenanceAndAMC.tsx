import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const MaintenanceAndAMC: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={'images/gallery/jkc50.png'}
            alt="Maintenance work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-400/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-4 sm:px-6 lg:px-8 mt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Maintenance & Restoration</h1>
        </div>
      </section>

      {/* Video Section with Maintenance */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-end">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-[#1769bc] mb-6">Maintenance & Restoration</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                JKC is a trusted partner and relied upon to ensure the continued functioning of telecommunication networks across the country.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                In order to prevent outages and deterioration of services, our team performs routine checks, testing and maintenance on equipment. To ensure and maintain network performance and security, we perform software updates, capacity expansions, as requested.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                When a network is disrupted or out of service, JKC's expansive team can restore operations. In some cases, this involves repairing or replacing damaged equipment, diagnosing equipment failures, and rerouting traffic to other routes.
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#1769bc] mb-4">Outside Plant Maintenance</h3>
                <ul className="text-gray-700 text-xl leading-relaxed space-y-2">
                  <li className="flex"><span className="opacity-50 mr-4">—</span><span>Emergency Repairs</span></li>
                  <li className="flex"><span className="opacity-50 mr-4">—</span><span>Moves</span></li>
                  <li className="flex"><span className="opacity-50 mr-4">—</span><span>Damage Restoration</span></li>
                  <li className="flex"><span className="opacity-50 mr-4">—</span><span>Work Stoppage Relief</span></li>
                </ul>
              </div>
            </div>
          </div>
            <div className="relative flex items-center pt-12" style={{height: '600px'}}>
            <img 
              src={'images/gallery/jkc51.png'}
              alt="Maintenance & Restoration"
              className="w-full object-cover"
              style={{height: '530px'}}
            />
            <div className="absolute bottom-12 left-6 text-white pointer-events-none">
              <h3 className="text-3xl font-bold">Maintenance &</h3>
              <h3 className="text-3xl font-bold">Restoration</h3>
            </div>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default MaintenanceAndAMC;