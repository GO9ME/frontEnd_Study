import React, { useState, useEffect } from 'react'

const datas = [
    {
        id:1,
        checked : false, 
        item: 'html'
    }
]
const style = {
    textDecoration: "line-through" 
}
const nonstyle = {
    textDecoration: "none" 
}
const Todo = () => {
    const [todo, setTodo] = useState(""); // 입력한 할일
    const [todos, setTodos] = useState([]); // 모든 할일 저장

    useEffect(()=>{
        //get : fetch('http://localhost:3500/todos')
    },[])

    const addItemHandle = (item)=>{
        const id = todos.length ? todos[todos.length-1].id+1:1;
        const newItem = { id, checked : false, item}
        setTodos(current => [newItem, ...current]);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        // 화면이 자동으로 갱신됨을 방지
        if( todo === "") return; 
        // 입력한 내용이 없으면 그냥 리턴

        // todos.push(todo);
        addItemHandle(todo);
        setTodo("")
        //post : fetch('http://localhost:3500/todos')
    }
    const onChange = (event)=>{
         setTodo(event.target.value);
         
    }
    const deleteHandle = (id)=>{
        const filtered =  todos.filter(todo=>todo.id !== id);
        setTodos(filtered);
        //delete fetch('http://localhost:3500/todos')
    }
    const checkHandle = (id)=>{
        const update = todos.map( item => item.id === id ? { ...item, checked:!item.checked} : item);
        setTodos(update);
        //put : fetch('http://localhost:3500/todos')
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