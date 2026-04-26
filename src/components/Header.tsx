import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES, FALLBACK_IMAGES } from '../constants/images';

interface HeaderProps {
  isTransparent?: boolean;
}

const SEARCH_PAGES = [
  { title: 'Home', route: '/', category: 'General', keywords: 'home main jay krishna construction jkc' },
  { title: 'Our Company', route: '/our-company', category: 'About Us', keywords: 'company about us history overview jkc' },
  { title: 'About Us', route: '/about-us', category: 'About Us', keywords: 'about us mission vision values' },
  { title: 'Safety', route: '/safety', category: 'About Us', keywords: 'safety headpath training protection workers' },
  { title: 'Quality', route: '/quality', category: 'About Us', keywords: 'quality standards excellence assurance' },
  { title: 'Sustainability', route: '/sustainability', category: 'About Us', keywords: 'sustainability environment green community' },
  { title: 'Leadership', route: '/leadership', category: 'About Us', keywords: 'leadership team management directors executives' },
  { title: 'Wireline Construction', route: '/wireline-construction', category: 'Services', keywords: 'wireline fiber copper cable underground aerial construction' },
  { title: 'Wireless Construction', route: '/wireless-construction', category: 'Services', keywords: 'wireless 4g 5g macro cell small cell tower construction' },
  { title: 'Engineering', route: '/engineering', category: 'Services', keywords: 'engineering design survey network planning' },
  { title: 'Fulfillment', route: '/fulfillment', category: 'Services', keywords: 'fulfillment installation broadband in-home drop repair' },
  { title: 'Locating & SUE', route: '/locating-and-sue', category: 'Services', keywords: 'locating sue underground utility facility identification' },
  { title: 'Project Management', route: '/project-management', category: 'Services', keywords: 'project management delivery schedule budget' },
  { title: 'Maintenance & AMC', route: '/maintenance-and-amc', category: 'Services', keywords: 'maintenance amc restoration emergency telecom network' },
  { title: 'Civil Construction', route: '/civil-construction', category: 'Services', keywords: 'civil construction infrastructure road building' },
  { title: 'Connect to Our Careers', route: '/connect-to-our-careers', category: 'Careers', keywords: 'careers jobs employment opportunities work hiring' },
  { title: 'Talent Network', route: '/talent-network', category: 'Careers', keywords: 'talent network jobs apply resume career' },
  { title: 'People', route: '/people', category: 'Careers', keywords: 'people employees workforce team culture life' },
  { title: 'Contact Us', route: '/contact-us', category: 'Contact', keywords: 'contact us phone email address location office' },
  { title: 'Our Family of Companies', route: '/our-family-of-companies', category: 'About Us', keywords: 'family companies subsidiaries partners group' },
];

const Header: React.FC<HeaderProps> = ({ isTransparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
      if (e.key === 'Enter' && isSearchOpen && searchResults.length > 0) {
        navigate(searchResults[0].route);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, searchQuery]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setExpandedMenus({});
  };

  const toggleSubmenu = (menuKey: string) => {
    setExpandedMenus(prev => ({ ...prev, [menuKey]: !prev[menuKey] }));
  };

  const searchResults = searchQuery.trim().length > 0
    ? SEARCH_PAGES.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleResultClick = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSearchOpen(false);
  };

  const shouldBeTransparent = isTransparent && !isScrolled;

  return (
    <>
      <header className={`fixed top-0 w-full z-50 ${
        shouldBeTransparent
          ? 'bg-gradient-to-r from-white from-20% to-transparent'
          : 'bg-white shadow-lg'
      }`}>
        <nav className="w-full pl-5 pr-16 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={IMAGES.LOGO.MAIN}
                alt="JKC Logo"
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = FALLBACK_IMAGES.LOGO;
                }}
              />
              <span className={`text-2xl font-bold ${shouldBeTransparent ? 'text-white' : 'text-gray-900'}`}></span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Search
              className={`w-6 h-6 cursor-pointer ${shouldBeTransparent ? 'text-white' : 'text-gray-900'}`}
              onClick={() => setIsSearchOpen(true)}
            />
            <div className={`w-0.5 h-8 ${shouldBeTransparent ? 'bg-white' : 'bg-gray-900'}`}></div>
            <div className="cursor-pointer" onClick={toggleMenu}>
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 ${shouldBeTransparent ? 'bg-white' : 'bg-gray-900'}`}></div>
                <div className={`w-6 h-0.5 ${shouldBeTransparent ? 'bg-white' : 'bg-gray-900'}`}></div>
                <div className={`w-4 h-0.5 ${shouldBeTransparent ? 'bg-white' : 'bg-gray-900'}`}></div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Search Overlay ── */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col">
          {/* Top search panel */}
          <div className="bg-white px-10 sm:px-16 lg:px-24 pt-10 pb-6 shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <label className="text-4xl sm:text-5xl font-light text-gray-800">Search</label>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors mt-1"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder=""
              className="w-full text-xl sm:text-2xl text-gray-800 outline-none border-b-2 border-[#1769bc] pb-3 bg-transparent placeholder-gray-300"
            />
            <p className="text-gray-400 text-sm mt-3">Hit enter to search or ESC to close</p>

            {/* Results */}
            {searchResults.length > 0 && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.route}
                    onClick={() => handleResultClick(result.route)}
                    className="text-left px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-100"
                  >
                    <p className="text-[#1769bc] font-semibold text-base group-hover:underline">{result.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{result.category}</p>
                  </button>
                ))}
              </div>
            )}

            {searchQuery.trim().length > 0 && searchResults.length === 0 && (
              <p className="mt-6 text-gray-400 text-base">No results found for "<span className="text-gray-600">{searchQuery}</span>"</p>
            )}
          </div>

          {/* Backdrop */}
          <div
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />
        </div>
      )}

      {/* ── Slide-out Menu ── */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white transform transition-transform duration-500 ease-in-out z-50 shadow-2xl ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
            <Link to="/" className="flex items-center">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                <img
                  src={IMAGES.LOGO.MAIN}
                  alt="JKC Logo"
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = FALLBACK_IMAGES.LOGO;
                  }}
                />
              </div>
            </Link>
            <X className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" onClick={toggleMenu} />
          </div>

          <nav className="flex-1 overflow-y-auto py-4 space-y-6 scrollbar-hide">
            {/* Home */}
            <div className={`transform transition-all duration-700 delay-100 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <Link
                to="/"
                className="block text-gray-600 text-2xl hover:text-[#1769bc] transition-colors py-1 relative group"
                onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1769bc] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* About Us */}
            <div className={`transform transition-all duration-700 delay-200 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between cursor-pointer py-1" onClick={() => toggleSubmenu('about')}>
                  <span className="text-gray-600 text-2xl hover:text-[#1769bc] transition-colors relative group">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1769bc] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${expandedMenus.about ? 'rotate-180' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${expandedMenus.about ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}>
                  <div className="ml-6 space-y-2 text-base text-gray-600 pt-2">
                    {[['Our Company', '/our-company'], ['Safety', '/safety'], ['Quality', '/quality'], ['Sustainability', '/sustainability']].map(([label, to]) => (
                      <Link key={to} to={to} className="block hover:text-[#1769bc] transition-colors hover:translate-x-1 transform duration-300"
                        onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div className={`transform transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between cursor-pointer py-1" onClick={() => toggleSubmenu('services')}>
                  <span className="text-gray-600 text-2xl hover:text-[#1769bc] transition-colors relative group">
                    What We Do
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1769bc] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${expandedMenus.services ? 'rotate-180' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${expandedMenus.services ? 'max-h-60 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}>
                  <div className="ml-6 space-y-2 text-base text-gray-600 pt-2">
                    {[
                      ['Wireline Construction', '/wireline-construction'],
                      ['Wireless Construction', '/wireless-construction'],
                      ['Engineering', '/engineering'],
                      ['Fulfillment', '/fulfillment'],
                      ['Locating', '/locating-and-sue'],
                      ['Project Management', '/project-management'],
                      ['Maintenance & AMC', '/maintenance-and-amc'],
                    ].map(([label, to]) => (
                      <Link key={to} to={to} className="block hover:text-[#1769bc] transition-colors hover:translate-x-1 transform duration-300"
                        onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div className={`transform transition-all duration-700 delay-400 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between cursor-pointer py-2" onClick={() => toggleSubmenu('careers')}>
                  <span className="text-gray-600 text-2xl  hover:text-[#1769bc] transition-colors relative group">
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1769bc] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${expandedMenus.careers ? 'rotate-180' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${expandedMenus.careers ? 'max-h-32 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}>
                  <div className="ml-6 space-y-3 text-base text-gray-600 pt-3">
                    <Link to="/connect-to-our-careers" className="block hover:text-[#1769bc] transition-colors hover:translate-x-1 transform duration-300"
                      onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Connect to Our Careers</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className={`transform transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <Link
                to="/contact-us"
                className="block text-gray-600 text-2xl font hover:text-[#1769bc] transition-colors py-1 relative group"
                onClick={() => { toggleMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1769bc] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </nav>

          <div className={`mt-auto pt-6 border-t border-gray-200 transform transition-all duration-700 delay-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-base text-[#1769bc]">Jay Krishna Construction</p>
              <div className="text-gray-600 space-y-1 text-sm">
                <p>716, Millenium Business Hub</p>
                <p>Sarthana Jakatnaka Varachha Main Road</p>
                <p>Surat, Gujarat - 395006</p>
                <p className="mt-3"><span className="font-medium">T:</span> +91 9374701899</p>
                <p><span className="font-medium">E:</span> jaykrishna.surat@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
    </>
  );
};

export default Header;
