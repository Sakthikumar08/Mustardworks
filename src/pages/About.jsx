import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter, Youtube, Figma } from 'lucide-react';
import img from "../assets/def_pic.png"

import img3 from "../assets/img2.jpg"

const About = () => {
  const teamMembers = [
  {
    name: "Kaviarasu S",
    role: "Founder & Proprietor",
    expertise: "Hardware, Embedded Systems, VLSI, IoT, E-Vehicles specialist with extensive industry experience",
    skills: ["Hardware", "Embedded Systems", "VLSI", "IoT", "E-Vehicles"],
    socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Stephi Priscilla S", 
    role: "ML Engineer",
    expertise: "Machine Learning specialist focused on AI model development and data-driven solutions",
    skills: ["Machine Learning", "Python", "AI Models", "Data Science"],
    socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Renisha V",
    role: "ECE Student Intern", 
    expertise: "Electronics and Communication Engineering student with passion for hardware innovation",
    skills: ["Electronics", "Communication", "Hardware", "Embedded"],
    socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Viswanathan S",
    role: "Core Team Member",
    expertise: "Dedicated professional with strong work ethic and commitment to project excellence",
    skills: ["Project Management", "Team Coordination", "Quality Assurance"],
    socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Rajesh R",
    role: "Technical Solutions Specialist",
    expertise: "Laptop and hardware technical solutions expert with comprehensive troubleshooting skills",
    skills: ["Hardware Repair", "Technical Support", "Troubleshooting", "Laptop Solutions"],
socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Sakthikumar P",
    role: "Website Developer",
    expertise: "Full-stack web development with modern frameworks and responsive design expertise",
    skills: ["React", "Node.js", "JavaScript", "Web Development"],
   socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Muhammad Yahyaa A",
    role: "App Developer & ML Engineer",
    expertise: "Cross-platform mobile application development combined with machine learning integration",
    skills: ["Mobile Development", "ML Integration", "Flutter", "React Native"],
    socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Balaganesh M",
    role: "Portrait Artist",
    expertise: "Professional portrait sketching with exceptional attention to detail and artistic expression",
    skills: ["Portrait Sketching", "Artistic Design", "Creative Visualization"],
   socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  },
  {
    name: "Srinath K",
    role: "Biotech Engineer",
    expertise: "Biotechnology engineering with focus on innovative solutions in healthcare and life sciences",
    skills: ["Biotechnology", "Healthcare", "Research", "Life Sciences"],
    socialLinks: [
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
]
  }
];

  return (
    <div className="pt-24 pb-16 bg-app">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-app mb-6">About MustardWorks</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {"\"Your Ideas, Our Circuits, Limitless Innovation\" isn't just a slogan, it's the way we work."}
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-app mb-6">Turning Ideas into Reality</h2>
            <p className="text-lg text-secondary mb-6">
              MustardWorks is a dynamic hub for innovation, turning ideas into reality across multiple domains of
              technology and creativity. Our team combines expertise in hardware, embedded systems, IoT, e-vehicles, AI,
              VLSI, app development, web solutions, and artistic endeavors to deliver cutting-edge solutions for our
              clients.
            </p>
            <p className="text-lg text-secondary mb-6">
              MustardWorks is a versatile technology and innovation hub, turning ideas into practical solutions.
              Alongside our expertise in hardware, embedded systems, IoT, e-vehicles, AI, VLSI, app development, web
              solutions, and custom portraits, we now also specialize in upgrading and customizing laptops by installing
              RAM, ROM, Wi-Fi cards, and providing other technical solutions.
            </p>
            <p className="text-lg text-secondary">
              We believe in creating technology and art that inspires, empowers, and makes a real difference.
            </p>
          </div>
          <div className="relative">
            <img
              src={img3}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[color:var(--primary)] text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">Since 2015</p>
              <p className="text-sm">Delivering innovative solutions</p>
            </div>
          </div>
        </div>

       {/* Team Section */}
{/* Team Section */}
<div className="mb-20">
  <h2 className="text-4xl font-bold text-center text-app mb-4">Meet Our Innovators</h2>
  <p className="text-secondary text-center text-lg mb-12 max-w-2xl mx-auto">
    The brilliant minds behind MustardWorks, dedicated to turning your ideas into exceptional digital solutions
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="group relative bg-surface rounded-2xl overflow-hidden shadow-subtle hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      >
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Profile Image Container with Elegant Frame */}
        <div className="relative overflow-hidden pt-8 px-8">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-2">
            <img 
              src={img}
              alt={member.name}
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 text-center">
          {/* Name & Role with Professional Typography */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-app group-hover:text-primary transition-colors duration-300 mb-1">
              {member.name}
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-2 opacity-60"></div>
            <p className="text-accent font-semibold text-sm tracking-wide">{member.role}</p>
          </div>

          {/* Expertise */}
          <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
            {member.expertise}
          </p>

          {/* Skills Tags */}
          {member.skills && (
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {member.skills.slice(0, 3).map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2.5 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
              {member.skills.length > 3 && (
                <span className="px-2.5 py-1 bg-secondary/5 text-secondary text-xs rounded-full font-medium border border-secondary/20">
                  +{member.skills.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Social Links - Professional Style */}
          <div className="flex justify-center space-x-3">
            {member.socialLinks?.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg group/social"
                aria-label={`Connect with ${member.name} on ${social.platform}`}
              >
                <span className="text-lg group-hover/social:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Professional Accent Elements */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>
      </div>
    ))}
  </div>

        {/* Expertise Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-app mb-12">Our Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-lg text-center shadow-subtle">
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
              <h3 className="font-semibold text-app">Hardware & IoT</h3>
            </div>
            <div className="bg-surface p-6 rounded-lg text-center shadow-subtle">
              <div className="bg-[color:var(--primary-ghost)] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[color:var(--primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-app">AI & ML</h3>
            </div>
            <div className="bg-surface p-6 rounded-lg text-center shadow-subtle">
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
              <h3 className="font-semibold text-app">VLSI</h3>
            </div>
            <div className="bg-surface p-6 rounded-lg text-center shadow-subtle">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-app">App Development</h3>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[color:var(--primary)] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {"Let's collaborate to create innovative solutions that make a real difference."}
          </p>
          <Link
            to="/contact"
            className="bg-white text-[color:var(--primary)] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;
