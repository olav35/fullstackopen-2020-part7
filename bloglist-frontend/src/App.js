import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import LoginForm from './components/LoginForm'
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

  return (
    user ? (
      <Router>
        <Switch>
          <Route path='/'>
            <Blogs />
          </Route>
        </Switch>
      </Router>
    ) : <LoginForm/>
  )
}

export default App
