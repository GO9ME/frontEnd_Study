import React from 'react'
/*
// 1단계 컴포넌트 분리 
const AcContent = ({ acNum, setAcNum, item, index}) => {
  return (
    <div>
         
        <div className={ acNum === index ? "title active" : "title"}
            onClick={ ()=>{ setAcNum(index) } }
        > {item.title} </div>
        
        
        <div 
            className={ acNum === index ? "content active" : "content"}  
        >
            <div>
                { item.content }
            </div>
        </div>
    </div>
  )
}
*/
import AcTitle from './AcTitle'
import ItemContent from './ItemContent'
// 2단계 분리 : props drilling 
const AcContent = ({ acNum, setAcNum, item, index}) => {
    return (
      <div>  
        <AcTitle acNum={acNum} 
                 setAcNum={setAcNum} 
                 title={item.title}  //
                 index={index} 
        />
          
        <ItemContent  acNum={acNum} 
                 setAcNum={setAcNum} 
                 content={item.content}  //
                 index={index} 
        />
      </div>
    )
  }
export default AcContent