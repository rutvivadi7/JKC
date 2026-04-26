import React from 'react';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const WirelineConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-start">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.GALLERY.CONSTRUCTION_1}
            alt="Wireline construction work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/80 to-slate-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-left text-white px-6 mt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Wireline Construction</h1>
        </div>
      </section>

      {/* Video Section with Outside Plant Construction */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                We are your communications construction partner. Across the nation, we complete projects with our workers' talents augmented by our enterprise technology tools. Our local knowledge and national reach make JKC a trusted construction partner.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                We complete aerial and underground communications projects nationwide, in good weather and bad, from the smallest towns to the largest cities.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-8">
                JKC uses state-of-the-art equipment and tooling to complete the infrastructure to support advanced communications networks. We manage and document our work using in-house data collection technology to ensure the highest quality standards and provide our customers with real time visibility.
              </p>
              
              <h2 className="text-4xl font-bold text-green-600 mb-6">Fiber (FTTx)</h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                We are experts in the installation and use of fiber optic cable to residences, apartment buildings, businesses and cell sites. We complete complex construction projects consisting of aerial and underground deployments in varied, often difficult, working environments. Our services include everything from completing connections to subscribers to the construction of front haul and backhaul networks.
              </p>
            </div>
          </div>
          <div className="relative flex items-end" style={{height: '480px'}}>
            <video 
              className="w-full object-cover"
              style={{height: '340px'}}
              controls
              preload="metadata"
              poster={IMAGES.GALLERY.CONSTRUCTION_3}
            >
              <source src="/videos/Wireline Construction/video1.mp4" type="video/mp4" />
              <track 
                kind="subtitles" 
                src="/videos/Wireline Construction/video1.vtt" 
                srcLang="en" 
                label="English"
                default
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-6 left-6 text-white pointer-events-none">
              <h3 className="text-3xl font-bold">Outside Plant</h3>
              <h3 className="text-3xl font-bold">Construction</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Underground Construction Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_5}
              alt="Underground Construction"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">Underground</h3>
              <h3 className="text-3xl font-bold">Construction</h3>
            </div>
          </div>
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-green-600 mb-6">Underground</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Conduit and Manhole Construction</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Trenching / Plowing</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Horizontal Directional Drilling</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Micro-Trenching</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Vacuum Excavation</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Rock Saw</span></li>
                  </ul>
                </div>
                <div>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Trenching</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Cable Blowing / Pulling</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Fiber/Cable Splicing</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Fiber Hub Installation</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Customer Premise Service Installation</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Activation/certification/testing work</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* Aerial Construction Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <p className="text-gray-700 text-xl leading-relaxed mb-2">
                Whether it is a new network installation or an existing network upgrade our teams use the industry's most modern equipment and methods to perform top-tier services.
              </p>
              
              <h2 className="text-4xl font-bold text-green-600 mb-6">Aerial</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <ul className="text-base text-gray-700 space-y-3">
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Aerial Construction</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Make Ready</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Fiber and Copper Cable</span></li>
                  </ul>
                </div>
                <div>
                  <ul className="text-base text-gray-700 space-y-3 ">
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Pole Placement</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Pole Removal</span></li>
                    <li className="flex"><span className="opacity-50 mr-4">—</span><span>Drop Installation</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_7}
              alt="Aerial Construction"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">Aerial</h3>
              <h3 className="text-3xl font-bold">Construction</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* Splicing and Activation Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_8}
              alt="Splicing"
              className="w-full h-full object-cover"
              style={{minHeight: '400px'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold">Splicing</h3>
            </div>
          </div>
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-green-600 mb-6">Splicing and Activation</h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                As a top-tier fiber splicing solution provider, our fiber splicing specialists use the latest technology and methods to install or upgrade existing network, including node splits, fiber hub installation, fiber splicing, coax cable splicing, and activation/certification/testing work.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                We activate service for residential, commercial, or mixed-use premises, and educate end-users on-site to ensure they understand the advanced technology installed. Our ability to access cross-functional teams makes integrated delivery easy for our customers. Our fulfillment teams complete both fiber and coaxial installs and provide real time completion reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-4"></div>

      {/* Inside Plant Construction Section */}
      <section>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-white flex items-center">
            <div className="px-8 sm:px-10 lg:px-14 py-5 sm:py-6">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Inside Plant Construction</h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                JKC's team has installed voice and data inside plant infrastructure for small, medium, and large-scale projects. We have designed, engineered, and performed numerous telecommunication and data center build-outs in campus environments. Our technicians are certified in LAN & WAN network configuration and performing moves, adds, and changes (MAC) for voice and data networks.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.GALLERY.CONSTRUCTION_1}
              alt="Inside Plant Construction"
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

export default WirelineConstruction;