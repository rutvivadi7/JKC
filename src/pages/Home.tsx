import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import Header from '../components/Header';
import ConnectionSection from '../components/ConnectionSection';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

const HERO_SLIDES = [
  '/images/gallery/jkc16.png',
  '/images/gallery/jkc13.png',
  '/images/gallery/jkc15.png'
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="min-h-screen bg-white">
      <Header isTransparent={true} />

      {/* ── Hero Slideshow ── */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">

        {/* Slides */}
        {HERO_SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ease-in-out ${
              i === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-[2]" />

        {/* Text — left-aligned, sitting above dots */}
        <div className="relative z-[3] w-full pl-4 sm:pl-8 lg:pl-12 xl:pl-16 pr-8 pb-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            The People <span style={{color: '#76bc21'}}>Building</span> Excellence
          </h1>
          <p className="text-base sm:text-lg text-white/80 tracking-widest uppercase">Working Together</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="w-full px-8 sm:px-12 lg:px-20 xl:px-28">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 sm:mb-8" style={{color: '#1769bc'}}>
              In the Air and Underground
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 text-base sm:text-xl leading-relaxed mb-4 sm:mb-6">
                JKC (Jay Krishna Construction) is a leading provider of specialty contracting services to the telecommunications infrastructure and utility industries throughout the India. We supply the single most critical resource telecom service providers need: skilled people. We serve the nation from hundreds of field offices and are unparalleled in scope and scale.
              </p>
              <p className="text-gray-600 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8">
                Our talented workforce of many employees provides a wide array of specialty services including program management; planning; engineering and design; aerial, underground, and wireless construction, maintenance and fulfillment services. Additionally, we provide underground facility locating services for various utilities, including telecommunications providers, and other construction and maintenance services for electric and gas utilities.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('/our-company');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white pl-8 pr-3 py-3 rounded-full flex items-center gap-4 transition-colors text-sm sm:text-base font-semibold tracking-wide uppercase"
              style={{backgroundColor: '#1769bc'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f5aa3'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1769bc'}
            >
              <span>Learn About Our Family of Companies</span>
              <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <img
          src={'images/gallery/jkc17.png'}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 via-blue-700/75 to-transparent"></div>
        <div className="relative z-10 pl-4 sm:pl-6 lg:pl-10 xl:pl-14 pr-8 sm:pr-12 lg:pr-20 xl:pr-28">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8" style={{color: '#76bc21'}}>
              What we stand for
            </h2>
            <p className="text-white text-base sm:text-xl leading-relaxed mb-8 sm:mb-10">
              Embracing a common vision of connecting worldwide, JKC proudly builds networks and partnerships nationwide. Our engaged workforce is key to meeting the needs of our customers by bringing and keeping communities online and connected. We live by our values at JKC. They guide our interactions with each other, with our customers, and with the communities where we live and work.
            </p>
            <button
              onClick={() => {
                navigate('/about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors text-base font-semibold"
            >
              About Us
            </button>
          </div>
        </div>
      </section>

      <ConnectionSection />
      <ServicesSection />



      <Footer />
    </div>
  );
};

export default Home;
