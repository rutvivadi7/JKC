import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Engineering: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 text-white mt-16 px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Engineering</h1>
        </div>
      </section>

      {/* Effective Telecom Design Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Effective Telecom Design</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Creating networks of any scale requires a talent for effective design. JKC's engineers are equipped with state-of-the-art geospatial engineering tools that ensure all the critical needs of a telecom network are met.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Our integrated engineering teams work hand-in-hand with construction and logistics teams throughout the full lifecycle of a project. This attention to detail and passion for design is shown in the ultimate product: a network that serves the needs of our customer well.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                We offer engineering services that push the boundaries of the industry forward by using in house developed products to manage our projects while delivering a reliable product to our customers.
              </p>
            </div>
          </div>
          <div className="relative flex items-end pt-16" style={{height: '480px'}}>
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Effective Telecom Design"
              className="shadow-xl w-full object-cover"
              style={{height: '420px'}}
            />
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* In the Office and In the Field Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_3}
              alt="Engineering Work"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
          </div>
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">In the Office</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-8">
                Our in-house engineering teams work across the nation to design elegant and sustainable networks. They coordinate with authorities in any municipality to organize permitting and field teams to aid site acquisition and selection.
              </p>
              
              <h2 className="text-4xl font-bold mb-6" style={{color: '#1769bc'}}>In the Field</h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Our field engineers coordinate with our logistics and program management teams to ensure construction that meets all our customers' specifications and timelines.
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

export default Engineering;