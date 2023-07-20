import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = ({post}) => {
  return (
    <div className='post-content'>
            <span>{post.id}</span>
            <h3 className='post-title'>
              <Link  to={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <p className='post-body'>
              {
                post.body.length <= 150 ?  post.body : post.body.slice(0, 150) + '...'
              }
            </p>
            <span className='post-datetime'>{post.datetime}</span>
    </div>
  )
}

export default PostPage