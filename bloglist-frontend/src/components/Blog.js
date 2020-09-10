import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/blogReducer'

const Blog = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const blog = useSelector(state => state.blogs.find(blog => blog.id === id))
  const user = useSelector(state => state.user)

  const handleLike = (id) => {
    dispatch(likeBlog(id))
  }

  const handleRemove = (id) => {
    dispatch(deleteBlog(id))
    history.push('/blogs')
  }

  const isUserOwnerOfBlog = () => blog.user.username === user.username

  return blog === undefined ? <div>Loading blog post. If nothing is diplayed it is probably missing.</div> : (
    <div>
      <div>{blog.url}</div>
      <div>likes {blog.likes}
        <button onClick={() => handleLike(blog.id)}>like</button>
      </div>
      <div>added by {blog.user.name}</div>
      { isUserOwnerOfBlog() && <button onClick={() => handleRemove(blog.id)}>remove</button>}
    </div>
  )
}

export default Blog