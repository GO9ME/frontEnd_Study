import React from 'react'

const TabContent = ({tabNum, index, item}) => {
  return (
    <div className={ tabNum === index ? "content active" : "content"}>
        <div>
            { item.content }
        </div>
    </div>
  )
}

export default TabContent