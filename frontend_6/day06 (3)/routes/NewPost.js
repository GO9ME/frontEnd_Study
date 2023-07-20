import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostsContext }  from '../contexts/PostsContextProvider'
import './NewPost.css'

const NewPost = () => {
  const {
    title, body, setTitle, setBody, submitHandle , addPostHandle
  } = useContext(PostsContext);
  
  return (
    <div className='form-container'>
        <form onSubmit={submitHandle}>
            <label htmlFor='title'>제목</label>
            <input id='title' 
                    type="text" 
                    value={title} 
                    onChange={ e=>setTitle(e.target.value) }
            />
            <label htmlFor='body'>내용</label>
            <textarea cols="30" rows="10" id="body" 
                    value={body}
                    onChange={ e=>setBody(e.target.value) }        
            >

            </textarea>

            <Link to=".." onClick={addPostHandle}>등록</Link>
        </form>
    </div>
  )
}

export default NewPost