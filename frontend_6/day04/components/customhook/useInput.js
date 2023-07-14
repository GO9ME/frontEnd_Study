import React, { useState } from 'react'

const useInput = (initialValue, validator) => {
    const [value, setValue]= useState(initialValue);

    const onChangeHandle = (event)=>{
        console.log(event.target);
        const targetValue = event.target.value;
        let willUpdate = true; 
        if( typeof validator === 'function'){
            willUpdate = validator(targetValue)
        }

        if(willUpdate){
            setValue(targetValue)
        }
    }

    return  { value, onChangeHandle }
}

export default useInput