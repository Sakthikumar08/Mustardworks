// components/Home.jsx
const Home = ({ setCurrentSection }) => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-mustard-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-mustard-brown mb-6">
              Turning Ideas into <span className="text-mustard-dark">Reality</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              MustardWorks is a dynamic hub for innovation, specializing in hardware, embedded systems, IoT, e-vehicles, AI, VLSI, app development, web solutions, and artistic endeavors.
            </p>
            <button className="bg-mustard-dark text-white px-6 py-3 rounded-md hover:bg-mustard-brown transition-colors">
              Get Started
            </button>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;