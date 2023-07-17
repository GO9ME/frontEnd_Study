import React , {useContext} from 'react'
import DarkTheme from '../../components/theme/DarkTheme'
import { ThemeContext } from '../../contexts/ThemeContextProvider'
import { Nav } from '../index'
import './Header.css'

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const style = {
    height:"100px", 
    background: darkTheme ? "black" : "white",
    color:darkTheme ? "white" : "black"
  }
  return (
      <header style={style}>
        <h1>logo</h1>
        <Nav />
        <DarkTheme />
      </header>
  )
}

export default Header