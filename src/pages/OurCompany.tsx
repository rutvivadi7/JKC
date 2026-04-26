import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const OurCompany: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={IMAGES.GALLERY.CONSTRUCTION_6}
            alt="Our company building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 text-white mt-16 px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Our Company</h1>
        </div>
      </section>

      {/* Accelerating Speed Section */}
      <section className="py-10 sm:py-14 bg-white px-8 sm:px-12 lg:px-20 xl:px-28">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Accelerating speed and capacity</h2>
        <p className="text-gray-700 text-xl leading-loose">
          Our reach is built on deep relationships with leading service providers and a strong network of trusted partners across multiple regions. Intensely focused on safety and quality, our teams are always ready with skilled personnel, modern equipment, and the right tooling for every job.
        </p>
        <p className="text-gray-700 text-xl leading-loose">
          No matter the scope of work or the promised deadline, we have the capacity, manpower, and expertise to deliver on time, every time.
        </p>
      </section>

      {/* Company Profile Section */}
      <section className="py-12 sm:py-16 bg-white px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-blue-600">Company Profile</h2>
            <p className="text-gray-700 text-xl leading-loose">
              Jay Krishna Construction stands as a beacon of excellence in India's construction industry. With over 27+ years of experience, we have established ourselves as a premier construction company specializing in infrastructure development, residential projects, and commercial construction. Headquartered in Surat, Gujarat, we specialize in infrastructure development, residential projects, and commercial construction — delivering quality-driven solutions across multiple states.
            </p>
            <p className="text-gray-700 text-xl leading-loose">
              At JKC, we don't just build structures — we build lasting relationships. Every project we undertake reflects our dedication to excellence, integrity, and craftsmanship that stands the test of time.
            </p>
          </div>
          <div>
            <img
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Construction work in progress"
              className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Recognition & Certifications Section */}
      <section className="py-10 sm:py-14 bg-white px-8 sm:px-12 lg:px-20 xl:px-28">
        <h2 className="text-4xl font-bold text-[#1769bc] mb-3 text-center">Recognition & Certifications</h2>
        <p className="text-gray-500 text-base mb-10 text-center">
          Our commitment to excellence has been recognized through various industry awards and certifications.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <span className="text-white text-2xl font-bold">ISO</span>
            </div>
            <h3 className="text-xl font-bold text-[#1769bc] mb-1">ISO 9001:2015</h3>
            <p className="text-gray-600 font-bold">Quality Management</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full flex items-center justify-center mb-4 shadow-lg" style={{backgroundColor: '#c38e30'}}>
              <span className="text-white text-xl font-bold">OHSAS</span>
            </div>
            <h3 className="text-xl font-bold text-[#1769bc] mb-1">OHSAS 18001</h3>
            <p className="text-gray-600 font-bold">Safety Management</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-red-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <span className="text-white text-xl font-bold">AWARD</span>
            </div>
            <h3 className="text-xl font-bold text-[#1769bc] mb-1">Excellence Award</h3>
            <p className="text-gray-600 font-bold">Industry Recognition</p>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default OurCompany;
