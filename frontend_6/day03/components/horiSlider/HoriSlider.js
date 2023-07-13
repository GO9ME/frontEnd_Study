import './HoriSlider.css'
import React, { useState } from 'react'
// 슬라이더의 인디케이터용
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoRadioButtonOffOutline  } from "react-icons/io5"; 
import { BsFillCaretLeftFill, BsFillCaretRightFill  } from "react-icons/bs";
//https://github.com/ahsor/swatch : 이미지 다운로드
import bgs from '../../assets/img_index.js'

const HoriSlider = () => {
    const [horiToggle, setHoriToggle] = useState(0); // 0, 1,2,3 

    const leftHandle = ()=>{
        horiToggle <= 0 ? setHoriToggle(3) : setHoriToggle(horiToggle-1);
    }
    const rightHandle = ()=>{
        horiToggle >= bgs.length - 1 ? setHoriToggle(0): setHoriToggle(horiToggle+1);
    }
    // useEffect 
  return (
    <div className='horiSlider-container'>
        <div className='imgs-container'>
            {
                bgs.map((bg, index)=>(
                    <div className={horiToggle === index ? 'img-box show' : 'img-box'}>
                        <img src={bg} />
                    </div>
                ))
            }
        </div>
        <ul className='indecator'>
            { 
                bgs.map((bg, index)=>(
                    <li onClick={()=>{setHoriToggle(index)}}>
                        {
                            horiToggle === index ? <IoMdRadioButtonOn /> :  <IoRadioButtonOffOutline />
                        }
                    </li>
                ))
            }
        </ul>

        <BsFillCaretLeftFill className='ctrl-btn left'
                onClick={ leftHandle }
        />
        <BsFillCaretRightFill className='ctrl-btn right'
                onClick={ rightHandle }
        />
    </div>
  )
}

export default HoriSlider