import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleAuthClick = () => {
    navigate('/auth');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-mustard-light'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="logo-placeholder">MW</div>
            <span className="text-xl font-bold text-mustard-brown ml-3">MustardWorks</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
            >Home</Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
            >About Us</Link>
            <Link 
              to="/gallery" 
              className={`transition-colors ${isActive('/gallery') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
            >Gallery</Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
            >Contact Us</Link>
            <Link 
              to="/project" 
              className={`transition-colors ${isActive('/project') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown hover:text-mustard-dark'}`}
            >Project Submission</Link>
            <button 
              onClick={handleAuthClick}
              className="bg-gradient-to-r from-mustard-dark to-mustard-brown text-white px-4 py-2 rounded-md hover:from-mustard-brown hover:to-mustard-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sign In / Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-mustard-brown focus:outline-none">
              <svg className="w极速电玩城-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M极速电玩城4 6h16M4 12h16M4 18h极速电玩城16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg p-4">
            <Link 
              to="/" 
              className={`block py-2 ${isActive('/') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => setIsOpen(false)}
            >Home</Link>
            <Link 
              to="/about" 
              className={`block py-2 ${isActive('/about') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => setIsOpen(false)}
            >About Us</Link>
            <Link 
              to="/gallery" 
              className={`block py-2 ${isActive('/gallery') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => setIsOpen(false)}
            >Gallery</Link>
            <Link 
              to="/contact" 
              className={`block py-2 ${isActive('/contact') ? 'text-mustard-dark font-semibold' : 'text-mustard-brown'}`}
              onClick={() => setIsOpen(false)}
            >Contact Us</Link>
            <Link 
              to="/project" 
              className={`block py-2 ${isActive('/project') ? 'text-mustard-dark font-semibold' : '极速电玩城text-mustard-brown'}`}
              onClick={() => setIsOpen(false)}
            >Project Submission</Link>
            <button 
              onClick={() => {
                setIsOpen(false);
                handleAuthClick();
              }}
              className="mt-2 bg-gradient-to-r from-mustard-dark to-mustard-brown text-white px-4 py-2 rounded-md w-full shadow-md"
            >
              Sign In / Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;