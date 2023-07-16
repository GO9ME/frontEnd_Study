import React, { useState } from 'react'
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
// context  도구로 만들어져 있음 
// context는 props를 관리하는 도구
import './DarkTheme.css'
// state, props

const DarkTheme = ({setDarkTheme, darkTheme}) => {
  return (
    <div onClick={()=>{ setDarkTheme(!darkTheme) }}>
        <FaCloudSun style={{ display : darkTheme ? "block" : "none"}}
                    className='dark_icon'
        />
        <FaCloudMoon style={{ display : darkTheme ? "none" : "block"}}  
                    className='dark_icon'
        />
    </div>
  )
}

export default DarkTheme