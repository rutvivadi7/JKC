import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Infrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-6 mt-16">
          <h1 className="text-6xl md:text-7xl font-semibold">Engineering</h1>
        </div>
      </section>

      {/* Effective Telecom Design Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-20 py-16">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Effective Telecom Design</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Creating networks of any scale requires a talent for effective design. JKC's engineers are equipped with state-of-the-art geospatial engineering tools that ensure all the critical needs of a telecom network are met.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Our integrated engineering teams work hand-in-hand with construction and logistics teams throughout the full lifecycle of a project. This attention to detail and passion for design is shown in the ultimate product: a network that serves the needs of our customer well.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                We offer engineering services that push the boundaries of the industry forward by using in house developed products to manage our projects while delivering a reliable product to our customers.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_2}
              alt="Effective Telecom Design"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">Effective Telecom</h3>
              <h3 className="text-3xl font-bold">Design</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* In the Office Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_3}
              alt="In the Office"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">In the Office</h3>
            </div>
          </div>
          <div className="bg-white flex items-center">
            <div className="px-20 py-12">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">In the Office</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Our in-house engineering teams work across the nation to design elegant and sustainable networks. They coordinate with authorities in any municipality to organize permitting and field teams to aid site acquisition and selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* In the Field Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-20 py-12">
              <h2 className="text-4xl font-bold mb-6" style={{color: '#1769bc'}}>In the Field</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Our field engineers coordinate with our logistics and program management teams to ensure construction that meets all our customers' specifications and timelines.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="In the Field"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">In the Field</h3>
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

export default Infrastructure;