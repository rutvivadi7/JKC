import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IMAGES } from '../constants/images';

const ConnectToOurCareers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-[67vh] flex items-center justify-center px-0">
        <div className="absolute inset-0">
          <img 
            src={'images/gallery/jkc52.png'}
            alt="Connect to a Career With a Purpose"
            className="w-full h-full object-cover"
          />
        </div>
         <div className="absolute inset-0 bg-gray-400/60"></div>
        <div className="relative z-10 text-white mt-16 px-8 sm:px-12 lg:px-20 xl:px-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Connect to Your Future Today</h1>
        </div>
      </section>

      {/* Connect to Your Next Opportunity Section */}
      <section className="bg-blue-600 py-6 sm:py-7">
        <div className="px-8 sm:px-12 lg:px-20 xl:px-28 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Connect to Your Next Opportunity</h2>
        </div>
      </section>

      {/* Combined What we stand for and Values Section */}
      <section className="py-10 px-4 bg-white">
        <div className="w-full px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              {/* What we stand for */}
              <div>
                <h2 className="text-4xl font-bold text-[#1769bc] mb-6">Connect to a Career With a Purpose</h2>
                <p className="text-gray-700 mb-6 text-xl leading-relaxed">
                  The connections we make here are meaningful. Our teams connect communities, cities, and families across the country and we’re proud of that. Our people have stable, long-lasting careers because we prioritize safety, security, and support. People rely on us and we always show up.
                </p>
                <p className="text-gray-700 mb-6 text-xl leading-relaxed">
                  The values guide us in our dealings with one another, with our customers, and with the 
                  communities where we live.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Team members strive to treat each other with respect, value different perspectives and 
                  experiences; keep our and others' safety at the forefront of our minds, and uphold the 
                  highest ethical standards.
                </p>
                <p className="text-gray-700 mb-6 text-xl leading-relaxed">
                We prioritize your safety, well-being, and growth with ample support, rewards, and learning opportunities. Our supportive network spans the country, ensuring stable careers for our team while delivering excellent work that connects teams, families and communities.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                We hold ourselves accountable to one another and treat others with respect. This respect 
                takes the form of our commitment to fair safety and employment conditions, as well as the 
                fundamental protections that empower our diverse company.
              </p>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              {/* Professional Values Diagram - Even larger size */}
              <div className="relative w-full h-[550px]">
                <img 
                  src={'images/gallery/jkc53.png'}
                  alt="Jay Krishna Construction Values Diagram"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Job Categories Section */}
      <section style={{ backgroundColor: '#dce5f3' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-600 mb-12">Job Categories just for you</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Corporate Support Card */}

            
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={'images/gallery/jkc54.png'}
                alt="Corporate Support"
                className="w-full h-[500px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-2">Corporate Support</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 via-[#1769bc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Corporate Support</h3>
                  <p className="text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our Corporate Support teams provide expertise to ensure success across the company. These teams include Human Resources, Legal, Finance, Marketing, Business Development.</p>
                </div>
              </div>
            </div>

            {/* Operations Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={'images/gallery/jkc57.png'}
                alt="Operations"
                className="w-full h-[500px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-2">Operations</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 via-[#1769bc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Operations</h3>
                  <p className="text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Our Operations team provides expertise in the following areas: program and project management, safety, fleet and business development.</p>
                </div>
              </div>
            </div>

            {/* Technology Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={'images/gallery/jkc58.png'}
                alt="Technology"
                className="w-full h-[500px] object-cover group-hover:scale-125 transition-all duration-[5000ms] ease-linear transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-2">Technology</h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1769bc]/80 via-[#1769bc]/40 via-[#1769bc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">Technology</h3>
                  <p className="text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">We have a robust technology team supporting systems, ongoing maintenance, UX, as well application development and system architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-5 gap-4 items-center">
          <div className="text-white text-center flex flex-col justify-center md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 leading-tight">Connecting You to Possibilities</h2>
            <p className="text-xl mb-8">Join Our Talent Network!</p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  navigate('/talent-network');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors flex items-center gap-2"
              >
                Connect with us
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative md:col-span-3 md:pr-0 md:pl-8">
            <img 
              src={'images/gallery/jkc56.png'}
              alt="Career opportunities"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg ml-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConnectToOurCareers;