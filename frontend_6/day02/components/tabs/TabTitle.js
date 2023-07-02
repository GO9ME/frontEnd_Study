import React from 'react'

/*
const TabTitle = (props) => {
    // 컴포넌트를 클래스형 컴포넌트를 사용할 때 더 많이 사용
    // props = { tabNum : tabNum, index:index, item:item}
    // 상위에서 props가 10개인데 하위에서 3개만 사용
  return (
        <li className={ props.tabNum === props.index ? "active" : ""}
            onClick={ ()=>{props.setTabNum(props.index)} }
        > 
            {props.item.title}
        </li>
  )
}
*/

const TabTitle = ({tabNum, setTabNum, index, item}) => {
  return (
        <li className={ tabNum === index ? "active" : ""}
            onClick={ ()=>{setTabNum(index)} }
        > 
            {item.title}
        </li>
  )
}

export default TabTitle