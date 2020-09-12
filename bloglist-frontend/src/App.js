import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Users from './components/Users'
import Notification from './components/Notification'
import Blogs from './components/Blogs'
import { logout } from './reducers/userReducer'
import { loadUser } from './reducers/userReducer'
import Puffy from './components/Puffy'

const NavBar = styled.nav`
  background: lightgrey;
  padding: 1em;
`

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    user ? (
      <Router>
        <NavBar>
          <Link to="/blogs">blogs</Link> <Link to="/users">users</Link> {user.name} logged in <button onClick={handleLogout}>logout</button>
        </NavBar>
        <Notification/>
        <Puffy/>
        <h2>Blog app</h2>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/blogs'/>
          </Route>
          <Route path='/blogs'>
            <Blogs />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <div>
              There is nothing here. View <Link to='/'>blogs</Link>
            </div>
          </Route>
        </Switch>
      </Router>
    ) : <LoginForm/>
  )
}

export default App
