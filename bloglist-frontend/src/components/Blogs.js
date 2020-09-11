import React, { useEffect } from 'react'
import Blog from './Blog'
import Togglable from './Togglable'
import NewBlog from './NewBlog'
import { useSelector, useDispatch } from 'react-redux'
import { initializeBlogs } from '../reducers/blogReducer'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  // const user = useSelector(state => state.user)
  const blogFormRef = React.createRef()
  const dispatch = useDispatch()
  const { path } = useRouteMatch()
  const byLikes = (b1, b2) => b2.likes - b1.likes

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        individual
        <Blog />
      </Route>
      <Route path={path}>
        <Togglable buttonLabel='create new blog'  ref={blogFormRef}>
          <NewBlog />
        </Togglable>
        <ul>
          {
            blogs.sort(byLikes).map(blog => (
              <li key={blog.id}>
                <Link to={`${path}/${blog.id}`}>{blog.title}</Link>
              </li>
            ))
          }
        </ul>
      </Route>
    </Switch>
  )
}

export default Blogs