import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mustard-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="logo-placeholder-footer">MW</div>
              <span className="text-2xl font-bold ml-3">MustardWorks</span>
            </div>
            <p className="text-mustard-light mb-6 max-w-md">
              Turning ideas into reality across multiple domains of technology and creativity. 
              "Your Ideas, Our Circuits, Limitless Innovation"
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-mustard-dark hover:bg-mustard-light text-white p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.极速电玩城195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12极速电玩城h2.773l-.443 2.89极速电玩城h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="bg-mustard-dark hover:bg-mustard-light text-white p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-mustard-dark hover:bg-mustard-light text-white p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5极速电玩城 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3极速电玩城v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-mustard-dark hover:bg-mustard-light text-white p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-mustard-dark">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-mustard-light hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-mustard-light hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-mustard-light hover:text-white transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-mustard-light hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-mustard-light hover:text-white transition-colors duration-300">
                  Project Submission
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-mustard-dark">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-mustard-dark mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-mustard-light">Hardware & Embedded Systems</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-mustard-dark mr-2" fill="none" stroke="currentColor" view极速电玩城Box="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-mustard-light">IoT Solutions</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-mustard-dark mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13极速电玩城l4 4L19 7" />
                </svg>
                <span className="text-mustard-light">AI & Machine Learning</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-mustard-dark mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-mustard-light">VLSI Design</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-mustard-dark mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-mustard-light">Laptop Upgrades</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-mustard-dark">
              Contact Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-mustard-dark p-2 rounded-full mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502极速电玩城l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-mustard-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-mustard-dark p-2 rounded-full mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-mustard-light">info@mustardworks.com</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-mustard-dark p-2 rounded-full mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke极速电玩城Linecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 极速电玩城0 11-6 0 3 3 0 016 0极速电玩城z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-mustard-light">123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-mustard-dark p-2 rounded-full mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-mustard-light">Mon-Fri: 9AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-mustard-dark">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-mustard-light">Get the latest updates on our services and projects</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-l-lg focus:outline-none text-gray-800 w-full md:w-64"
              />
              <button className="bg-mustard-dark hover:bg-mustard-light text-white px-6 py-3 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-mustard-dark text-center">
          <p>&copy; {new Date().getFullYear()} MustardWorks. All rights reserved. | <a href="#" className="text-mustard-light hover:text-white transition-colors duration-300">Privacy Policy</a> | <a href="#" className="text-mustard-light hover:text-white transition-colors duration-300">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;