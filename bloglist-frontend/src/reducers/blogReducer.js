import blogService from '../services/blogs'

const reducer = (state = [], action) => {
  if(action.type === 'INIT_BLOGS') {
    return action.data
  } else if(action.type === 'CREATE_BLOG') {
    return [...state, action.data]
  } else {
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (title, author, url) => {
  return async dispatch => {
    const blog = await blogService.create({ title, author, url })
    dispatch({
      type: 'CREATE_BLOG',
      data: blog
    })
  }
}

export default reducer