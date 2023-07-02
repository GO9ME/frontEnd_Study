import React from 'react'

// item => item.title => title
const AcTitle = ({acNum, index, setAcNum, title}) => {
  return (
        <div className={ acNum === index ? "title active" : "title"}
             onClick={ ()=>{ setAcNum(index) } }
        > 
            {title} 
        </div>
  )
}

export default AcTitle