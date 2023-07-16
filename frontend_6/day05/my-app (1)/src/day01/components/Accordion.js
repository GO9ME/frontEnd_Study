import React, { useEffect, useState } from 'react'
import './Accordion.css';

const Accordion = () => {
    const [ acNum , setAcNum ] = useState(1);
    /*
    // acNum 갱신될때마다  callback  처리
    useEffect(()=>{
        console.log(acNum);
    }, [acNum])
    */

    const  titleClickHandle = (num)=>{
        setAcNum(num);
        console.log(acNum);
    }
  return (
    <div className="accordion-container">
        <div>
            <div className={ acNum === 1 ? "title active" : "title"}
                 onClick={ ()=>{ titleClickHandle(1) } }
            >title 1 </div>
            <div 
                className={ acNum === 1 ? "content active" : "content"}  
            >
                <div>
                    1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!
                </div>
            </div>
        </div>
        
        <div>
            <div className={ acNum === 2 ? "title active" : "title"}
                 onClick={ ()=>{ titleClickHandle(2) } }
            >title 2 </div>
            <div
                 className={ acNum === 2 ? "content active" : "content"} 
            >
                <div>
                    2  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!
                </div>
            </div>
        </div>
        <div>
            <div className={ acNum === 3 ? "title active" : "title"}
                 onClick={ ()=>{ titleClickHandle(3) } }
            >title 3 </div>
            <div 
                className={ acNum === 3 ? "content active" : "content"}  
            >
                <div>
                    3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion