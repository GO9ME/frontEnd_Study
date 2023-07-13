import React, { useState, useEffect } from "react";
import './App.css'
import CountRef from "./components/useRef/CountRef"; 
import Login from "./components/useRef/Login"
import Register from "./components/useRef/Register"
const App = ()=>{
     
    return (
         <div>
           {/* <CountRef /> */}
           {/* <Login /> */}
           <Register />
         </div>
    )
}

export default App;