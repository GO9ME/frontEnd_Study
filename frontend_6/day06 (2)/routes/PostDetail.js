import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './PostDetail.css'

const PostDetail = ({posts}) => {
  const { id } = useParams(); // 문자열
  const post = posts.find(post=>post.id === Number(id))
  // post.id 숫자 타입
  console.log( post )
  return (
    <div className='post-content'>
        <h3>PostDetail {id}</h3>
        {
          post && (
              <>
                <h4>{post.title}</h4>
                <p className='datetime'>{post.datetime}</p>
                <p className='post-body'>
                   {post.body}
                </p>
                <Link to=".." className='gotoBtn'>이전</Link>
              </>
          )
        }
    </div>
  )
}

export default PostDetail