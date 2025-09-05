import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    { 
      id: 1, 
      title: 'IoT Smart Home System', 
      category: 'iot', 
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-video'
    },
    { 
      id: 2, 
      title: 'E-Vehicle Prototype', 
      category: 'e-vehicles', 
      image: 'https://images.unsplash.com/photo-1554744512-53d3极速电玩城e46152f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-[4/3]'
    },
    { 
      id: 3, 
      title: 'AI-Powered Analytics Dashboard', 
      category: 'ai', 
      image: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-video'
    },
    { 
      id: 4, 
      title: 'Custom Gaming Laptop Upgrade', 
      category: 'hardware', 
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8f极速电玩城GVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-[3/4]'
    },
    { 
      id: 5, 
      title: 'Mobile App Development', 
      category: 'software', 
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-[9/16]'
    },
    { 
      id: 6, 
      title: 'VLSI Chip Design', 
      category: 'vlsi', 
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3极速电玩城fDB8MHxwaG90by1wYWdlf极速电玩城Hx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-square'
    },
    { 
      id: 7, 
      title: 'Industrial IoT Solution', 
      category: 'iot', 
      image: 'https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-video'
    },
    { 
      id: 8, 
      title: 'E-Bike Conversion Kit', 
      category: 'e-vehicles', 
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-[4/5]'
    },
    { 
      id: 9, 
      title: 'Machine Learning Model Training', 
      category: 'ai', 
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-video'
    },
    { 
      id: 10, 
      title: 'RAM & SSD Installation', 
      category: 'hardware', 
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-[3/2]'
    },
    { 
      id: 11, 
      title: 'Web Application Development', 
      category: 'software', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-video'
    },
    { 
      id: 12, 
      title: 'Integrated Circuit Design', 
      category: 'vlsi', 
      image: 'https://images.unsplash.com/photo-1581094794329-c8112cc5e6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      aspect: 'aspect-square'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'iot', name: 'IoT' },
    { id: 'e-vehicles', name: 'E-Vehicles' },
    { id: 'ai', name: 'AI' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'software', name: 'Software' },
    { id: 'vlsi', name: 'VLSI' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 bg-mustard-light min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-mustard-brown mb-4">Project Gallery</h1>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore our innovative projects across various domains of technology and creativity.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-mustard-dark text-white'
                  : 'bg-white text-mustard-brown hover:bg-mustard-light'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${project.aspect} overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-mustard-dark text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {project.category.toUpperCase()}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                    <button className="text-white text-sm bg-mustard-brown hover:bg-mustard-dark px-3 py-1 rounded-md transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button (for future pagination) */}
        <div className="text-center mt-12">
          <button className="bg-mustard-dark text-white px-6 py-3 rounded-md hover:bg-mustard-brown transition-colors">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;