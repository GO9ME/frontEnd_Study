import React from 'react'
import './Posts.css'

const Posts = ({posts}) => {
  return (
    <div className='posts-contents'>
      {
        posts.map(post=>(
          <div className='post-content'>
            <span>{post.id}</span>
            <h3 className='post-title'>{post.title}</h3>
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