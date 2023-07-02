import React from 'react'

const Section = ({darkTheme}) => {
    const style = {
        height:"1000px", 
        background: darkTheme ? "black" : "white",
        color:darkTheme ? "white" : "black"
    }
  return (
    <div style={style}>Section</div>
  )
}

export default Section