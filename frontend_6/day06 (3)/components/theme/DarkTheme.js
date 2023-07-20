import React, { useContext } from 'react'
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { ThemeContext } from '../../contexts/ThemeContextProvider';
import './DarkTheme.css' 

const DarkTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
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