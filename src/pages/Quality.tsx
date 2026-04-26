import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Quality: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={IMAGES.GALLERY.CONSTRUCTION_7}
            alt="Quality construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 text-white mt-16 px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Quality</h1>
        </div>
      </section>

      {/* Top Section - Title, Description and Image */}
      <section className="bg-gray-100">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="px-8 sm:px-12 lg:px-20 xl:px-28 py-6 flex items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight mb-4">
                At JKC, We Prioritize Doing Things the RIGHTPATH
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-4">
                <strong>RIGHTPATH</strong> is our Quality Management System (QMS) and it is our preferred framework for ensuring excellence in our operations. Our structured approach and comprehensive training empower our workforce to proactively maintain and improve quality in all aspects of our business. We adhere to all legal requirements and policies governing health and safety, sustainability, and codes of conduct for our employees and the contractors we hire.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                Our commitment is to meet our customers' expectations while maintaining a superior standard of execution. Our staff and personnel are highly qualified through experience and training. We recognize that quality is crucial to our success, and we will educate our employees to ensure our work meets our customers' satisfaction. We are proud of our teams and stand behind our work.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={IMAGES.GALLERY.CONSTRUCTION_5}
              alt="Quality construction work"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
          </div>
        </div>
      </section>

      {/* Quality Values and Image Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img
              src={IMAGES.GALLERY.CONSTRUCTION_10}
              alt="Quality construction excellence"
              className="w-full h-full object-cover"
              style={{minHeight: '500px'}}
            />
          </div>
          <div className="bg-white px-8 sm:px-12 lg:px-16 py-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">Responsible</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  We are capable. We understand and take great pride in our obligation to our customers and communities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">Innovative</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  We continuously challenge ourselves to improve our performance and solve problems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">Goal-oriented</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  We are committed to accomplishing the targets set by both our internal and external customers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">High Standards</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  We adhere to the highest standards and strive for excellence in all areas of our work.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">Thorough</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  At our core, we are committed to executing every task with precision and thoroughness, regardless of its scale or timeframe.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">Well Managed</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Our teams are effectively managed, from planning to execution, with the right controls and competencies in place.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">Accurate</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Our work is carefully reviewed to ensure accuracy and attention to detail.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-500 mb-1">Yielding Excellence</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  We are committed to achieving excellence in all aspects and areas of our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We are Committed to Quality Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-gray-100 px-8 sm:px-12 lg:px-20 xl:px-28 py-6 flex items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-4">We are Committed to Quality</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-4">
                The team's goal is to provide a high-quality project while minimizing rework and expediting schedules. We have several processes in place to ensure our quality goals are met.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                At the heart of our philosophy is a commitment to provide the highest level of professionalism and the best value to our customers on every project. JKC repeatedly demonstrates that commitment, completing all our projects on time, within budget and to the highest of quality standards. That level of performance doesn't happen by accident.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={IMAGES.GALLERY.CONSTRUCTION_6}
              alt="Quality commitment construction work"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Quality;
