import React, { useEffect, useState } from 'react'
import './Accordion.css';

const acTitle = ['Title 1', 'Title 2', 'Title 3'];
const acContent = [
    '1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!',
    '2 dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!',
    '3 sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!'
]

const Accordion = () => {
    const [ acNum , setAcNum ] = useState(1);
   
  return (
    <div className="accordion-container">
        {
            acTitle.map((title, index)=>(
                <div>
                    {/* 제목 */}
                    <div className={ acNum === index ? "title active" : "title"}
                        onClick={ ()=>{ setAcNum(index) } }
                    > {title} </div>
                    {/* content */}
                    <div 
                        className={ acNum === index ? "content active" : "content"}  
                    >
                        <div>
                           { acContent[index] }
                        </div>
                    </div>
                </div>
            ))
        }        
    </div>
  )
}

export default Accordion