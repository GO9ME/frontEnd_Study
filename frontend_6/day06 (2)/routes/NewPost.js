import React from 'react'
import './NewPost.css'

const NewPost = ({
    posts, title, body, setTitle, setBody, submitHandle 
}) => {
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

            <button>등록</button>
        </form>
    </div>
  )
}

export default NewPost