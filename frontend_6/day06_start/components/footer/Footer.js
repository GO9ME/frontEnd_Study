import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContextProvider'
import './Footer.css'

const Footer = ( ) => {
    const {darkTheme} =  useContext(ThemeContext);
    const style = {
    height:"100px", 
    background: darkTheme ? "black" : "white",
    color:darkTheme ? "white" : "black"
    }
  return (
    <footer style={style}>Footer</footer>
  )
}

export default Footer