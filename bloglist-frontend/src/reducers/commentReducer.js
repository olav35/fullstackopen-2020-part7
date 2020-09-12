import commentService from '../services/comments'

const reducer = (state = {}, action) => {
  if( action.type === 'SET_COMMENTS' ){
    const { blogId, comments } = action.data
    return { blogId, comments }
  } else if( action.type === 'ADD_COMMENT') {
    const { blogId, comment } = action.data
    const comments = state.comments ? state.comments : []
    return { blogId, comments: [...comments, comment] }
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

export const createComment = (blogId, commentContent) => {
  return async dispatch => {
    const comment = await commentService.create(blogId, commentContent)
    dispatch({
      type: 'ADD_COMMENT',
      data: {
        blogId,
        comment
      }
    })
  }
}

export default reducer