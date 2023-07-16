import React, {useState} from 'react'
import './Tabs.css'

const tabTitle = ['HTML', 'CSS', 'JAVASCRIPT', 'NODEJS', 'REACT']
const tabContent = [
    'html content',
    'css content',
    'javascript content',
    'NODEJS content',
    'REACT content',
]

// 컴포넌트
const Tabs = () => {
  
  const [tabNum , setTabNum ] = useState(0);
  return (
    <div className="tab-container">
        <ul className="tab-btns">
           {
                tabTitle.map((title, index)=>(
                    <li className={ tabNum === index ? "active" : ""}
                        onClick={ ()=>{setTabNum(index)} }
                    > 
                        {title}
                    </li>
                ))
           }           
        </ul>
        <div className="tab-contents">
            {
                tabContent.map((content, index)=>(
                    <div className={ tabNum === index ? "content active" : "content"}>
                        <div>
                            { content }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Tabs