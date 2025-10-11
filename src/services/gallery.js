import api from "./api"

export const galleryService = {
  // GET /gallery
  getItems: async (params = {}) => {
    const res = await api.get("/gallery", { params })
    return res.data
  },

  // GET /gallery/categories
  getCategories: async () => {
    const res = await api.get("/gallery/categories")
    return res.data
  },

  // GET /gallery/:id
  getById: async (id) => {
    const res = await api.get(`/gallery/${id}`)
    return res.data
  },
}

export default galleryService
