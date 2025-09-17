"use client"

import { useState } from "react"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "IoT Smart Home System",
      category: "iot",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "A comprehensive smart home automation system with IoT integration and real-time monitoring.",
    },
    {
      id: 2,
      title: "E-Vehicle Prototype",
      category: "e-vehicles",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Next-generation electric vehicle with extended battery life and eco-friendly design.",
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Real-time data visualization with predictive analytics and machine learning capabilities.",
    },
    {
      id: 4,
      title: "Custom Gaming Laptop Upgrade",
      category: "hardware",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "High-performance gaming laptop with custom cooling solution and RGB lighting.",
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "software",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Cross-platform mobile application with intuitive user interface and seamless performance.",
    },
    {
      id: 6,
      title: "VLSI Chip Design",
      category: "vlsi",
      image:
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Advanced chip design with optimized power consumption and enhanced processing capabilities.",
    },
    {
      id: 7,
      title: "Industrial IoT Solution",
      category: "iot",
      image:
        "https://images.unsplash.com/photo-1563014959739-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Industrial monitoring system with predictive maintenance and real-time alerts.",
    },
    {
      id: 8,
      title: "E-Bike Conversion Kit",
      category: "e-vehicles",
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Convert any bicycle to electric with our innovative and easy-to-install conversion kit.",
    },
    {
      id: 9,
      title: "Machine Learning Model Training",
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Custom ML models trained on specialized datasets for accurate predictions and insights.",
    },
    {
      id: 10,
      title: "RAM & SSD Installation",
      category: "hardware",
      image:
        "https://images.unsplash.com/photo-1591799264318-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Professional hardware upgrade services for improved system performance and speed.",
    },
    {
      id: 11,
      title: "Web Application Development",
      category: "software",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Responsive web applications built with modern frameworks and cutting-edge technologies.",
    },
    {
      id: 12,
      title: "Integrated Circuit Design",
      category: "vlsi",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112cc5e6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description: "Custom integrated circuits designed for specific applications with optimal efficiency.",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "iot", name: "IoT" },
    { id: "e-vehicles", name: "E-Vehicles" },
    { id: "ai", name: "AI" },
    { id: "hardware", name: "Hardware" },
    { id: "software", name: "Software" },
    { id: "vlsi", name: "VLSI" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Project Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our innovative projects across various domains of technology and creativity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] aspect-square"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 transition-all duration-500 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className={`transform transition-all duration-500 ease-out ${
                      hoveredProject === project.id ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {project.category.toUpperCase()}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight">{project.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
