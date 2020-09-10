import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUsers } from '../reducers/usersReducer'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import User from './User'

const Table = styled.table`
  width: 500px;
`

const H2 = styled.h2`
  margin-bottom: 0;
`

const Users = () => {
  const { path } = useRouteMatch()
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <User />
      </Route>
      <Route path={path}>
        <div>
          <H2>Users</H2>
          <Table>
            <thead>
              <tr>
                <td></td>
                <td><b>blogs created</b></td>
              </tr>
            </thead>
            <tbody>
              {
                users.map(({ id, name, blogs }) => (
                  <tr key={id}>
                    <td><Link to={`${path}/${id}`}>{name}</Link></td>
                    <td>{blogs.length}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </Route>
    </Switch>
  )
}

export default Users