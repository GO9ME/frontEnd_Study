import React, {useState} from 'react'
import './Tabs.css'
import TabTitle from './TabTitle';
import TabContent from './TabContent';

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
                    <TabTitle tabNum={tabNum} 
                              setTabNum={setTabNum}
                              item={item}
                              index={index}
                    />
                ))
           }           
        </ul>
        <div className="tab-contents">
            {
                tabs.map((item, index)=>(
                    <TabContent  tabNum={tabNum}  
                                 index={index}  
                                 item={item} 
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Tabs