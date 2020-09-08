const reducer = (state = null, action) => {
  if(action.type === 'SET_NOTIFICATION') {
    const { message, type } = action.data
    return { message, type }
  } else if(action.type === 'CLEAR_NOTIFICATION') {
    return null
  } else {
    return state
  }
}

export const setNotification = (message, type = 'success', timeout = 5000) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { message, type }
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, timeout)
  }
}

export default reducer