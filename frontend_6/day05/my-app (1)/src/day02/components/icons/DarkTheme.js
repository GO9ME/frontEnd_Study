import React from 'react'
// react icon 사용하기
// npm i react-icons
// https://github.com/react-icons/react-icons#readme
// https://react-icons.github.io/react-icons/ : icon 찾기 좋은 사이트

import { BiSolidBoltCircle } from "react-icons/bi";
import { BsFillBoomboxFill } from "react-icons/bs";
import { CiCloudSun } from "react-icons/ci";
import { FaCloudMoon } from "react-icons/fa";
// context  도구로 만들어져 있음 
// context는 props를 관리하는 도구
import './DarkTheme.css'

const DarkTheme = () => {
  return (
    <div>
        <BiSolidBoltCircle color={"red"}/>
        <BsFillBoomboxFill size={"3em"}/>
        <CiCloudSun className='myCiCloudSun' />
        <FaCloudMoon 
            style={{fontSize:"60px", color :"white", background : "black"}}/>
    </div>
  )
}

export default DarkTheme