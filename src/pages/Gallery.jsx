"use client"

import { useEffect, useMemo, useState } from "react"
import { galleryService } from "../services/gallery"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)

  // new: API-backed state
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([{ id: "all", name: "All Projects" }])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let isMounted = true

    const load = async () => {
      try {
        setLoading(true)
        setError("")
        // fetch categories and items in parallel
        const [cats, list] = await Promise.all([
          galleryService.getCategories().catch(() => []),
          galleryService.getItems().catch(() => []),
        ])

        if (!isMounted) return

        // normalize categories: accept string[] or {id/name}[]
        const normalizedCats =
          Array.isArray(cats) && cats.length > 0
            ? cats.map((c) =>
                typeof c === "string"
                  ? { id: c, name: c }
                  : { id: c.id || c.slug || c.value || c.name, name: c.name || c.label || c.id },
              )
            : []

        setCategories([{ id: "all", name: "All Projects" }, ...normalizedCats])
        setItems(Array.isArray(list) ? list : [])
      } catch (e) {
        setError("Failed to load gallery. Please try again.")
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    load()
    return () => {
      isMounted = false
    }
  }, [])

  const normalizedItems = useMemo(() => {
    return items.map((it) => ({
      id: it.id || it._id || Math.random().toString(36).slice(2),
      title: it.title || it.name || "Untitled",
      category: it.category || it.type || "other",
      image: it.image || it.imageUrl || (Array.isArray(it.images) && it.images[0]) || "/project-management-team.png",
      description: it.description || it.summary || "",
    }))
  }, [items])

  const filteredProjects =
    selectedCategory === "all"
      ? normalizedItems
      : normalizedItems.filter(
          (project) => String(project.category).toLowerCase() === String(selectedCategory).toLowerCase(),
        )

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[color:var(--primary)]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-app relative">
      <div className="animated-bg pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-app mb-4">Project Gallery</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
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
                  ? "bg-[color:var(--primary)] text-white shadow-soft"
                  : "bg-surface text-secondary hover:text-app shadow-subtle border border-token"
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
              className="group relative bg-surface rounded-xl overflow-hidden shadow-subtle hover:shadow-lift transition-all duration-500 transform hover:scale-[1.02] aspect-square"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg?height=400&width=400&query=project"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
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
                    <span className="inline-block bg-[color:var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {String(project.category).toUpperCase()}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight">{project.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-secondary mt-12">No projects found in this category.</p>
        )}
      </div>
    </div>
  )
}

export default Gallery
