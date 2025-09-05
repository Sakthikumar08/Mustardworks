// components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-mustard-brown mb-12">About MustardWorks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-mustard-dark mb-4">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded with a vision to bridge the gap between ideas and reality, MustardWorks has been at the forefront of technological innovation for over a decade. Our journey began with a small team of passionate engineers and has grown into a multidisciplinary hub of creativity and technical excellence.
            </p>
            <p className="text-gray-700">
              We believe that great ideas deserve exceptional execution. That's why we've assembled a team of experts across various domains to provide comprehensive solutions for our clients' most challenging problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-mustard-dark mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-mustard-light p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-mustard-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-mustard-brown">Innovation</h4>
                  <p className="text-gray-700">We constantly push boundaries and explore new possibilities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-mustard-light p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-mustard-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-mustard-brown">Collaboration</h4>
                  <p className="text-gray-700">We work closely with our clients to ensure their vision becomes reality.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-mustard-light p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-mustard-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-mustard-brown">Excellence</h4>
                  <p className="text-gray-700">We strive for the highest quality in everything we do.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;