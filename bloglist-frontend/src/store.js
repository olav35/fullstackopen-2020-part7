import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initalState = {
  notification: null
}

const reducer = (state = initalState, action) => {
  if(action.type === 'SET_NOTIFICATION') {
    const { message, type } = action.data
    return {
      ...state,
      notification: { message, type }
    }
  } else if(action.type === 'CLEAR_NOTIFICATION') {
    return {
      ...state,
      notification: null
    }
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

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store