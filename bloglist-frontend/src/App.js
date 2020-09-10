import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Users from './components/Users'
import Notification from './components/Notification'
import { logout } from './reducers/userReducer'
import Blogs from './components/Blogs'

import { initializeBlogs } from './reducers/blogReducer'
import { loadUser } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    user ? (
      <Router>
        <h2>blogs</h2>
        <Notification/>
        <p>
          {user.name} logged in <button onClick={handleLogout}>logout</button>
        </p>
        <Switch>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Blogs />
          </Route>
        </Switch>
      </Router>
    ) : <LoginForm/>
  )
}

export default App
