import React from 'react'

/*
const Images = () => {
    // 1. 첫번째 방법
  return (
    <div>
        <img  src="./images/about01.png" alt="about" />
        <img  src="./images/about02.png" alt="about" />
        <img  src="./images/about03.png" alt="about" />
        <img  src="./images/about04.png" alt="about" />
    </div>
  )
}
*/
/*
import about01 from  './about01.png';
import about02 from  './about02.png';
import about03 from  './about03.png';
import about04 from  './about04.png';

const Images = () => {
    // 2.번째 방법
  return (
    <div>
        <img  src={about01} alt="about" /> 
        <img  src={about02} alt="about" /> 
        <img  src={about03} alt="about" /> 
        <img  src={about04} alt="about" /> 
    </div>
  )
}
*/
/*
import assets from './assets'
// assets = { about01, about02, about03, about04 }

const Images = () => {
    // 3.번째 방법 : 객체 리턴
  return (
    <div>
        <img  src={assets.about01} alt="about" /> 
        <img  src={assets.about02} alt="about" /> 
        <img  src={assets.about03} alt="about" /> 
        <img  src={assets.about04} alt="about" /> 
    </div>
  )
}
*/

import images from './assets'
const Images = () => {
    // 4.번째 방법 : 배열
  return (
    <div>
        {
          images.map(img=>(
            <img src={img}  alt={img} />
          ))
        }
    </div>
  )
}

export default Images
