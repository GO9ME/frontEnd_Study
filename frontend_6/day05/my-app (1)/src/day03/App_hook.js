import React, { useState, useEffect } from "react";
import './App.css'
import CountRef from "./components/useRef/CountRef"; 
import Login from "./components/useRef/Login"
import Register from "./components/useRef/Register"
import useFadeIn from "./components/customhook/useFadeIn";
import Vedio from "./components/useRef/Vedio";
import useTitle from "./components/customhook/useTitle";
import useInput from "./components/customhook/useInput";

const App = ()=>{
     const  fadeH1 = useFadeIn(3);
     const  fadeP = useFadeIn(5, 3);
     const  titleUpdate = useTitle('Loading ...');
     setTimeout( ()=>{
          titleUpdate('home');
          // route 변경시 마다 처리할 일
     }, 5000 )

     const lengthHandle = value => value.length <= 10 ; 

     const name = useInput('name', lengthHandle);
     const pwd = useInput('password', lengthHandle);

  
    return (
         <div>
           {/* <CountRef /> */}
           {/* <Login /> */}
           {/* <Register /> */}
           <Vedio />
           <h1 {...fadeH1} >페이드인</h1>
           <p {...fadeP}> 5초동안 천천히 나타남</p>
           
           {/* <input placeholder="Name" { ...name } /> */}
           <input placeholder="Name"  value={name.value} onChange={name.onChangeHandle} />
           <input placeholder="password" { ...pwd } />
         </div>
    )
}

export default App;