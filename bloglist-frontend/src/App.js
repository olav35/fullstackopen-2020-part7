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

const Gradient = styled.div`
  background: linear-gradient(lightblue, #a1a8f5);
`

const H2 = styled.h2`
  margin-top: 0;
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
        <Gradient>
          <H2>Blog app</H2>
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

        </Gradient>
      </Router>
    ) : <LoginForm/>
  )
}

export default App
