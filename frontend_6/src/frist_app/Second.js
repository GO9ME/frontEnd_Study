import React, {useState} from 'react'
// HMR

//js 전통적인 함수형 클랙스를 만드는 방법
// 
const Second = () => {
    let num = 0;

    const countHandle = ()=>{
        num++;
        console.log(num);
        document.querySelector('span').innerHTML = num;
    }

    let [count, setCount] = useState(0); //let count = 0
    // setCount(5); => count = 5;
    const paramHandle = (recount)=>{
        setCount(count + recount);
        //count = count + recount
    }
  return (
    <div>
        <span className='num'>Second {num}</span>
        <button onClick={countHandle}>num click</button>
        <span className='count'> {count}</span>
        <button onClick={ ()=>{setCount(count+1)}}>click</button>
        <span className='reCount'> {count}</span>
        <button onClick={ ()=>{paramHandle(8)}}>click</button>
    </div>
  )
}

export default Second
/*
import React, { useState } from 'react'

// js 전통적인 함수형 클래스를 만드는 방법 
// class
const Second = () => {
  let num = 0; 

  const countHandle = ()=>{
      num++;
      console.log(num);
      document.querySelector('.num').innerHTML = num;
      // jsx
  }

  let [count, setCount ] = useState(0); // let count = 0

  // setCount(5); => count = 5; 
  // setCount(count+1) ; => count = count + 1
  const paramHandle = ( recount )=>{
      setCount( count + recount);
      // count = count + recount; 
  }

  return (
    <div>
        <span className='num'>Second {num}  </span>
        <button onClick={ countHandle }>num click</button>
        <span className='count'>{ count }</span>
        <button onClick={ ()=>{ setCount(count+1) } }>click</button>
        <button onClick={ ()=>{ paramHandle(8) } }>click</button>
    </div>
  )
}

export default Second
*/
/*
  rafc  : 화살표함수 컴포넌트
  rafce : 화살표함수 컴포넌트, export 별도
  rfc   : 함수 컴포넌트
  rfce  : 함수 컴포넌트, export 별도
*/
/*
react 이벤트 핸들러 사용법 
1. 파라미터가 없다면 그냥 호출
2. 파라미터가 있다면 화살표함수를 만들어서 호출
*/