import blogService from '../services/blogs'

const reducer = (state = [], action) => {
  if(action.type === 'INIT_BLOGS') {
    return action.data
  } else if(action.type === 'CREATE_BLOG') {
    return [...state, action.data]
  } else if(action.type === 'UPDATE_BLOG'){
    const newBlog = action.data.blog
    return state.map(blog => blog.id === newBlog.id ? newBlog : blog)
  } else if(action.type === 'DELETE_BLOG'){
    return state.filter(blog => blog.id !== action.data.id)
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

const findBlog = (id, getState) => getState()['blogs'].find(blog => blog.id === id)

export const likeBlog = (id) => {
  return async (dispatch, getState) => {
    const blogToLike = findBlog(id, getState)
    const likedBlog = { ...blogToLike, likes: blogToLike.likes + 1 } // set user to uid too ??
    await blogService.update({ ...likedBlog, user: likedBlog.user.id })
    dispatch({
      type: 'UPDATE_BLOG',
      data: { blog: likedBlog }
    })
  }
}

export const deleteBlog = (id) => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: { id }
    })
  }
}

export default reducer