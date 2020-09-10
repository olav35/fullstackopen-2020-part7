import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const User = () => {
  const { id } = useParams()
  const user = useSelector(state => state.users.find(user => user.id === id))

  return user === undefined ? null : (
    <div>
      <h2>
        { user.name }
      </h2>
      <ul>
        {
          user.blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default User