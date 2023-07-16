import React, { useState } from 'react'
import { CiCloudSun } from "react-icons/ci";
import { FaCloudMoon } from "react-icons/fa";
// context  도구로 만들어져 있음 
// context는 props를 관리하는 도구
import './DarkTheme.css'
// state, props

const DarkTheme = () => {
  const [ darkTheme, setDarkTheme ]=useState(true);

  return (
    <div onClick={()=>{ setDarkTheme(!darkTheme) }}>
        <CiCloudSun  style={{ display : darkTheme ? "block" : "none"}}
                    className='dark_icon'
        />
        <FaCloudMoon style={{ display : darkTheme ? "none" : "block"}}  
                    className='dark_icon'
        />
    </div>
  )
}

export default DarkTheme