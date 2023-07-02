import React from 'react'
import DarkTheme from '../../components/theme/DarkTheme'

const Header = ({ darkTheme, setDarkTheme }) => {
  const style = {
    height:"100px", 
    background: darkTheme ? "black" : "white",
    color:darkTheme ? "white" : "black"
  }
  return (
      <header style={style}>
        <h1>logo</h1>
        <DarkTheme setDarkTheme={setDarkTheme}
                darkTheme={darkTheme}
        />
      </header>
  )
}

export default Header