import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Users, Award, Target, Rocket, GraduationCap, Factory, ChevronRight, Eye } from 'lucide-react';
import img1 from "../assets/per-home.jpg"
import img2 from "../assets/about-img.jpg"

const Home = () => {
  const services = [
    {
      icon: "🔧",
      title: "Hardware & IoT",
      description: "Custom hardware solutions and IoT implementations for your specific needs",
      features: ["Embedded Systems", "PCB Design", "Sensor Integration"]
    },
    {
      icon: "🤖",
      title: "AI & Software",
      description: "Intelligent solutions powered by artificial intelligence and machine learning",
      features: ["Machine Learning", "Computer Vision", "Data Analytics"]
    },
    {
      icon: "💻",
      title: "Laptop Upgrades",
      description: "Professional laptop upgrades including RAM, storage, and Wi-Fi card replacements",
      features: ["RAM Upgrade", "Storage Solutions", "Hardware Optimization"]
    },
    {
      icon: "🎨",
      title: "Creative Services",
      description: "Portrait sketching, video editing, and creative project support",
      features: ["Portrait Art", "Video Editing", "Creative Design"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "15+", label: "Team Members" },
    { number: "8", label: "Domains Covered" }
  ];

  const futureExpansions = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "MustardLearn",
      subtitle: "Educational Platform",
      description: "Comprehensive learning platform offering internships and training programs with industry-recognized certifications",
      features: [
        "Embedded Systems & IoT",
        "VLSI & PCB Design", 
        "Web & App Development",
        "AI/ML Training",
        "Portrait Sketching",
        "Basic Electronics"
      ],
      status: "Coming Soon",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "MustardFab",
      subtitle: "Fabrication Unit", 
      description: "Advanced fabrication and prototyping facility specializing in wood and metal frameworks with precision engineering",
      features: [
        "CNC Machining",
        "3D Printing",
        "Laser Cutting",
        "Metal Fabrication",
        "Prototype Development",
        "Product Assembly"
      ],
      status: "In Planning",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400"
    }
  ];

  const roadmap = [
    { phase: "Phase 1", title: "MustardLearn Launch", description: "Launch training programs and certification courses", timeline: "Q2 2024" },
    { phase: "Phase 2", title: "MustardFab Setup", description: "Establish fabrication facility with basic equipment", timeline: "Q4 2024" },
    { phase: "Phase 3", title: "Advanced Labs", description: "Setup advanced electronics and IoT laboratories", timeline: "Q2 2025" },
    { phase: "Phase 4", title: "Industry Partnerships", description: "Collaborate with industry leaders for placements", timeline: "Q4 2025" }
  ];

  return (
    <div className="pt-20 pb-16 bg-app dark:bg-app-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Student-Driven Engineering Startup
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-app dark:text-white mb-6 leading-tight">
                Turning Ideas Into{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Reality
                </span>
              </h1>
              
              <p className="text-xl text-secondary dark:text-gray-300 mb-8 leading-relaxed">
                MustardWorks is built on one strong promise:{" "}
                <span className="text-primary dark:text-primary-light font-semibold">"As Your Expectations."</span>{" "}
                We deliver real-time engineering services and custom solutions exactly as our clients need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/project" 
                  className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 dark:hover:bg-primary/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-gray-300 dark:border-gray-600 text-app dark:text-white px-8 py-4 rounded-lg font-semibold hover:border-primary dark:hover:border-primary-light hover:text-primary dark:hover:text-primary-light transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-app dark:text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-secondary dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img1}
                  alt="MustardWorks Innovation"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-app/20 to-transparent dark:from-app-dark/20"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                    <Target className="w-6 h-6 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-app dark:text-white">As Your Expectations</div>
                    <div className="text-sm text-secondary dark:text-gray-400">Our Promise</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-accent dark:text-accent-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-app dark:text-white">Student-Driven</div>
                    <div className="text-sm text-secondary dark:text-gray-400">Innovation Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-app dark:text-white mb-4">Our Core Focus</h2>
            <p className="text-xl text-secondary dark:text-gray-300 max-w-2xl mx-auto">
              Built on the foundation of understanding and exceeding client expectations
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 dark:bg-white/5"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4">"As Your Expectations"</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We focus on delivering real-time engineering services and custom solutions exactly as our clients need—whether it is a service or a product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-app dark:bg-app-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-app dark:text-white mb-4">What We Do</h2>
            <p className="text-xl text-secondary dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive engineering and creative solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft dark:shadow-none border border-gray-100 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-app dark:text-white mb-3">{service.title}</h3>
                <p className="text-secondary dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary dark:bg-primary-light rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Expansion Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Future Vision
            </div>
            <h2 className="text-4xl font-bold text-app dark:text-white mb-4">Building The Future</h2>
            <p className="text-xl text-secondary dark:text-gray-300 max-w-2xl mx-auto">
              Expanding our horizons with innovative verticals to serve you better
            </p>
          </div>

          {/* Expansion Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {futureExpansions.map((expansion, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-soft dark:shadow-none border border-gray-100 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className={`absolute top-6 right-6 ${expansion.bgColor} ${expansion.textColor} px-3 py-1 rounded-full text-xs font-semibold`}>
                  {expansion.status}
                </div>

                {/* Header */}
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${expansion.color} text-white mr-4`}>
                    {expansion.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-app dark:text-white mb-1">{expansion.title}</h3>
                    <p className="text-secondary dark:text-gray-400">{expansion.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary dark:text-gray-300 mb-6 leading-relaxed">
                  {expansion.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {expansion.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-secondary dark:text-gray-400">
                      <ChevronRight className="w-4 h-4 text-primary dark:text-primary-light mr-1" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary dark:text-gray-400">Development Progress</span>
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${expansion.color} rounded-full transition-all duration-1000`}
                      style={{ width: expansion.status === 'Coming Soon' ? '65%' : '35%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-soft dark:shadow-none border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-app dark:text-white mb-8 text-center">Our Growth Roadmap</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
              
              {/* Roadmap Items */}
              <div className="space-y-12">
                {roadmap.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-gray-600">
                        <div className="text-sm font-semibold text-primary dark:text-primary-light mb-2">{item.phase}</div>
                        <h4 className="text-lg font-bold text-app dark:text-white mb-2">{item.title}</h4>
                        <p className="text-secondary dark:text-gray-300 text-sm mb-3">{item.description}</p>
                        <div className="text-xs font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full inline-block">
                          {item.timeline}
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-white dark:bg-gray-800 border-4 border-primary dark:border-primary-light rounded-full shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-app dark:text-white mb-6">Student Project Development</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Award className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-app dark:text-white mb-2">ECE & EEE Specialization</h4>
                    <p className="text-secondary dark:text-gray-300">Final-year projects, mini-projects, and hackathon prototypes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-app dark:text-white mb-2">Original Ideas</h4>
                    <p className="text-secondary dark:text-gray-300">Projects developed based on students' own ideas, ensuring innovation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Star className="w-4 h-4 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-app dark:text-white mb-2">Quality Assurance</h4>
                    <p className="text-secondary dark:text-gray-300">Fine-tuned, working final products that meet expectations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={img2}
                alt="Student Projects"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">Low Cost</div>
                <div className="text-lg">High Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Icon Section */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary to-accent p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold">Let's Build Together</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-3 p-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Journey?</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                    Join hundreds of satisfied clients who trusted MustardWorks with their vision.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="group bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-1 text-center inline-flex items-center justify-center"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/project"
                      className="border-2 border-gray-800 dark:border-gray-300 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex-1 text-center inline-flex items-center justify-center"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;