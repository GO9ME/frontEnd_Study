import React, { useContext } from 'react'
import './Posts.css'
import { Link } from 'react-router-dom'
import { PostPage } from '../components'
import { PostsContext }  from '../contexts/PostsContextProvider'

const Posts = ( ) => {
  const { posts } = useContext(PostsContext);
  
  return (
    <div className='posts-contents'>
      <div>
          <Link to='/posts/newpost'
                className='newpostBtn'
          >글쓰기</Link>
      </div>
      {
        posts.map(post=>(
            <PostPage post={post} />
        ))
      }
    </div>
  )
}

export default Posts