import userService from '../services/user'

const reducer = (state = [], action) => {
  if(action.type === 'INIT_USERS') {
    return action.data.users
  } else {
    return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: { users }
    })
  }
}

export default reducer