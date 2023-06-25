import React from 'react'
import Nav from './Nav'
/*
props = {
        logo:"jemicom",
        menus:menus,
        consolePrint:consolePrint
      }
*/
/*
const Header = (props) => {
  return (
    <header>
      <h1>{props.logo}</h1>
      <Nav menus={props.menus}/>
    </header>
  )
}
*/
const Header = ({logo, menus}) => {
  // logo 를 함부로 바꾸면 안됨 
  return (
    <header>
      <h1>{logo}</h1>
      <Nav menus={menus}/>
    </header>
  )
}
export default Header