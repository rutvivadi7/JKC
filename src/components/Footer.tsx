import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, FALLBACK_IMAGES } from '../constants/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto pl-8 pr-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info Section */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-2" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <img
                src={IMAGES.LOGO.MAIN}
                alt="JKC Logo"
                className="h-28 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = FALLBACK_IMAGES.LOGO;
                }}
              />
            </Link>
            <div className="text-gray-600 text-lg space-y-1 mb-6">
              <p className="font-medium text-xl text-gray-700">Jay Krishna Construction</p>
              <p>716, Millenium Business Hub</p>
              <p>Sarthana Jakatnaka</p>
              <p>Varrachha Main Road</p>
              <p>Surat, Gujarat - 395006</p>
            </div>
            <div className="text-gray-600 text-lg space-y-1 mb-6">
              <p>+91 9374701899</p>
              <p>jaykrishna.surat@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/in/jaykrishnaconstruction/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6 text-[#1769bc] cursor-pointer hover:text-[#1769bc]_700" />
              </a>
              <a
                href="https://www.instagram.com/jaykrishna_construction?igsh=bXE4eGN0b3I1dG92&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-pink-600 cursor-pointer hover:text-pink-700" />
              </a>
            </div>
          </div>

          {/* Company Section - Shifted more right */}
          <div className="md:ml-8 md:mt-8">
            <h4 className="font-medium text-gray-700 mb-4 text-xl -mt-5 hover:text-gray-500 transition-colors duration-300 cursor-pointer">Company</h4>
            <ul className="space-y-3 text-lg text-gray-600 mt-2">
              <li><Link to="/" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/about-us" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/our-company" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Our Company
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/safety" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Safety
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/quality" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Quality
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/sustainability" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Sustainability
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="md:mt-8">
            <h4 className="font-medium text-gray-700 mb-4 text-xl -mt-5 hover:text-gray-500 transition-colors duration-300 cursor-pointer">Services</h4>
            <ul className="space-y-3 text-lg text-gray-600 mt-2">
              <li><Link to="/wireline-construction" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Wireline Construction
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/wireless-construction" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Wireless Construction
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/engineering" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Engineering
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/fulfillment" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Fulfillment
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/locating-and-sue" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Locating
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/project-management" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Project Management
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/maintenance-and-amc" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Maintenance & AMC
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          {/* Careers and Contact Section */}
          <div className="md:mt-8">
            <h4 className="font-medium text-gray-700 mb-4 text-xl -mt-5 hover:text-gray-500 transition-colors duration-300 cursor-pointer">Careers</h4>
            <ul className="space-y-3 text-lg text-gray-600 mb-8 mt-2">
              <li><Link to="/connect-to-our-careers" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                About Our Careers
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>

            <h4 className="font-medium text-gray-700 mb-4 text-xl -mt-3 hover:text-gray-500 transition-colors duration-300 cursor-pointer">Contact</h4>
            <ul className="space-y-3 text-lg text-gray-600">
              <li><Link to="/contact-us" className="hover:text-gray-800 transition-colors relative group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-600 py-4">
        <div className="w-full">
          <p className="text-left text-base text-white pl-8 ml-0">
            © 2026 Jay Krishna Construction | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
