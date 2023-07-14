import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const Section = () => {
    const {darkTheme} =  useContext(ThemeContext);
    const style = {
        height:"1000px", 
        background: darkTheme ? "black" : "white",
        color:darkTheme ? "white" : "black"
    }
  return (
    <div style={style}>Section</div>
  )
}

export default Section