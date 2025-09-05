// components/Navbar.jsx
import { useState } from 'react';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg' : 'bg-mustard-light'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="logo-placeholder">MW</div>
            <span className="text-xl font-bold text-mustard-brown ml-3">MustardWorks</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`transition-colors ${currentSection === 'home' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
              onClick={() => handleNavClick('home')}
            >Home</a>
            <a 
              href="#about" 
              className={`transition-colors ${currentSection === 'about' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
              onClick={() => handleNavClick('about')}
            >About Us</a>
            <a 
              href="#gallery" 
              className={`transition-colors ${currentSection === 'gallery' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
              onClick={() => handleNavClick('gallery')}
            >Gallery</a>
            <a 
              href="#contact" 
              className={`transition-colors ${currentSection === 'contact' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
              onClick={() => handleNavClick('contact')}
            >Contact Us</a>
            <a 
              href="#project" 
              className={`transition-colors ${currentSection === 'project' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
              onClick={() => handleNavClick('project')}
            >Project Submission</a>
            <button className="bg-mustard-dark text-white px-4 py-2 rounded-md hover:bg-mustard-brown transition-colors">
              Sign In / Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-mustard-brown focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg p-4">
            <a 
              href="#home" 
              className={`block py-2 ${currentSection === 'home' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => handleNavClick('home')}
            >Home</a>
            <a 
              href="#about" 
              className={`block py-2 ${currentSection === 'about' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => handleNavClick('about')}
            >About Us</a>
            <a 
              href="#gallery" 
              className={`block py-2 ${currentSection === 'gallery' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => handleNavClick('gallery')}
            >Gallery</a>
            <a 
              href="#contact" 
              className={`block py-2 ${currentSection === 'contact' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => handleNavClick('contact')}
            >Contact Us</a>
            <a 
              href="#project" 
              className={`block py-2 ${currentSection === 'project' ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => handleNavClick('project')}
            >Project Submission</a>
            <button className="mt-2 bg-mustard-dark text-white px-4 py-2 rounded-md w-full">
              Sign In / Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;