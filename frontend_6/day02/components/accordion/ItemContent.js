import React from 'react'

// item.content => content
const ItemContent = ({ acNum, index, content }) => {
  return (
    <div 
        className={ acNum === index ? "content active" : "content"}  
    >
        <div>
            { content }
        </div>
    </div>
  )
}

export default ItemContent