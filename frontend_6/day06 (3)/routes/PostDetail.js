import React, {useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import { PostsContext }  from '../contexts/PostsContextProvider'
import './PostDetail.css'

const PostDetail = () => {
  const {posts, deletePostHandle} = useContext(PostsContext);

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
                <div className='btn-group'>
                  <Link to=".." className='btn gotoBtn'>이전</Link>
                  <Link to=".." className='btn delBtn'
                          onClick={ ()=>{deletePostHandle(post.id)}}
                  >삭제</Link>
                </div>
              </>
          )
        }
    </div>
  )
}

export default PostDetail