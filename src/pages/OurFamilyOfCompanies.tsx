import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const OurFamilyOfCompanies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 bg-gray-100">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Construction fleet with trucks and equipment"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left mt-16">
          <h1 className="text-6xl md:text-7xl font-semibold text-white mb-4">Our Companies</h1>
        </div>
      </section>

      {/* Accelerating Speed Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal text-blue-600 mb-8">Accelerating speed and capacity</h2>
          <p className="text-gray-700 text-xl leading-relaxed max-w-5xl">
            The reach of our expansive group of companies is built on our deep relationships with leading service providers. Intensely focused on safety and quality, and located in every region, our teams are ready with skilled personnel and state of art equipment and tooling. No matter the scope of work or promised deadline, find a JKC partner to match your needs.
          </p>
        </div>
      </section>

      {/* Map Section - Explore our nationwide reach */}
      <section className="py-0 bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 pt-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Explore our nationwide reach</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Map Area */}
            <div className="lg:col-span-2 relative">
              <div className="bg-blue-600 rounded-lg p-8 min-h-[500px] flex items-center justify-center relative overflow-hidden">
                {/* Simplified India Map Representation */}
                <div className="relative w-full h-full max-w-md mx-auto">
                  <svg viewBox="0 0 400 500" className="w-full h-full text-blue-800 opacity-80">
                    {/* Simplified India outline */}
                    <path d="M150 50 L250 50 L280 80 L300 120 L320 180 L310 220 L290 260 L280 300 L270 340 L250 380 L220 420 L180 450 L140 430 L110 400 L90 360 L80 320 L70 280 L80 240 L90 200 L110 160 L130 120 L140 80 Z" 
                          fill="currentColor" stroke="#1e40af" strokeWidth="2"/>
                  </svg>
                  
                  {/* Location dots */}
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="space-y-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="text-5xl font-light">37</div>
                <div className="text-xl">Companies</div>
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="text-5xl font-light">50</div>
              <div className="text-xl -mt-2">States</div>
              
              <div className="flex items-baseline space-x-2">
                <div className="text-5xl font-light">500+</div>
                <div className="text-xl">Locations</div>
              </div>
            </div>
          </div>
          
          <div className="pb-16"></div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default OurFamilyOfCompanies;