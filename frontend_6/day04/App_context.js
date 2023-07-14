import React, { useState } from "react";
import './App.css'
import Layout from "./containers/Layout";
// context : hook
// props : 전역에서 사용될 props를 props 드릴링 위한 도구 


/*
import { ThemeContext } from "./contexts/ThemeContext";
const App = ()=>{
    const [ darkTheme, setDarkTheme ] = useState(false)
    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <Layout />
        </ThemeContext.Provider> 
    )
}
*/
/*
import ThemeContextProvider from "./contexts/ThemeContextProvider";
const App = ()=>{
    
    return (
        <ThemeContextProvider>
            <Layout />
        </ThemeContextProvider> 
    )
}
*/

// index.js : ThemeContextProvider를 감싸기
const App = ()=>{
    return (
        <Layout />
    )
}

export default App;