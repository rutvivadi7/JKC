import React from 'react';
import { IMAGES } from '../constants/images';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      title: "Infrastructure Development",
      description: "Large-scale infrastructure projects including highways, bridges, airports, and urban development initiatives that connect communities and drive economic growth.",
      image: IMAGES.SERVICES.INFRASTRUCTURE,
      features: ["Highway Construction", "Bridge Engineering", "Airport Development", "Urban Planning"]
    },
    {
      title: "Residential Construction",
      description: "Modern residential complexes, luxury apartments, and sustainable housing solutions designed for contemporary urban living with focus on community and comfort.",
      image: IMAGES.SERVICES.RESIDENTIAL,
      features: ["Luxury Apartments", "Gated Communities", "Affordable Housing", "Smart Homes"]
    },
    {
      title: "Commercial Projects",
      description: "Office buildings, shopping centers, industrial facilities, and specialized commercial structures that support business growth and economic development.",
      image: IMAGES.SERVICES.COMMERCIAL,
      features: ["Office Complexes", "Shopping Centers", "Industrial Plants", "Warehouses"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="What We Do"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-left text-white mt-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">What We Do</h1>
          <p className="text-xl md:text-2xl opacity-90">Comprehensive Construction Solutions</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Services</h2>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
            We provide end-to-end construction solutions across multiple sectors, delivering projects that shape India's future infrastructure landscape.
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <h3 className="text-3xl font-bold text-blue-600 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 text-xl leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Our Process</h2>
            <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
              Our systematic approach ensures project success from conception to completion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Planning</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive project planning and feasibility analysis to ensure optimal outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Innovative design solutions that balance functionality, aesthetics, and sustainability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Construction</h3>
              <p className="text-gray-700 leading-relaxed">
                Expert execution with focus on quality, safety, and timely delivery of projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Delivery</h3>
              <p className="text-gray-700 leading-relaxed">
                Final handover with comprehensive support and maintenance services.
              </p>
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

export default WhatWeDo;