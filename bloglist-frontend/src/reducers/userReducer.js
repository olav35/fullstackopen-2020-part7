import storage from '../utils/storage'
import loginService from '../services/login'
import { setNotification } from '../reducers/notificationReducer'

const reducer = (state = null, action) => {
  if(action.type === 'SET_USER') {
    return action.data.user
  } else if(action.type === 'DELETE_USER') {
    return null
  } else {
    return state
  }
}

export const loadUser = () => {
  const user = storage.loadUser()
  return {
    type: 'SET_USER',
    data: { user }
  }
}

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({ username, password })
      dispatch({
        type: 'SET_USER',
        data: { user }
      })
      dispatch(setNotification(`${user.name} welcome back!`))
      storage.saveUser(user)
    } catch(_) {
      dispatch(setNotification('wrong username/password', 'error'))
    }
  }
}

export const logout = () => {
  storage.logoutUser()
  return {
    type: 'DELETE_USER'
  }
}

export default reducer