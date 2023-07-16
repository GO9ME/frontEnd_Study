import React, { useState, useEffect } from 'react'
import axios from 'axios'
// https://axios-http.com/kr/docs/intro

// import axios from './api/axios'

const style = {
    textDecoration: "line-through" 
}
const nonstyle = {
    textDecoration: "none" 
}
const Todo = () => {
    const [todo, setTodo] = useState(""); // 입력한 할일
    const [todos, setTodos] = useState([]); // 모든 할일 저장

    const getTodos = async ()=>{
        // fetch('http://localhost:3500/todos')
        // .then(res=>res.json()) // promise : 오브젝트
        // .then(res=>{
        //     setTodos(res)
        // })
        /*
        // 방법1
        axios({
            method : 'get',
            url: 'http://localhost:3500/todos'
        }).then(res=>{
                console.log(res)
                setTodos(res.data);
                // {data: Array(3), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
            })
        */
        /*
        // 방법 2
        axios.get('http://localhost:3500/todos', { timeout : 5000})  
            .then(res=>{
                console.log(res)
                setTodos(res.data); 
            }).catch(err=>console.error(err)) 
        */
        // const res = await fetch('http://localhost:3500/todos');
        // const rows = await res.json();
        // setTodos(rows);
        // 방법 3

        const res = await axios.get('http://localhost:3500/todos');
        setTodos(res.data); 
    }

    const postTodos = async ( item )=>{
        // fetch 비교해서  promise 처리 생략, then 단계 생략
        // header 등 셋팅 생략 가능
        /*
        axios({
            method : 'post',
            url: 'http://localhost:3500/todos',
            data: { item }
        }).then(res=>{
                console.log(res)
                setTodos(res.data);
        }).catch( err=> console.error(err))
        // 방법2
        axios.post('http://localhost:3500/todos', { item })  
        .then(res=>{
            console.log(res)
            setTodos(res.data); 
        }).catch(err=>console.error(err)) 
        */
        const res = await axios.post('http://localhost:3500/todos', {item});
        console.log(res);
        setTodos(res.data);
    }
    useEffect(()=>{
        //get : fetch('http://localhost:3500/todos');
        getTodos(); 
    },[])

    // todo === item
    // const addItemHandle = (item)=>{
    //     postTodos(item);
    // }
    const onSubmit = (event)=>{
        event.preventDefault();
        // 화면이 자동으로 갱신됨을 방지
        if( todo === "") return; 
        // 입력한 내용이 없으면 그냥 리턴

        // todos.push(todo);
        postTodos(todo);
        setTodo("")
        //post : fetch('http://localhost:3500/todos')
    }
    const onChange = (event)=>{
         setTodo(event.target.value);
         
    }
    const deleteHandle = async (id)=>{
        axios({
            method : 'delete',
            url:  ,
            data: { item }
        }).then(res=>{
                console.log(res)
                setTodos(res.data);
        }).catch( err=> console.error(err))
        const res = await fetch(`http://localhost:3500/todos/${id}`, {
            method :'delete', 
            headers : {
                'content-type' : 'application/json;charset=utf-8'
            }
        });
        const rows = await res.json();
        setTodos(rows);
        //delete fetch('http://localhost:3500/todos')
    }
    const checkHandle = async (id)=>{
        //put : fetch('http://localhost:3500/todos')
        const res = await fetch('http://localhost:3500/todos', {
            method :'PUT',
            body: JSON.stringify({id}),
            headers : {
                'content-type' : 'application/json;charset=utf-8'
            }
        });
        const rows = await res.json();
        setTodos(rows);
    }
  return (
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
        <ul>
            {
                todos.length && todos.map(item=>( 
                    <li>
                        <input type="checkbox" id={`item${item.id}`} 
                                checked={item.checked} 
                                onChange={()=>{ checkHandle(item.id)}}
                        />
                        <label htmlFor={`item${item.id}`}
                               style={ item.checked ? style : nonstyle }
                        >{item.item}</label>
                        <button onClick={()=>{deleteHandle(item.id)}}>삭제</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo


/// 체크박스 할일  수정,삭제