import React, {useState} from 'react'
import './Tabs.css'

const Tabs = () => {
  const [tabNum , setTabNum ] = useState('A');
  return (
    <div className="tab-container">
        <ul className="tab-btns">
            <li className={ tabNum === 'A' ? "active" : ""}
                onClick={ ()=>{setTabNum('A')} }
            > 
                btn 1
            </li>
            
            <li className={ tabNum === 'B' ? "active" : ""}
                onClick={ ()=>{setTabNum('B')} }
            > 
                btn 2
            </li>
            
            <li className={ tabNum === 'C' ? "active" : ""}
                onClick={ ()=>{setTabNum('C')} }
            > 
                btn 3
            </li>
        </ul>
        <div className="tab-contents">
            <div className={ tabNum === 'A' ? "content active" : "content"}>
                <div>
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio aut molestiae consequuntur necessitatibus, tempora velit inventore, odio quos, atque beatae eaque! Explicabo pariatur qui earum assumenda architecto, culpa minima!
                </div>
            </div>
            <div className={ tabNum === 'B' ? "content active" : "content"}>
            <div>
                    2. ipsum dolor sit amet consectetur adipisicing elit. Vel nam minus earum consectetur sit? Est reiciendis autem aut distinctio voluptate blanditiis laborum quasi quos a praesentium. Voluptates sint optio debitis.
            </div>
            </div>
            <div className={ tabNum === 'C' ? "content active" : "content"}>
                <div>
                    3. dolor sit amet, consectetur adipisicing elit. Distinctio odio pariatur facilis repellat accusamus, aperiam totam omnis sequi iure deserunt natus sapiente veniam exercitationem commodi architecto voluptatum et sit enim.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabs