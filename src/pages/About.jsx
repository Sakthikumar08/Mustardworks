import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Kaviarasu S",
      role: "Founder & Proprietor",
      expertise: "Hardware, Embedded Systems, IoT, E-Vehicles, Laptop Upgrades",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Stephi Priscilla S",
      role: "ML Engineer",
      expertise: "Machine Learning and AI solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Renisha V",
      role: "VLSI Engineer",
      expertise: "VLSI design and verification",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMj极速电玩城fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mohamad Yahya",
      role: "App Developer",
      expertise: "Mobile & web application development",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Sakthi Kumar",
      role: "Website Developer",
      expertise: "Website design and development",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f极速电玩城fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Balaganesh",
      role: "Portrait Artist",
      expertise: "Custom portraits and artistic creations",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-mustard-brown mb-6">About MustardWorks</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            "Your Ideas, Our Circuits, Limitless Innovation" isn't just a slogan, it's the way we work.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-mustard-dark mb-6">Turning Ideas into Reality</h2>
            <p className="text-lg text-gray-700 mb-6">
              MustardWorks is a dynamic hub for innovation, turning ideas into reality across multiple domains of technology and creativity. Our team combines expertise in hardware, embedded systems, IoT, e-vehicles, AI, VLSI, app development, web solutions, and artistic endeavors to deliver cutting-edge solutions for our clients.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              MustardWorks is a versatile technology and innovation hub, turning ideas into practical solutions. Alongside our expertise in hardware, embedded systems, IoT, e-vehicles, AI, VLSI, app development, web solutions, and custom portraits, we now also specialize in upgrading and customizing laptops by installing RAM, ROM, Wi-Fi cards, and providing other technical solutions.
            </p>
            <p className="text-lg text-gray-700">
              We believe in creating technology and art that inspires, empowers, and makes a real difference.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Team Collaboration" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-mustard-dark text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">Since 2015</p>
              <p className="text-sm">Delivering innovative solutions</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-mustard-brown mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-mustard-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-mustard-brown">{member.name}</h3>
                  <p className="text-mustard-dark font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-700">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-mustard-brown mb-12">Our Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-mustard-light p-6 rounded-lg text-center">
              <div className="bg-mustard-dark p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2极速电玩城m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-mustard-brown">Hardware & IoT</h3>
            </div>
            <div className="bg-mustard-light p-6 rounded-lg text-center">
              <div className="bg-mustard-dark p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-mustard-brown">AI & ML</h3>
            </div>
            <div className="bg-mustard-light p-6 rounded-lg text-center">
              <div className="bg-mustard-dark p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/200极速电玩城/svg">
                  <path strokeLinecap极速电玩城="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-mustard-brown">VLSI</h3>
            </div>
            <div className="bg-mustard-light p-6 rounded-lg text-center">
              <div className="bg-mustard-dark p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold text-mustard-brown">App Development</h3>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-mustard-dark text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Let's collaborate to create innovative solutions that make a real difference.</p>
          <Link to="/contact" className="bg-white text-mustard-dark px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;