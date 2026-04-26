import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Residential: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Residential"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-left text-white mt-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Residential</h1>
          <p className="text-xl md:text-2xl opacity-90">Creating Homes, Building Communities</p>
        </div>
      </section>

      {/* Residential Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Residential Excellence</h2>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              Our residential division creates modern living spaces that combine comfort, functionality, and aesthetic appeal. From luxury apartments to affordable housing, we design and build homes that enhance the quality of life for residents.
            </p>
            <p className="text-gray-700 mb-6 text-xl leading-relaxed">
              We focus on sustainable construction practices, smart home integration, and community-centric design to create residential projects that stand the test of time.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600">Residential Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1} 
              alt="Modern residential complex"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Residential Types */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Residential Solutions</h2>
            <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
              Diverse residential options designed to meet the varied needs of modern families and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Luxury Apartments</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Premium residential towers with world-class amenities and sophisticated design.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Premium Finishes</li>
                <li>• Smart Home Features</li>
                <li>• Concierge Services</li>
                <li>• Rooftop Gardens</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Gated Communities</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Secure residential communities with comprehensive amenities and green spaces.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 24/7 Security</li>
                <li>• Community Centers</li>
                <li>• Parks & Recreation</li>
                <li>• Sports Facilities</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Affordable Housing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Quality housing solutions that make homeownership accessible to all income levels.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cost-Effective Design</li>
                <li>• Energy Efficient</li>
                <li>• Community Amenities</li>
                <li>• Easy Financing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Smart Homes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Technology-integrated homes with automated systems and IoT connectivity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Home Automation</li>
                <li>• Energy Management</li>
                <li>• Security Systems</li>
                <li>• Voice Control</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Senior Living</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Specialized residential facilities designed for senior citizens with care services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Accessible Design</li>
                <li>• Healthcare Support</li>
                <li>• Social Activities</li>
                <li>• Emergency Response</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Student Housing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Modern student accommodation with study facilities and community spaces.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Study Areas</li>
                <li>• High-Speed Internet</li>
                <li>• Recreation Facilities</li>
                <li>• Meal Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">What Makes Our Homes Special</h2>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
            Every residential project is designed with attention to detail and focus on resident satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">D</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Design Excellence</h3>
            <p className="text-gray-700 leading-relaxed">
              Thoughtful architectural design that maximizes space, light, and functionality.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Sustainability</h3>
            <p className="text-gray-700 leading-relaxed">
              Eco-friendly materials and energy-efficient systems for sustainable living.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">C</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Community</h3>
            <p className="text-gray-700 leading-relaxed">
              Spaces designed to foster community interaction and social connections.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">Technology</h3>
            <p className="text-gray-700 leading-relaxed">
              Smart home integration and modern technology for enhanced living experience.
            </p>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Residential;