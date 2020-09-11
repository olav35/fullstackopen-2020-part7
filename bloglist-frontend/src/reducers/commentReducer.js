import commentService from '../services/comments'

const reducer = (state = {}, action) => {
  if( action.type === 'SET_COMMENTS' ){
    const { blogId, comments } = action.data
    return { blogId, comments }
  } else {
    return state
  }
}

export const initializeComments = (blogId) => {
  return async dispatch => {
    const comments = await commentService.getAllFromBlog(blogId)
    dispatch({
      type: 'SET_COMMENTS',
      data: {
        blogId,
        comments
      }
    })
  }
}

export default reducer