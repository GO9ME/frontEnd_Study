import React, { useEffect, useState } from 'react'
import './Accordion.css';
import AcContent from './AcContent';

const acDatas = [
    {
        title : 'Lorem',
        content : '1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!'
    }, 
    {
        title : 'Ipsum',
        content : '2 ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!'
    }, 
    {
        title : 'Consectetur',
        content : '3 ipsum, dolor sit amet consectetur adipisicing elit. Excepturi iure quod minima doloremque repellat iste sunt voluptate sed et dolorem aperiam animi, alias dolorum itaque porro vero, esse quae facilis!'
    }
]

const Accordion = () => {
    const [ acNum , setAcNum ] = useState(0);
   
  return (
    <div className="accordion-container">
        {
            acDatas.map((item, index)=>(
                <AcContent acNum={acNum} 
                           setAcNum={setAcNum}
                           item={item}
                           index={index}
                />
            ))
        }        
    </div>
  )
}

export default Accordion