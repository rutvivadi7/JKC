import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConnectionSection = () => {
  const navigate = useNavigate();

  const handleNavigationClick = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 px-8 sm:px-12 lg:px-20 xl:px-28">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1769bc] mb-4 text-left leading-tight">Connection with Intention</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our team's performance and innovation is trusted by several of the country's most prominent brands on a daily basis, and we are constantly striving to meet and exceed expectations. Our mission, <strong>To Connect People</strong>, guides our strategy to ensure we deliver for our people, communities and partners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Safety Card */}
          <div className="bg-white rounded-lg border border-gray-200 flex flex-col min-h-[520px]">
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1769bc] mb-6 mt-4 text-center">Safety</h3>
              <p className="text-xl text-gray-500 leading-relaxed flex-grow text-center px-2">
                We believe safety is more than rules and procedures – it's a mindset. Through our multi-step strategy and intensive training, we empower every worker to recognize hazards, mitigate risk, and enforce safe practices on every job site — so everyone gets home safe.
              </p>
              <div className="flex justify-center mt-8 mb-4">
                <button
                  onClick={() => handleNavigationClick('/safety')}
                  className="bg-[#1769bc] text-white pl-7 pr-2 py-2.5 rounded-full flex items-center gap-3 hover:bg-[#0f5aa3] transition-colors text-lg font-semibold"
                >
                  <span>Safety</span>
                  <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* People Card */}
          <div className="bg-white rounded-lg border border-gray-200 flex flex-col min-h-[520px]">
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1769bc] mb-6 mt-4 text-center">People</h3>
              <p className="text-xl text-gray-500 leading-relaxed flex-grow text-center px-2">
                Employees are our most important resource. We bring infrastructure to households and businesses alike. Each day, our people and teams work together to achieve incredible things, safely and with the highest standard, that positively impact the communities where we live and work.
              </p>
              <div className="flex justify-center mt-8 mb-4">
                <button
                  onClick={() => handleNavigationClick('/connect-to-our-careers')}
                  className="bg-[#1769bc] text-white pl-7 pr-2 py-2.5 rounded-full flex items-center gap-3 hover:bg-[#0f5aa3] transition-colors text-lg font-semibold"
                >
                  <span>People</span>
                  <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Our Reach Card */}
          <div className="bg-white rounded-lg border border-gray-200 flex flex-col min-h-[520px]">
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1769bc] mb-6 mt-4 text-center">Our Reach</h3>
              <p className="text-xl text-gray-500 leading-relaxed flex-grow text-center px-2">
                The reach of our expansive group of companies is built on our deep relationships with leading developers and government bodies. Dedicated to safety and quality, we have the partners to meet the needs of every client, no matter the scope or deadline. Our innovation ensures solutions that exceed expectations.
              </p>
              <div className="flex justify-center mt-8 mb-4">
                <button
                  onClick={() => handleNavigationClick('/our-company')}
                  className="bg-[#1769bc] text-white pl-7 pr-2 py-2.5 rounded-full flex items-center gap-3 hover:bg-[#0f5aa3] transition-colors text-lg font-semibold"
                >
                  <span>Our Family of Companies</span>
                  <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
