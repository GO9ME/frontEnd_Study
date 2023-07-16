import React from 'react'
const style = {
    textDecoration: "line-through" 
}
const nonstyle = {
    textDecoration: "none" 
}
const List = ({item, checkHandle, deleteHandle}) => {
  return (
    <li  key={item.item}>
        <input type="checkbox" id={`item${item.id}`} 
                checked={item.checked} 
                onChange={()=>{ checkHandle(item.id)}}
        />
        <label htmlFor={`item${item.id}`}
            style={ item.checked ? style : nonstyle }
        >{item.item}</label>
        <button onClick={()=>{deleteHandle(item.id)}}>삭제</button>
    </li>
  )
}

export default List