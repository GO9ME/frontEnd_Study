import './FadeSlider.css'
import React, { useState } from 'react'
// 슬라이더의 인디케이터용
import { IoMdRadioButtonOn } from "react-icons/io";
import { IoRadioButtonOffOutline  } from "react-icons/io5"; 
import { BsFillCaretLeftFill, BsFillCaretRightFill  } from "react-icons/bs";
//https://github.com/ahsor/swatch : 이미지 다운로드
import bgs from '../../assets/img_index.js'

const FadeSlider = () => {
    const [fsToggle, setFsToggle] = useState(0); // 0, 1,2,3 

    const leftHandle = ()=>{
        fsToggle <= 0 ? setFsToggle(3) : setFsToggle(fsToggle-1);
    }
    const rightHandle = ()=>{
        fsToggle >= bgs.length - 1 ? setFsToggle(0): setFsToggle(fsToggle+1);
    }
    // useEffect 
  return (
    <div className='fadeSlider-container'>
        <div className='imgs-container'>
            {
                bgs.map((bg, index)=>(
                    <div className={fsToggle === index ? 'img-box show' : 'img-box'}>
                        <img src={bg} />
                    </div>
                ))
            }
        </div>
        <ul className='indecator'>
            { 
                bgs.map((bg, index)=>(
                    <li onClick={()=>{setFsToggle(index)}}>
                        {
                            fsToggle === index ? <IoMdRadioButtonOn /> :  <IoRadioButtonOffOutline />
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

export default FadeSlider