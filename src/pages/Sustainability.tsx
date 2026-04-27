import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={'images/gallery/jkc12.jpg'}
            alt="Road construction with vehicles and traffic cones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-400/60"></div>
        </div>
        <div className="relative z-10 text-white mt-16 px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">Our Commitment to Sustainability</h1>
          <p className="text-lg font-semibold opacity-90">Building a Sustainable Future</p>
        </div>
      </section>

      {/* Text + Image Section */}
      <section className="py-12 sm:py-16 bg-white px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-gray-700 text-xl leading-loose">
              JKC is driven by the vision of Connecting People, and we believe sustainability is crucial to achieving that vision responsibly. Our sustainability strategy is built on three core pillars: Safety, People, and Environment. This means prioritizing the safety of our workforce, fostering a culture of continuous learning and development, and actively minimizing our environmental impact on the environment. Strong governance, ethical practices, and a commitment to transparency under our efforts.
            </p>
            <p className="text-gray-700 text-xl leading-loose">
              Through innovation, hard work, and a focus on leading with our values, JKC is dedicated to leaving the world better than we found it, and to helping our customers create robust networks that enable others to do the same.
            </p>
          </div>
          <div className="relative">
            <img
              src={'images/gallery/jkc27.png'}
              alt="Corporate Sustainability Report"
              className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-10 sm:py-12 bg-gray-50 px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid md:grid-cols-4 gap-6 ">
          {[
            {
              title: 'Safety',
              img: IMAGES.GALLERY.CONSTRUCTION_4,
              text: 'We strive to ensure the highest level of protection for our employees, customers, and the community in which we operate by fostering an instinctually safe culture.'
            },
            {
              title: 'People',
              img: IMAGES.GALLERY.CONSTRUCTION_5,
              text: 'Employees are our most important resource and are at the heart of everything we do. We strive every day to create the right environment for them to grow their skills, work collaboratively, and deliver our services at the highest quality to our customers.'
            },
            {
              title: 'Environment',
              img: 'images/gallery/jkc29.jpg',
              text: 'Working together, we strive to continually reduce our environmental impact by embracing advancements in sustainable technologies optimized by our core business practices and a highly skilled workforce.'
            },
            {
              title: 'Business Practices',
              img: IMAGES.GALLERY.CONSTRUCTION_7,
              text: 'Strong corporate governance and risk management practices underpin everything that we do, enabling us to serve our stakeholders in the most responsible manner.'
            }
          ].map((pillar, i) => (
            <div key={i} className="relative text-white rounded-2xl overflow-hidden min-h-[480px]">
              <div className="absolute inset-0">
                <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-green-600/80"></div>
              <div className="relative z-10 text-center p-8 flex flex-col items-center justify-center h-full">
                <h3 className="text-3xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-xl leading-relaxed">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Sustainability;
