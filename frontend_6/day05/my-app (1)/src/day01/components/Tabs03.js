import React, {useState} from 'react'
import './Tabs.css'

const tabs = [
    {
        title : "HTML",
        content : "html content"
    },
    {
        title : "CSS",
        content : "css content"
    },
    {
        title : "JAVASCRIPT",
        content : "javascript content"
    },
    {
        title : "NODEJS",
        content : "nodejs content"
    },
    {
        title : "REACT",
        content : "react content"
    },
]
 
// 컴포넌트
const Tabs = () => {
  const [tabNum , setTabNum ] = useState(0);
  return (
    <div className="tab-container">
        <ul className="tab-btns">
           {
                tabs.map((item, index)=> (
                    <li className={ tabNum === index ? "active" : ""}
                        onClick={ ()=>{setTabNum(index)} }
                    > 
                        {item.title}
                    </li>
                ))
           }           
        </ul>
        <div className="tab-contents">
            {
                tabs.map((item, index)=>(
                    <div className={ tabNum === index ? "content active" : "content"}>
                        <div>
                            { item.content }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Tabs