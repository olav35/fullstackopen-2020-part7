import axios from 'axios'

const baseUrl = '/api/blogs'

const getAllFromBlog = async (blogId) => {
  const response = await axios.get(`${baseUrl}/${blogId}/comment`)
  return response.data
}

export default { getAllFromBlog }