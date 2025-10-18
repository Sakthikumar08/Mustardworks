import api from "./api"

export const galleryService = {
  // GET /gallery - Fetch all gallery items
  getItems: async (params = {}) => {
    try {
      console.log("[GALLERY SERVICE] Fetching gallery items with params:", params)
      const res = await api.get("/gallery", { params })
      const data = res?.data || res
      
      console.log("[GALLERY SERVICE] Gallery response:", {
        success: data?.success,
        itemsCount: data?.data?.galleryItems?.length || 0,
        hasPagination: !!data?.data?.pagination
      })
      
      // Backend returns: { success: true, data: { galleryItems: [...], pagination: {...} } }
      return data?.data?.galleryItems || data?.galleryItems || data || []
    } catch (error) {
      console.error("[GALLERY SERVICE] Failed to fetch items:", error.response?.data || error.message)
      throw error
    }
  },

  // GET /gallery/categories - Fetch all categories
  getCategories: async () => {
    try {
      console.log("[GALLERY SERVICE] Fetching gallery categories")
      const res = await api.get("/gallery/categories")
      const data = res?.data || res
      
      console.log("[GALLERY SERVICE] Categories response:", {
        success: data?.success,
        categoriesCount: data?.data?.categories?.length || 0
      })
      
      // Backend returns: { success: true, data: { categories: [...] } }
      return data?.data?.categories || data?.categories || data || []
    } catch (error) {
      console.error("[GALLERY SERVICE] Failed to fetch categories:", error.response?.data || error.message)
      throw error
    }
  },

  // GET /gallery/:id - Fetch single gallery item
  getById: async (id) => {
    try {
      console.log("[GALLERY SERVICE] Fetching gallery item:", id)
      const res = await api.get(`/gallery/${id}`)
      const data = res?.data || res
      
      console.log("[GALLERY SERVICE] Item response:", {
        success: data?.success,
        hasItem: !!data?.data?.galleryItem
      })
      
      // Backend returns: { success: true, data: { galleryItem: {...} } }
      return data?.data?.galleryItem || data?.galleryItem || data
    } catch (error) {
      console.error("[GALLERY SERVICE] Failed to fetch item:", error.response?.data || error.message)
      throw error
    }
  },
}

export default galleryService
