import { createStore } from 'redux'

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

const store = createStore(reducer)

export default store