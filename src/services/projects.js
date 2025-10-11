import api from "./api"

export const projectsService = {
  // POST /projects/submit
  submit: async (data) => {
    const res = await api.post("/projects/submit", data)
    return res.data
  },

  // GET /projects/my-projects
  getMine: async () => {
    const res = await api.get("/projects/my-projects")
    return res.data
  },

  // GET /projects/:id
  getById: async (id) => {
    const res = await api.get(`/projects/${id}`)
    return res.data
  },
}

export default projectsService
