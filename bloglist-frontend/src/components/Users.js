import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUsers } from '../reducers/usersReducer'

const Table = styled.table`
  width: 500px;
`

const H2 = styled.h2`
  margin-bottom: 0;
`

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(initializeUsers())
  }, [useDispatch])

  return (
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
                <td>{name}</td>
                <td>{blogs.length}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users