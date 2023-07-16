import React, { useState, useEffect } from 'react'

const useTitle = (inintialTitle) => {
    const [ title, setTitle ] = useState(inintialTitle );

    useEffect(()=>{

        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title; 

    }, [title])

  return setTitle;
}

export default useTitle