import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
      {/* <nav className='post-lnb-container'>
        <p>PostLayout</p>
        <ul>
            <li>
              <NavLink to="/posts" end >Posts</NavLink>
            </li>
            <li>
              <NavLink to="post">postDetail</NavLink>
            </li>
        </ul>
      </nav> */}
      <Outlet />
    </>
  )
}

export default PostLayout