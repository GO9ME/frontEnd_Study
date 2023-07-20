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

    const today = new Date();
  return (
    <footer style={style}
            className='footer-container'
    >Footer {today.getFullYear()}</footer>
  )
}

export default Footer