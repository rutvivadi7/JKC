import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const WirelessConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Wireless construction infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-6 mt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Wireless Construction</h1>
        </div>
      </section>

      {/* Video Section with Wireless Construction */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                JKC is an expert in wireless communications construction. We complete<br/>
                projects of any size, from macro cells to small cells, for 4G and 5G networks.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Our engineering teams work cooperatively with our construction teams to rapidly design, implement, and build wireless networks at any scale.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                Our specialties include full-service microcell deployments on any scale, site survey and acquisition for macrocell deployments, and the design and deployment of distributed antenna systems for large arenas and other public venues. We combine our expertise with first responders when communications count the most.
              </p>
            </div>
          </div>
          <div className="relative flex items-center pt-20" style={{height: '480px'}}>
            <video 
              className="w-full object-cover"
              style={{height: '340px'}}
              controls
              preload="metadata"
              poster={IMAGES.GALLERY.CONSTRUCTION_1}
            >
              <source src="/videos/Wireless Construction/video1.mp4" type="video/mp4" />
              <track 
                kind="subtitles" 
                src="/videos/Wireless Construction/video1.vtt" 
                srcLang="en" 
                label="English"
                default
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-16 left-6 text-white pointer-events-none">
              <h3 className="text-3xl font-bold">Wireless</h3>
              <h3 className="text-3xl font-bold">Construction</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* Cell Site Turnkey Contractor Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_2}
              alt="Cell Site Turnkey Contractor"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">Cell Site Turnkey</h3>
              <h3 className="text-3xl font-bold">Contractor</h3>
            </div>
          </div>
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-green-600 mb-6">Cell Site Turnkey Contractor</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                JKC can oversee every aspect of the tower cell tower construction process and successfully manage projects for major wireless carriers and broadband service providers nationally.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                We combine innovative solutions and cutting-edge technology to provide a reliable product that surpasses customer expectations every time. By streamlining our processes, we ensure the tower construction stays on schedule and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* New Site Builds Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-green-600 mb-6">New Site Builds and Site Modifications / Upgrades</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                JKC offers full turnkey solutions for new site development, with in-house capabilities and expertise to ensure we deliver to our wireless customers' expectations. Our services include new build for major mobile carriers, raw land cell tower sites, site compound extensions, outdoor cabinet installation and wiring, shelter installation and refurbishment, telecom tower foundation drilling and tower erection.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                As data usage and cellphone needs increase, existing telecommunication sites must be upgraded to meet the demand. JKC has the expertise to upgrade customer sites across all carriers and original equipment manufacturers (OEMs).
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_3}
              alt="New Site Builds and Site Modifications"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">New Site Builds and Site</h3>
              <h3 className="text-3xl font-bold">Modifications / Upgrades</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* Small Cell Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_4}
              alt="Small Cell & COW/COLT/NOW Deployments"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">Small Cell &</h3>
              <h3 className="text-3xl font-bold">COW/COLT/NOW</h3>
              <h3 className="text-3xl font-bold">Deployments</h3>
            </div>
          </div>
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-green-600 mb-6">Small Cell & COW/COLT/NOW Deployments</h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Telecommunications coverage in areas with limited access will require solutions with smaller footprints and rapid deployment. JKC is experienced in small cells and temporary telecom towers to cover these areas, including Cell on Wheel (COW) deployments, Cell on Light Trailer (COLT) deployments and Node on Wheels (NOW) deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* Commissioning and Integration Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-green-600 mb-6">Commissioning and Integration</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-8">
                JKC's team of experts has the knowledge and certifications needed to commission and integrate this equipment for a successful site launch.
              </p>
              
              <h2 className="text-4xl font-bold text-green-600 mb-6">Maintenance Services</h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Our teams are equipped to perform repairs on a variety of structures, including monopoles, guyed/self-support towers, rooftops, water tanks, small cells and in-building DAS sites. In addition, JKC offers a full suite of emergency restoration services.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_5}
              alt="Commissioning and Integration"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">Commissioning and</h3>
              <h3 className="text-3xl font-bold">Integration</h3>
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

export default WirelessConstruction;