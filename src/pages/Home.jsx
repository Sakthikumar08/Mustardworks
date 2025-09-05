import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-mustard-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-mustard-brown mb-6">
              Turning Ideas into <span className="text-mustard-dark">Reality</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              MustardWorks is a dynamic hub for innovation, specializing in hardware, embedded systems, IoT, e-vehicles, AI, VLSI, app development, web solutions, and artistic endeavors.
            </p>
            <Link to="/project" className="bg-mustard-dark text-white px-6 py-3 rounded-md hover:bg-mustard-brown transition-colors inline-block">
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Innovation" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Technology" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-mustard-brown mb-6">Our Expertise</h2>
            <p className="text-lg text-gray-700 mb-6">
              We combine cutting-edge technology with creative solutions to deliver exceptional results for our clients. From IoT to AI, and from hardware to web development, we've got you covered.
            </p>
            <p className="text-lg text-gray-700">
              We now also specialize in upgrading and customizing laptops by installing RAM, ROM, Wi-Fi cards, and providing other technical solutions.
            </p>
            <Link to="/about" className="text-mustard-dark hover:text-mustard-brown font-medium mt-4 inline-block">
              Learn more about us &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-mustard-brown mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-mustard-light p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mustard-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 极速电玩城 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mustard-brown mb-2">Hardware & IoT</h3>
              <p className="text-gray-700">Custom hardware solutions and IoT implementations for your specific needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-mustard-light p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mustard-dark" fill="none" stroke="currentColor" viewBox="0 极速电玩城 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mustard-brown mb-2">AI & Software</h3>
              <p className="text-gray-700">Intelligent software solutions powered by artificial intelligence and machine learning.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-mustard-light p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mustard-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mustard-brown mb-2">Laptop Upgrades</h3>
              <p className="text-gray-700">Professional laptop upgrades including RAM, storage, and Wi-Fi card replacements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;