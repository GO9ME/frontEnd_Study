import React, { useState, useEffect } from "react";
import './App.css'
import Layout from "./containers/Layout";
 
const App = ()=>{
    const  [value, setValue] = useState("");
    const  [count, setCount] = useState(0);

    const  inputHandle = (event)=>{
         setValue(event.target.value);
    }
    useEffect(()=>{ 
        console.log('언제나 실행', value);
        // 로딩, 랜더링 될때
    })
    useEffect(()=>{ 
        console.log('맨처음 로딩할 때만 한번실행');
        setValue('')
    }, [])
    useEffect(()=>{ 
        console.log('디펜던시 배열 : value값이 바뀔때만 실행')
    }, [count])
     // 맨처음 로딩할때와 디펜더시 배열이 바뀔때마다 실행

    return (
         <div>
            <input type="text" onInput={ inputHandle } value={value} />
            <div> 입력된 데이타 : {value} </div>
         </div>
    )
}

export default App;