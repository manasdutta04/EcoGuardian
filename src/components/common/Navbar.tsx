import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`flex items-center transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              <div className={`p-2 rounded-lg mr-2 transition-all transform duration-300 ${
                isScrolled ? 'bg-primary-light/20' : 'bg-white/10'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.2 2.5a1 1 0 011-.8h1.5a1 1 0 011 .8l.3 1.5h1.3l.3-1.5a1 1 0 011-.8h1.5a1 1 0 011 .8l.3 1.5H15a1 1 0 011 1v1a1 1 0 01-1 1h-.3l-.2 1H16a1 1 0 011 1v1a1 1 0 01-1 1h-1.5l-.2 1H16a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-.9-.7l-.1-.3H7l-.1.3a1 1 0 01-.9.7H4a1 1 0 01-1-1v-1a1 1 0 011-1h1.5l-.2-1H4a1 1 0 01-1-1v-1a1 1 0 011-1h1.5l-.2-1H4a1 1 0 01-1-1V4a1 1 0 011-1h2.6l.3-1.5z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">EcoGuardian</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-5">
            {[
              { path: '/habitat-monitoring', label: 'Habitat Monitoring' },
              { path: '/species-tracking', label: 'Species Tracking' },
              { path: '/carbon-footprint', label: 'Carbon Footprint' },
              { path: '/reforestation', label: 'Reforestation' },
              { path: '/community', label: 'Community' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? isScrolled 
                      ? 'text-primary' 
                      : 'text-white font-semibold'
                    : isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 transition-transform rounded-full duration-300 group-hover:scale-x-100 ${
                    isActive(item.path) ? 'scale-x-100 bg-primary' : 'bg-primary'
                  }`}
                ></span>
              </Link>
            ))}
            
            <button 
              className={`ml-4 px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 duration-300 ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-xl' 
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              Sign In
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } focus:outline-none transition-colors duration-300`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-full bg-primary-dark p-6 shadow-2xl transition-all duration-500 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`} 
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="text-white text-xl font-bold">EcoGuardian</div>
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-gray-200"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4 mt-8">
            {[
              { path: '/habitat-monitoring', label: 'Habitat Monitoring' },
              { path: '/species-tracking', label: 'Species Tracking' },
              { path: '/carbon-footprint', label: 'Carbon Footprint' },
              { path: '/reforestation', label: 'Reforestation' },
              { path: '/community', label: 'Community' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-white hover:bg-primary/30'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <button className="mt-6 w-full px-4 py-3 rounded-lg text-base font-medium bg-white text-primary hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 