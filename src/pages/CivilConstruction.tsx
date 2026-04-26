import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const CivilConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Civil Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-left text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Civil Construction</h1>
          <p className="text-xl md:text-2xl opacity-90">Building the Foundation of Tomorrow</p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1769bc] mb-6">Civil Engineering Excellence</h2>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              Our civil construction division specializes in large-scale infrastructure projects that form the backbone of modern society. From roads and bridges to water treatment facilities and public buildings, we deliver projects that serve communities for generations.
            </p>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              With advanced engineering capabilities and state-of-the-art equipment, we handle complex civil construction challenges with precision and efficiency.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1769bc]">200+</div>
                <div className="text-gray-600">Civil Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1769bc]">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1} 
              alt="Civil construction site"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1769bc] mb-6">Our Civil Construction Services</h2>
            <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
              Comprehensive civil construction solutions for public and private sector projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1769bc] mb-4">Road Construction</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Highway construction, urban roads, and specialized pavement solutions with advanced materials and techniques.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• National Highways</li>
                <li>• State Roads</li>
                <li>• Urban Streets</li>
                <li>• Airport Runways</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1769bc] mb-4">Bridge Engineering</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Design and construction of bridges, flyovers, and specialized crossing structures.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cable-stayed Bridges</li>
                <li>• Flyovers</li>
                <li>• Pedestrian Bridges</li>
                <li>• Railway Bridges</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1769bc] mb-4">Water Infrastructure</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Water treatment plants, sewage systems, and water distribution networks.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Treatment Plants</li>
                <li>• Pipeline Networks</li>
                <li>• Pumping Stations</li>
                <li>• Storage Facilities</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1769bc] mb-4">Public Buildings</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Government buildings, schools, hospitals, and community facilities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Government Offices</li>
                <li>• Educational Facilities</li>
                <li>• Healthcare Centers</li>
                <li>• Community Centers</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1769bc] mb-4">Underground Works</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tunneling, underground utilities, and specialized excavation projects.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Metro Tunnels</li>
                <li>• Utility Tunnels</li>
                <li>• Underground Parking</li>
                <li>• Foundation Works</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#1769bc] mb-4">Site Development</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Land preparation, earthworks, and site infrastructure development.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Land Clearing</li>
                <li>• Grading & Excavation</li>
                <li>• Drainage Systems</li>
                <li>• Utility Installation</li>
              </ul>
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

export default CivilConstruction;