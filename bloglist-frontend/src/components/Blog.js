import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/blogReducer'
import { initializeComments } from '../reducers/commentReducer'

const Blog = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const blog = useSelector(state => state.blogs.find(blog => blog.id === id))
  const user = useSelector(state => state.user)
  const comments = useSelector(state => state.comments)

  useEffect(() => {
    blog && dispatch(initializeComments(blog.id))
  }, [dispatch, blog])

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
      {
        comments.blogId === id && comments.comments.length > 0 && (
          <div>
            <h3>comments</h3>
            <ul>
              {
                comments.comments.map(comment => <li key={comment.id}>{comment.content}</li>)
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Blog