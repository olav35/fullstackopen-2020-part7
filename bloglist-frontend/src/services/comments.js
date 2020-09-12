import axios from 'axios'

const baseUrl = '/api/blogs'

const getAllFromBlog = async (blogId) => {
  const response = await axios.get(`${baseUrl}/${blogId}/comment`)
  return response.data
}

const create = async (blogId, content) => {
  const response = await axios.post(`${baseUrl}/${blogId}/comment`, { content })
  return response.data
}

export default { getAllFromBlog, create }