import React, { useState, useEffect } from 'react'
// https://axios-http.com/kr/docs/intro
import List from './List'
import axios from './api/axios'
const  TODOS_URL = '/todos'


const Todo = () => {
    const [ isLoading, setIsLoading] = useState(true); // 로딩 중
    const [todo, setTodo] = useState(""); // 입력한 할일
    const [todos, setTodos] = useState([]); // 모든 할일 저장
    const [ search, setSearch ] = useState("");

    const getTodos = async ()=>{
        const res = await axios.get(TODOS_URL);
        setTodos(res.data); 
    }

    const postTodos = async ( item )=>{
        const res = await axios.post(TODOS_URL, {item});
        console.log(res);
        setTodos(res.data);
    }
    useEffect(()=>{
        getTodos(); 
        setIsLoading(!isLoading);
    },[])

    const onSubmit = (event)=>{
        event.preventDefault();
        // 화면이 자동으로 갱신됨을 방지
        if( todo === "") return; 
       
        postTodos(todo);
        setTodo("")
    }
    const onChange = (event)=>{
         setTodo(event.target.value);
         
    }
    const deleteHandle = async (id)=>{
       const res = await axios.delete(`${TODOS_URL}/${id}`);
       setTodos(res.data);
    }
    const checkHandle = async (id)=>{
       
        const res = await axios.put( TODOS_URL,  { id });
        setTodos(res.data);
    }

  return (
    <>
    <div className='search-container'>
        <label  htmlFor="search">검색어를 입력하세요</label>
        <input  id="search"
                type="text"
                placeholder="search items"
                value={search}
                onChange={(event)=>setSearch(event.target.value)}
         />
    </div>
    <div  className='form-container'>
        <form className='form-box'
          onSubmit={onSubmit}
        >
            <label htmlFor='addItem'>목록입력하세요</label>
            <input autoFocus
                onChange = { onChange }
                type="text"
                placeholder='input todo'
                value={todo}
                required 
                id="addItem"
            />
            <button>Add</button>
        </form>
        {
            isLoading ? <div> Loadding... </div> : todos.length ? (
                <ul>
                    {
                        todos.map(item=>
                            item.item.includes(search) ? 
                            (
                                <List item={item}  
                                      checkHandle={checkHandle} 
                                      deleteHandle={deleteHandle }
                                />
                            ) : null  
                        )
                    }
                </ul>
            ) : (
                <p>목록을 찾을 수 없습니다.</p>
            )
        }
        
    </div>
    </>
  )
}

export default Todo


/// 체크박스 할일  수정,삭제
/*

*/