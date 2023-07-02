import React from 'react'

const Footer = ({darkTheme}) => {
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