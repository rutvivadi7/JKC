import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const LocatingAndSUE: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Utility locating work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-4 sm:px-6 lg:px-8 mt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Locating & SUE</h1>
          <p className="text-lg font-medium mt-3">(SUB UTILITY ENQUIRY)</p>
        </div>
      </section>

      {/* Video Section with Locating */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-blue-600 mb-2">Locating & SUE</h2>
              <p className="text-lg font-medium text-blue-600 mb-6">(SUB UTILITY ENQUIRY)</p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Our locating services provide the skilled workforce to ensure underground infrastructure is protected when excavation activity occurs. JKC's employees utilize modern technology to deliver timely, reliable, and accurate locate services to our clients throughout India.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                We complete millions of successful locates each year and include proper documentation to help reduce underground plant damages. Our Enhanced Positive Response process (EPR) helps excavators know where utilities are buried before construction begins. We also offer specialized services which include quality audit programs, facility documentation, standby services, risk assessment, leak surveys and meter inspections. Our suite of services enables our nation's infrastructure to remain healthy and sustainable into the future.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                Every day, our locators work across India to achieve safer excavations and assist in reducing damages.
              </p>
            </div>
          </div>
          <div className="relative flex items-center pt-12" style={{height: '600px'}}>
            <video 
              className="w-full object-cover"
              style={{height: '460px'}}
              controls
              preload="metadata"
              poster={IMAGES.GALLERY.CONSTRUCTION_1}
            >
              <source src="/videos/Locating/video1.mp4" type="video/mp4" />
              <track 
                kind="subtitles" 
                src="/videos/Locating/video1.vtt" 
                srcLang="en" 
                label="English"
                default
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-16 left-6 text-white pointer-events-none">
              <h3 className="text-3xl font-bold">Locating & SUE</h3>
              <h3 className="text-xl font-medium">(SUB UTILITY ENQUIRY)</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-16">
        <ConnectionSection />
      </div>
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default LocatingAndSUE;