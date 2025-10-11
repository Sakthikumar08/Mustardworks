import { Link } from "react-router-dom";
import img1 from "../assets/per-home.jpg"
import img2 from "../assets/about-img.jpg"

const Home = () => {
  return (
    <div className="pt-24 pb-16 bg-app">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-app mb-6">
              Turning Ideas into <span className="text-[color:var(--primary)]">Reality</span>
            </h1>
            <p className="text-lg text-secondary mb-6">
              MustardWorks is a dynamic hub for innovation, specializing in hardware, embedded systems, IoT, e-vehicles,
              AI, VLSI, app development, web solutions, and artistic endeavors.
            </p>
            <Link to="/project" className="btn-primary inline-block">
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Innovation"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src={img2}
              alt="Technology"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-app mb-6">Our Expertise</h2>
            <p className="text-lg text-secondary mb-6">
              We combine cutting-edge technology with creative solutions to deliver exceptional results for our clients.
              From IoT to AI, and from hardware to web development, we've got you covered.
            </p>
            <p className="text-lg text-secondary">
              We now also specialize in upgrading and customizing laptops by installing RAM, ROM, Wi-Fi cards, and
              providing other technical solutions.
            </p>
            <Link to="/about" className="text-app hover:text-[color:var(--primary)] font-medium mt-4 inline-block">
              Learn more about us &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-app mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-surface p-6 rounded-lg shadow-soft">
              <div className="bg-[color:var(--primary-ghost)] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[color:var(--primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-app mb-2">Hardware & IoT</h3>
              <p className="text-secondary">
                Custom hardware solutions and IoT implementations for your specific needs.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-soft">
              <div className="bg-[color:var(--primary-ghost)] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[color:var(--primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-app mb-2">AI & Software</h3>
              <p className="text-secondary">
                Intelligent software solutions powered by artificial intelligence and machine learning.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-soft">
              <div className="bg-[color:var(--primary-ghost)] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[color:var(--primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-app mb-2">Laptop Upgrades</h3>
              <p className="text-secondary">
                Professional laptop upgrades including RAM, storage, and Wi-Fi card replacements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
