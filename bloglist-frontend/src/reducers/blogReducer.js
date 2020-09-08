import blogService from '../services/blogs'

const reducer = (state = [], action) => {
  if(action.type === 'INIT_BLOGS') {
    return action.data
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

export default reducer