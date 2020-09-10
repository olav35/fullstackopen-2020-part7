import React from 'react'
import styled from 'styled-components'
import blogs from '../services/blogs'

const Table = styled.table`
  width: 500px;
`

const Users = () => {
  const dummyUsers = [
    {
      id: 0,
      name: 'Arto Hellas',
      blogsCount: 6
    },
    {
      id: '1',
      name: 'Matti Luukkainen',
      blogsCount: 2
    }
  ]
  return (
    <div>
      <h2>Users</h2>
      <Table>
        <thead>
          <tr>
            <td></td>
            <td><b>blogs created</b></td>
          </tr>
        </thead>
        <tbody>
          {
            dummyUsers.map(({ id, name, blogsCount }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{blogsCount}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users