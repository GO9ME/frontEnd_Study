import React from 'react'
import './Posts.css'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {
  return (
    <div className='posts-contents'>
      <div>
          <Link to='/posts/newpost'
                className='newpostBtn'
          >글쓰기</Link>
      </div>
      {
        posts.map(post=>(
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
        ))
      }
    </div>
  )
}

export default Posts